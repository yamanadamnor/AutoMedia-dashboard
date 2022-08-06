import { motion } from 'framer-motion';
import Image from 'next/image';

import Service from '../interfaces';

const ServiceCard = ({ name, img, link, desc }: Service) => {
  const serviceElement = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  // '-8px -8px 30px #30304555, 8px 8px 30px #00000055, inset 0 0 0 4px #30304555',
  // '5px 5px 15px 5px #FF0F0F',
  return (
    <motion.a
      variants={serviceElement}
      whileHover={{
        x: 5,
        transition: { duration: 0.05 },
      }}
      whileTap={{
        x: 5,
        transition: { duration: 0.05 },
      }}
      className="group select-none flex flex-col justify-between items-start transition ease-in-out
        duration-300 bg-service-card rounded-xl py-2 px-5 backdrop-blur-sm hover:shadow-service"
      href={link}
    >
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
