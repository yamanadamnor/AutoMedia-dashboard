import { AnimatePresence, motion } from 'framer-motion';
import { Service } from '@prisma/client';
import useSWR from "swr";

import { classNames, fetcher} from '../utils';
import type { IServiceShelf } from '../interfaces';

import ServiceCard from './ServiceCard';
import ServiceForm from './ServiceForm';

const ServiceShelf = ({ inEdit }: IServiceShelf) => {
  const { data, error, isLoading } = useSWR<Service[]>('/api/services', fetcher);

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
      {inEdit && <ServiceForm />}
      <AnimatePresence>
        <motion.div
          variants={serviceContainer}
          initial="hidden"
          animate="show"
          className={classNames(
            'grid grid-cols-1 gap-6',
            'sm:grid-cols-2 sm:gap-4',
            'lg:grid-cols-2 lg:gap-6',
            'xl:grid-cols-3',
          )}
        >

          {error && <div>failed to load</div>}

          {isLoading && <div>Loading...</div>}

          {data && data.map((serv) => (
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
