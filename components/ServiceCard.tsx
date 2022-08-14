import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MinusCircleIcon, PlusIcon } from '@heroicons/react/solid';
import { PhotographIcon } from '@heroicons/react/outline';

import { IService } from './interfaces';

const ServiceCard = ({
  id,
  name,
  img,
  link,
  desc,
  inEdit,
  handleServiceDelete,
  handleServiceAdd,
}: IService) => {
  const addServiceHandler = () => {
    setAddService(true);
    handleServiceAdd;
  };

  const [addService, setAddService] = useState<boolean>(false);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
  });

  const serviceElement = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const whileHover = {
    x: 5,
    transition: { duration: 0.05 },
  };

  const whileTap = {
    x: 5,
    transition: { duration: 0.05 },
  };

  const inputElementClass = `p-0 bg-transparent my-2 border-b-1 border-t-0 border-r-0 border-l-0 
  focus:ring-offset-0 focus:ring-0 focus:ring-gray-600`;

  // Show add card
  if (id === 'edit') {
    return (
      <motion.div
        className="relative group select-none flex justify-center items-center transition ease-in-out
        duration-300 border-dashed border-4 rounded-xl py-2 px-5 backdrop-blur-sm hover:shadow-service"
        onClick={addServiceHandler}
      >
        {!addService && <PlusIcon className="w-16" />}
        {addService && (
          <div className="flex flex-col">
            <div className="flex">
              <PhotographIcon className="w-20 hover:text-green-800 transition-all duration-150" />
              <input
                className={inputElementClass}
                value={newService.title}
                onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                placeholder="title"
                type="text"
              />
            </div>
            <input
              className={`${inputElementClass} bg-red-400`}
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              placeholder="description"
              type="text"
            />
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.a
      variants={serviceElement}
      whileHover={inEdit ? {} : whileHover}
      whileTap={whileTap}
      className="relative group select-none flex flex-col justify-between items-start transition ease-in-out
        duration-300 bg-service-card rounded-xl py-2 px-5 backdrop-blur-sm hover:shadow-service"
      href={link}
    >
      {inEdit && (
        <div onClick={handleServiceDelete}>
          <MinusCircleIcon
            className="absolute -top-2 -right-2 w-8 hover:text-red-600 
            transition-all duration-200 ease-in-out"
          />
        </div>
      )}
      <div className="flex items-center w-full">
        <div className="w-7 p-0 mr-4 grayscale transition ease-in-out duration-300 group-hover:grayscale-0">
          <Image className="object-contain" src={img} alt="" />
        </div>
        <h2 className="my-4 text-service-desc-light text-2xl font-bold">{name}</h2>
      </div>
      <p
        className="my-3 transition ease-in-out duration-300 text-service-desc-dark
        group-hover:text-service-desc-light"
      >
        {desc}
      </p>
    </motion.a>
  );
};

export default ServiceCard;
