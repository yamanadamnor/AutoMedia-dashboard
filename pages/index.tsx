import React from 'react';
import type { NextPage } from 'next';
import { Toaster } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { useAtom, useSetAtom } from 'jotai';

import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceShelf from '../components/ServiceShelf/ServiceShelf';

import { classNames } from '../components/utils';
import CalendarWidget from '../components/CalendarWidget/CalendarWidget';

import { AddServiceModalAtom, editServiceIdAtom } from '../components/states';

const App: NextPage = () => {
  const [isAddServiceModalOpen, setAddServiceModal] = useAtom(AddServiceModalAtom);
  const setEditServiceId = useSetAtom(editServiceIdAtom);
  const { data: session } = useSession();

  return (
    <>
      <div
        className="
        absolute top-0 left-0 w-full inset-x-0 flex justify-center
        overflow-hidden pointer-events-none select-none"
      >
        <div className="w-[108rem] flex-none flex justify-end">
          <picture>
            <source srcSet="/img/background-gradient.avif" type="image/avif" />
            <img src="" alt="" />
          </picture>
        </div>
      </div>

      <div>
        <div
          className={classNames(
            'relative min-h-screen max-w-8xl mx-auto center grid grid-cols-app z-auto',
            'grid-rows-app gap-y-8 gap-x-2 justify-items-centerr',
            'place-content-start h-full text-white',
            'lg:gap-x-8',
          )}
        >
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
          <div
            className={classNames(
              'col-start-2 col-span-7 row-start-1 row-end-2 h-24',
              'py-6 flex justify-between items-center w-full ',
            )}
          >
            <Header />
          </div>

          <div
            className={classNames(
              'hidden w-full col-start-4 col-span-5 row-start-2',
              'lg:block',
              'xl:col-start-3 xl:col-span-6',
            )}
          >
            <Hero />
          </div>

          {/* <---- Sidebar ----> */}
          <div
            className={classNames(
              'w-full col-start-2 col-end-[-2] row-start-2',
              'lg:col-end-4 lg:row-end-[-1]',
              'xl:col-end-3',
            )}
          >
            <div className="w-full">
              <CalendarWidget />
            </div>
          </div>

          {/* <---- Services ----> */}
          <div
            className={classNames(
              'w-full col-start-2 col-end-[-2]',
              'lg:col-start-4 lg:row-start-3 lg:col-span-5',
              'xl:col-start-3 xl:col-span-6',
            )}
          >
            <div className="flex items-center flex-gap-48">
              {session?.user.isAdmin && (
                <div className="my-4">
                  <button
                    type="button"
                    onClick={() => {
                      setAddServiceModal(true);
                      setEditServiceId(0);
                    }}
                    className={classNames(
                      'box-border py-2 px-8 border-2 h-12 rounded-md hover:bg-white',
                      'hover:text-black transition-all duration-150 ease-in-out',
                    )}
                  >
                    Add service
                  </button>
                </div>
              )}
            </div>
            <ServiceShelf inEdit={isAddServiceModalOpen} />
          </div>

          <div
            className={classNames('relative', 'w-full bottom-0 col-start-1 col-end-[-1] grid p-8')}
          >
            <div className="absolute w-full bottom-0 left-0 bg-service-card rounded-t-2xl"></div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
