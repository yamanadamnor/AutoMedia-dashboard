import { useState, Fragment, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { Dialog, Transition } from '@headlessui/react';

import { Prisma } from '@prisma/client';

import { AddServiceModalAtom } from '../states';
import Image from 'next/image';
import { useDebounce } from '../utils';

interface IServiceForm {
  title: string;
  description: string;
  handleSubmit: (data: Prisma.ServiceCreateInput) => Promise<void>;
}

const ServiceForm = ({ handleSubmit, title, description }: IServiceForm) => {
  const [isAddServiceModalOpen, setAddServiceModal] = useAtom(AddServiceModalAtom);
  const [newService, setNewService] = useState<Prisma.ServiceCreateInput>({
    title: '',
    description: '',
    href: '',
    image: 'https://raw.githubusercontent.com/walkxhub/dashboard-icons/master/svg/sonarr.svg',
  });

  const debouncedNewServiceTitle = useDebounce(newService.title, 200);

  const formHandler = () => {
    if (!newService) return;
    handleSubmit(newService);
    setNewService({
      title: '',
      description: '',
      href: '',
      image: 'https://raw.githubusercontent.com/walkxhub/dashboard-icons/master/svg/sonarr.svg',
    });
  };

  // Credit: https://github.com/ajnart/homarr/blob/dev/src/components/AppShelf/AddAppShelfItem.tsx#L62-L76
  const autoIcon = (name: string) => {
    if (name === undefined || name === '') return null;
    fetch(
      `https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/${name
        .replace(/\s+/g, '-')
        .toLowerCase()
        .replace(/^dash\.$/, 'dashdot')}.png`,
    ).then((res) => {
      if (res.ok) {
        setNewService({ ...newService, image: res.url });
      }
    });

    return false;
  };

  useEffect(() => {
    if (debouncedNewServiceTitle) {
      autoIcon(debouncedNewServiceTitle);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedNewServiceTitle]);

  const inputElementClass = `p-1 bg-transparent my-2 border-b-1 border-t-0 border-r-0 border-l-0 
  focus:ring-offset-0 focus:ring-0 focus:ring-gray-600`;

  const initial = { opacity: 0, y: -40 };

  const animate = {
    opacity: 1,
    y: 0,
  };

  return (
    <motion.div initial={initial} animate={animate} exit={initial}>
      <Transition appear show={isAddServiceModalOpen} as={Fragment}>
        <Dialog as="div" className="absolute z-10" onClose={() => setAddServiceModal(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                  <div className="mt-2">
                    <div className="w-full flex justify-center ">
                      <div className="w-24">
                        <Image
                          width={200}
                          height={200}
                          className="object-contain"
                          src={newService.image}
                          alt=""
                        />
                      </div>
                    </div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        formHandler();
                      }}
                    >
                      <div className="flex flex-col">
                        <input
                          className={inputElementClass}
                          value={newService.title}
                          onChange={(e) => {
                            setNewService({ ...newService, title: e.target.value });
                          }}
                          placeholder={title}
                          required
                          type="text"
                        />
                        <input
                          className={inputElementClass}
                          value={newService.description}
                          onChange={(e) =>
                            setNewService({ ...newService, description: e.target.value })
                          }
                          placeholder={description}
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
                          onClick={() => {setAddServiceModal(false); formHandler()}}
                          value="Add Service"
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
