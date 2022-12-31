import React from 'react';
import { NextPage } from 'next';
import { Toaster } from 'react-hot-toast';
import useSWR from 'swr';
import { Service } from '@prisma/client';
import { useAtom } from 'jotai';

import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceShelf from '../components/ServiceShelf/ServiceShelf';

import { fetcher } from '../components/utils';
import CalendarWidget from '../components/CalendarWidget/CalendarWidget';

import { AddServiceModalAtom } from '../components/states';

const App: NextPage = () => {
  const [isAddServiceModalOpen, setAddServiceModal] = useAtom(AddServiceModalAtom);
  const { data, error } = useSWR<Service[]>('/api/services', fetcher);

  return (
    <div className="relative min-h-screen grid grid-cols-app gap-y-8 gap-x-8 justify-items-center place-content-start h-full text-white">
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
      <div className="col-start-2 col-span-7 row-start-1 row-end-2 h-24 py-6 flex justify-between items-center w-full ">
        <Header />
      </div>

      <div className="w-full col-start-3 col-span-6 row-start-2">
        <Hero />
      </div>

      <div className="w-full col-start-2 col-span-1 row-start-2 row-span-2">
        <CalendarWidget />
      </div>

      <div className="w-full col-start-3 col-span-6 row-start-3">
        <div className="flex items-center flex-gap-48 justify-center"></div>

        <div className="flex my-4">
          <button
            type="button"
            onClick={() => setAddServiceModal(true)}
            className=" `box-border py-2 px-8 border-2 h-12 rounded-md hover:bg-white hover:text-black transition-all duration-150 ease-in-out"
            // className="rounded-md bg-black flex-grow-0 bg-opacity-20 px-4 py-2 text-lg font-medium
            //   text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2
            //   focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Add service
          </button>
        </div>
        {error && <div>failed to load</div>}
        {!data && <div>...loading</div>}
        {data && <ServiceShelf inEdit={isAddServiceModalOpen} services={data} />}
      </div>

      <div className="w-full bottom-0 col-start-1 col-span-9 grid mx-8 p-8 row-start- bg-service-card rounded-t-2xl">
        <Footer />
      </div>
    </div>
  );
};

export default App;
