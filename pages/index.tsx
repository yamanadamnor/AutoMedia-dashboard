import React, { useState } from 'react';
import { NextPage } from 'next';
import { Toaster } from 'react-hot-toast';
import useSWR from 'swr';
import { Service } from '@prisma/client';

import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EditBtn from '../components/EditBtn';
import ServiceShelf from '../components/ServiceShelf/ServiceShelf';

import { fetcher } from '../components/utils';
import CalendarWidget from '../components/CalendarWidget/CalendarWidget';

const App: NextPage = () => {
  const [inEdit, setInEdit] = useState<boolean>(false);
  const { data, error } = useSWR<Service[]>('/api/services', fetcher);

  return (
    <div className="relative min-h-screen grid grid-cols-app justify-items-center place-content-center h-full text-white">
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

      <div className="w-full col-start-2 col-span-1 row-start-2 row-span-2">
        <CalendarWidget />
      </div>
        </div>
        {error && <div>failed to load</div>}
        {!data && <div>...loading</div>}
        {data && <ServiceShelf inEdit={inEdit} services={data} />}
      </div>


      <Footer />
    </div>
  );
};

export default App;
