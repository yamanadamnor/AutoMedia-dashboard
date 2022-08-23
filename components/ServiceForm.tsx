import { useState } from 'react';
import { motion } from 'framer-motion';

import { PlusIcon } from '@heroicons/react/solid';
import { Prisma } from '@prisma/client';

interface IServiceForm {
  title: string;
  description: string;
  handleSubmit: (data: Prisma.ServiceCreateInput) => Promise<void>;
}

const ServiceForm = ({ handleSubmit, title, description }: IServiceForm) => {
  const [addService, setAddService] = useState<boolean>(false);
  const [newService, setNewService] = useState<Prisma.ServiceCreateInput>({
    title: '',
    description: '',
    href: '',
    image: 'https://raw.githubusercontent.com/walkxhub/dashboard-icons/master/svg/sonarr.svg',
  });

  const formHandler = () => {
    if (!newService) return;
    handleSubmit(newService);
    setNewService({
      title: '',
      description: '',
      href: '',
      image: 'https://raw.githubusercontent.com/walkxhub/dashboard-icons/master/svg/sonarr.svg',
    });
  };

  const addServiceHandler = () => {
    setAddService(true);
  };

  const inputElementClass = `p-1 bg-transparent my-2 border-b-1 border-t-0 border-r-0 border-l-0 
  focus:ring-offset-0 focus:ring-0 focus:ring-gray-600`;

  const initial = { opacity: 0, y: -40 };

  const animate = {
    opacity: 1,
    y: 0,
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={initial}
      className="relative group select-none items-center transition ease-in-out
        duration-300 border-dashed border-4 rounded-xl py-2 px-5 backdrop-blur-sm hover:shadow-service"
      onClick={addServiceHandler}
    >
      {!addService && (
        <div className="h-full w-full flex items-center justify-center">
          <PlusIcon className="w-16" />
        </div>
      )}
      {addService && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formHandler();
          }}
        >
          <div className="flex flex-col">
            <input
              className={inputElementClass}
              value={newService.title}
              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
              placeholder={title}
              required
              type="text"
            />
            <input
              className={inputElementClass}
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              placeholder={description}
              required
              type="text"
            />
            <input
              className={inputElementClass}
              value={newService.image}
              onChange={(e) => setNewService({ ...newService, image: e.target.value })}
              placeholder="Enter your image adress"
              required
              type="text"
            />
            <input
              className={inputElementClass}
              value={newService.href}
              onChange={(e) => setNewService({ ...newService, href: e.target.value })}
              placeholder="Enter the service link"
              required
              type="text"
            />
            <input type="submit" value="submit" hidden />
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default ServiceForm;
