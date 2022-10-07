import { motion } from 'framer-motion';
import Image from 'next/image';
import { MinusCircleIcon } from '@heroicons/react/24/solid';
import { Prisma, Service } from '@prisma/client';
import { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';

import { deleter } from '../utils';

interface IService extends Prisma.ServiceCreateInput {
  id: number;
  inEdit?: boolean;
}

const ServiceCard = ({ id, title, image, href, description, inEdit }: IService) => {
  const { mutate } = useSWRConfig();


  const handleDelete = () => {
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
  };

  const whileHover = {
    x: 5,
    transition: { duration: 0.05 },
  };

  const whileTap = {
    x: 5,
    transition: { duration: 0.05 },
  };

  return (
    <motion.a
      initial={initial}
      animate={animate}
      whileHover={inEdit ? {} : whileHover}
      whileTap={whileTap}
      className="relative group select-none flex flex-col justify-between items-start transition ease-in-out
        duration-300 bg-service-card rounded-xl py-2 px-5 backdrop-blur-sm hover:shadow-service"
      href={href}
      onClick={(e) => {
        if (inEdit) {
          e.preventDefault();
        }
      }}
    >
      {inEdit && (
        <div onClick={() => handleDelete()}>
          <MinusCircleIcon
            className="absolute -top-2 -right-2 w-8 hover:text-red-600 
            transition-all duration-200 ease-in-out"
          />
          {id}
        </div>
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
