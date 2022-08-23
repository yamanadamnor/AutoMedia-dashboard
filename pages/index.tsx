import React, { useState } from 'react';
import { NextPage } from 'next';

import ServiceCard from '../components/ServiceCard';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

import servicesData from '../components/data';
import EditBtn from '../components/EditBtn';

import { IService } from '../components/interfaces';

const App: NextPage = () => {
  const [inEdit, setInEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setInEdit(!inEdit);
  };

  const handleAdd = () => {
    // eslint-disable-next-line no-console
    console.log('add');
  };

  const handleDelete = () => {
    // eslint-disable-next-line no-console
    console.log('delete');
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
    <div className="grid grid-cols-app justify-items-center place-content-center h-full text-white">
      <Header />
      <Hero />

      <div className="max-w-7xl w-full col-start-2 col-span-2">
        <div className="flex">
          <EditBtn
            className={'w-12 hover:text-green-800 transition-all duration-150'}
            editHandler={() => handleEdit()}
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
          {inEdit && (
            <ServiceCard
              id="edit"
              name="title"
              link=""
              desc="description"
              inEdit={inEdit}
              data-modal-toggle="defaultModal"
              // onClick={() => clg}
            />
          )}
          {servicesData.map((serv: IService) => (
            <ServiceCard
              key={serv.id}
              id={serv.id}
              name={serv.name}
              img={serv.img}
              link={serv.link}
              desc={serv.desc}
              inEdit={inEdit}
              handleServiceDelete={() => handleDelete()}
              handleServiceAdd={() => handleAdd()}
            />
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
