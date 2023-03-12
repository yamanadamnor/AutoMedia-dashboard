import Image from 'next/image';
import { useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Service } from '@prisma/client';
import { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';
import { Menu } from '@headlessui/react';
import { useSetAtom } from 'jotai';

import { EllipsisVerticalIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

import { IMenuItem, IServiceCard } from '../interfaces';
import { classNames, deleter } from '../utils';
import { AddServiceModalAtom, editServiceIdAtom } from '../states';

const ServiceCard = ({ id, title, image, href, description, inEdit }: IServiceCard) => {
  const [isHovered, setIsHovered] = useState(false);

  const initial = { opacity: 0, y: -40 };

  const animate = {
    opacity: 1,
    y: 0,
    height: 'auto',
  };

  const whileHover = {
    x: 5,
    transition: { duration: 0.05 },
  };

  const whileTap = {
    x: 5,
    transition: { duration: 0.05 },
  };

  const exit = {
    opacity: 0,
    y: -40,
    transition: { duration: 0.01 },
  };

  return (
    <motion.a
      initial={initial}
      animate={animate}
      exit={exit}
      whileHover={inEdit ? {} : whileHover}
      whileTap={whileTap}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="relative group select-none flex flex-col justify-between items-start transition ease-in-out
        duration-300 bg-service-card rounded-xl py-2 px-5 backdrop-blur-sm hover:shadow-service"
      href={href}
      onClick={(e) => {
        if (inEdit) {
          e.preventDefault();
        }
      }}
    >
      <div className="flex items-center w-full">
        <div className="flex items-center justify-start w-full">
          <div className="flex w-7 p-0 mr-4 grayscale transition ease-in-out duration-300 group-hover:grayscale-0">
            <Image width={200} height={200} className="object-contain" src={image} alt="" />
          </div>
          <h2 className="my-4 text-service-desc-light text-2xl font-bold overflow-x-hidden">
            {title}
          </h2>
        </div>
        {isHovered && <EditDropdown cardId={id} cardTitle={title} />}
      </div>

      <p
        className="my-3 transition ease-in-out duration-300 text-service-desc-dark
        group-hover:text-service-desc-light"
      >
        {description}
      </p>
    </motion.a>
  );
};

export default ServiceCard;

interface IEditDropdown {
  cardId: number;
  cardTitle: string;
}

function EditDropdown({ cardId, cardTitle }: IEditDropdown) {
  const { mutate } = useSWRConfig();
  const setAddServiceModal = useSetAtom(AddServiceModalAtom);
  const setEditServiceId = useSetAtom(editServiceIdAtom);

  const handleDelete = (e: MouseEvent) => {
    e.preventDefault();
    try {
      mutate('/api/services', deleter(`/api/service/${cardId}`), {
        populateCache: (deletedService: Service, services: Service[]) => {
          const filteredServices = services.filter((serv) => serv.id !== deletedService.id);
          return filteredServices;
        },
        revalidate: false,
      });
      toast.success(`${cardTitle} was deleted`);
    } catch (error) {
      toast.error('Could not delete service');
    }
  };

  const handleEdit = (e: MouseEvent) => {
    e.preventDefault();
    setEditServiceId(cardId);
    setAddServiceModal(true);
  };

  return (
    <Menu>
      <Menu.Button
        className={classNames(
          'py-2 rounded-lg transition ease-in-out',
          'hover:bg-[#272731] hover:shadow-lg',
        )}
      >
        <EllipsisVerticalIcon className="w-7" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-service-card-solid  shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="p-1">
          <MenuItem buttonText="Edit" Icon={PencilIcon} onClick={handleEdit} />
          <MenuItem buttonText="Delete" Icon={TrashIcon} onClick={handleDelete} />
        </div>
      </Menu.Items>
    </Menu>
  );
}

function MenuItem({ buttonText, Icon, onClick }: IMenuItem) {
  return (
    <Menu.Item>
      {({ active }) => (
        <div
          onClick={onClick}
          className={classNames(
            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            active ? 'bg-[#2a2c3c] text-white' : 'text-white',
          )}
        >
          <Icon className="text-white mr-2 h-4 w-4" />

          {buttonText}
        </div>
      )}
    </Menu.Item>
  );
}
