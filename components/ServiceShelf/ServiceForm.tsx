import { useState, Fragment, useEffect } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import type { Prisma, Service } from '@prisma/client';

import { useAtom } from 'jotai';
import useSWR, { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';

import { useDebounce, fetcher, putter, poster } from '../utils';
import { AddServiceModalAtom, editServiceIdAtom } from '../states';

const ServiceForm = () => {
  const { mutate } = useSWRConfig();
  const [modalOpen, setModalOpen] = useAtom(AddServiceModalAtom);
  const [editServiceId, setEditServiceId] = useAtom(editServiceIdAtom);
  const [newService, setNewService] = useState<Prisma.ServiceCreateInput>({
    title: '',
    description: '',
    href: '',
    image: '',
  });

  const { data, error } = useSWR<Prisma.ServiceCreateInput, Error>(() => {
    if (editServiceId != 0) {
      return `/api/service/${editServiceId}`;
    }
  }, fetcher);

  useEffect(() => {
    if (!error && data) {
      setNewService({
        title: data.title,
        description: data.description,
        href: data.href,
        image: data.image,
      });
    }
  }, [data, error]);

  const debouncedNewServiceTitle = useDebounce(newService.title, 200);

  const saveService = async (service: Prisma.ServiceCreateInput) => {
    if (editServiceId != 0) {
      putter(`/api/service/${editServiceId}`, newService).catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
      await mutate('/api/services');
    } else {
      await mutate('/api/services', poster('/api/services', service), {
        populateCache: (newServ: Service, services: Service[]) => {
          return [...services, newServ];
        },
        revalidate: false,
      });

      setEditServiceId(0);

      toast.success(`${service.title} was added`);
    }
  };

  // Credit: https://github.com/ajnart/homarr/blob/dev/src/components/AppShelf/AddAppShelfItem.tsx#L62-L76
  const autoIcon = (name: string) => {
    if (name === undefined || name === '') return null;
    fetch(
      `https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/${name
        .replace(/\s+/g, '-')
        .toLowerCase()
        .replace(/^dash\.$/, 'dashdot')}.png`,
    )
      .then((res) => {
        if (res.ok) {
          setNewService({ ...newService, image: res.url });
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });

    return false;
  };

  useEffect(() => {
    if (debouncedNewServiceTitle) {
      autoIcon(debouncedNewServiceTitle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedNewServiceTitle]);

  const inputElementClass = `px-4 py-2 my-2 rounded border-b-1 border-t-0 border-r-0 border-l-0 
  focus:ring-offset-0 focus:ring-0 focus:ring-gray-600 bg-service-card`;

  const initial = { opacity: 0, y: -40 };

  const animate = {
    opacity: 1,
    y: 0,
  };

  const submitHandler = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await saveService(newService);
      setModalOpen(false);
    } catch (error) {
      toast.error('Could not save the service');
    }
  };

  return (
    <motion.div initial={initial} animate={animate} exit={initial}>
      <Transition appear as={Fragment} show={modalOpen}>
        <Dialog
          as="div"
          className="absolute z-10"
          onClose={() => {
            setModalOpen(false);
            setEditServiceId(0);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center text-white">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden rounded-2xl
                  bg-service-card-solid p-6 text-left align-middle shadow-xl transition-all"
                >
                  <div>
                    <div className="w-full flex justify-center mb-3">
                      <div className="flex w-24 h-24 bg-service-card rounded-lg px-2">
                        {newService.image && (
                          <Image
                            width={200}
                            height={200}
                            className="object-contain"
                            src={newService.image}
                            alt="Service icon"
                          />
                        )}
                      </div>
                    </div>
                    <form onSubmit={(e) => submitHandler(e)}>
                      <div className="flex flex-col">
                        <input
                          className={inputElementClass}
                          value={newService.title}
                          onChange={(e) => {
                            setNewService({ ...newService, title: e.target.value });
                          }}
                          placeholder="title"
                          required
                          type="text"
                        />
                        <input
                          className={inputElementClass}
                          value={newService.description}
                          onChange={(e) =>
                            setNewService({ ...newService, description: e.target.value })
                          }
                          placeholder="description"
                          required
                          type="text"
                        />
                        <input
                          className={inputElementClass}
                          value={newService.image}
                          onChange={(e) => setNewService({ ...newService, image: e.target.value })}
                          placeholder="Enter your image adress"
                          required
                          type="text"
                        />
                        <input
                          className={inputElementClass}
                          value={newService.href}
                          onChange={(e) => setNewService({ ...newService, href: e.target.value })}
                          placeholder="Enter the service link"
                          required
                          type="text"
                        />
                        <input type="submit" value="submit" hidden />
                      </div>

                      <div className="mt-4">
                        <input
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent 
                            bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
                            focus-visible:ring-offset-2"
                          value={editServiceId == 0 ? 'Add Service' : 'Update Service'}
                          onClick={(e) => submitHandler(e)}
                        />
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </motion.div>
  );
};

export default ServiceForm;
