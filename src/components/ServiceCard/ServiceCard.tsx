import React from 'react';
import Service from '../../interfaces';

const ServiceCard = ({ name, img, link, desc }: Service) => {
  return (
    <a
      className="group select-none flex flex-col justify-between items-start transition ease-in-out delay-150 hover:shadow-service bg-service-card rounded-lg py-2 px-5 backdrop-blur-sm"
      href={link}
    >
      <div className="flex items-center w-full">
        <div className="w-7 p-0 mr-4 grayscale transition ease-in-out delay-100 group-hover:grayscale-0">
          <img className="object-contain" src={img} alt="" />
        </div>
        <h2 className="my-4 text-service-desc-light text-2xl font-bold">
          {name}
        </h2>
      </div>
      <p className="my-3 transition ease-in-out delay-150 text-service-desc-dark group-hover:text-service-desc-light">{desc}</p>
    </a>
  );
};

export default ServiceCard;
