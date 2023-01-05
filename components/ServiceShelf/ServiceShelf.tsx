import { AnimatePresence, motion } from 'framer-motion';
import { Prisma } from '@prisma/client';
import toast from 'react-hot-toast';
import { useSWRConfig } from 'swr';

import { classNames, poster } from '../utils';
import { IServiceShelf } from '../interfaces';

import ServiceCard from './ServiceCard';
import ServiceForm from './ServiceForm';


const ServiceShelf = ({ services, inEdit }: IServiceShelf) => {
  const { mutate } = useSWRConfig();

  const saveService = async (service: Prisma.ServiceCreateInput) => {
    const noEmptyValues = Object.values(service).every((value) => {
      if (typeof value === 'string' && value.trim().length !== 0) {
        return true;
      }
      return false;
    });

    if (!noEmptyValues) {
      toast.error('Empty values not allowed');
      return;
    }
    await mutate('/api/services', poster('/api/services', service), {
      populateCache: (newServ, services) => {
        return [...services, newServ];
      },
      revalidate: false,
    });
    toast.success(`${service.title} was added`);
  };

  const serviceContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <>
      {inEdit && (
        <ServiceForm
          handleSubmit={async (formData: Prisma.ServiceCreateInput) => {
            try {
              await saveService(formData);
            } catch (error) {
              toast.error('Could not save the service');
            }
          }}
          title="title"
          description="description"
        />
      )}
      <AnimatePresence>
        <motion.div
          variants={serviceContainer}
          initial="hidden"
          animate="show"
          className={classNames(
            'grid grid-cols-1 gap-6',
            'sm:grid-cols-2 sm:gap-4',
            'lg:grid-cols-3 lg:gap-6',
            'xl:grid-cols-4',
          )}
        >
          {services.map((serv) => (
            <ServiceCard
              key={serv.id}
              id={serv.id}
              title={serv.title}
              image={serv.image}
              href={serv.href}
              description={serv.description}
              inEdit={inEdit}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ServiceShelf;
