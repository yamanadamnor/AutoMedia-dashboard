import { useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MinusCircleIcon } from '@heroicons/react/24/solid';
import { Service } from '@prisma/client';
import { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';

import { IServiceCard } from '../interfaces';
import { deleter } from '../utils';


const ServiceCard = ({ id, title, image, href, description, inEdit }: IServiceCard) => {
  const { mutate } = useSWRConfig();
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = (e: MouseEvent) => {
    e.preventDefault();
    try {
      mutate('/api/services', deleter(`/api/service/${id}`), {
        populateCache: (deletedService: Service, services: Service[]) => {
          const filteredServices = services.filter((serv) => serv.id !== deletedService.id);
          return filteredServices;
        },
        revalidate: false,
      });
      toast.success(`${title} was deleted`);
    } catch (error) {
      toast.error('Could not delete service');
    }
  };

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
    transition: { duration: 0.05 },
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
      {isHovered && (
        <motion.div initial={{ opacity: 0 }} animate={animate} onClick={(e) => handleDelete(e)}>
          <MinusCircleIcon
            className="absolute -top-2 -right-2 w-8 hover:text-red-600 
          transition-all duration-200 ease-in-out"
          />
        </motion.div>
      )}
      <div className="flex items-center justify-start w-full">
        <div className="flex w-7 p-0 mr-4 grayscale transition ease-in-out duration-300 group-hover:grayscale-0">
          <Image width={200} height={200} className="object-contain" src={image} alt="" />
        </div>
        <h2 className="my-4 text-service-desc-light text-2xl font-bold">{title}</h2>
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
