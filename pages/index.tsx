import React, { useState } from 'react';
import { Prisma, Service } from '@prisma/client';
import { NextPage } from 'next';
import { motion, AnimatePresence } from 'framer-motion';
import useSWR from 'swr';
import toast, { Toaster } from 'react-hot-toast';

import { fetcher, poster } from '../components/utils';
import ServiceCard from '../components/ServiceCard';
import ServiceForm from '../components/ServiceForm';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EditBtn from '../components/EditBtn';

const App: NextPage = () => {
  const { data, error, mutate } = useSWR<Service[]>('/api/services', fetcher);
  const [inEdit, setInEdit] = useState<boolean>(false);

  const saveService = async (service: Prisma.ServiceCreateInput) => {
    if (!data) {
      return;
    }

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
    await mutate(poster('/api/services', service), {
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

  if (error) return <div>failed to load</div>;
  if (!data) return <div>...loading</div>;

  return (
    <div className="grid grid-cols-app justify-items-center place-content-center h-full text-white">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              borderRadius: '10px',
              background: '#20202c',
              color: '#fff',
            },
          },
          error: {
            style: {
              borderRadius: '10px',
              background: '#20202c',
              color: '#fff',
            },
          },
        }}
      />
      <Header />
      <Hero />

      <div className="max-w-7xl w-full col-start-2 col-span-2">
        <div className="flex">
          <EditBtn
            className={'w-12 hover:text-green-800 transition-all duration-150'}
            editHandler={() => setInEdit(!inEdit)}
            inEdit={inEdit}
          />
          <h2 className="text-6xl font-bold mb-8">Clients</h2>
        </div>
        <motion.div
          variants={serviceContainer}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10 gap-14"
        >
          <AnimatePresence>
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
          </AnimatePresence>
          {data.map((serv) => (
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
      </div>

      <Footer />
    </div>
  );
};

export default App;
