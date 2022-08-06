import Image from 'next/image';

import acsLogoWhite from '../../public/img/logo-white.svg';

const Copyright = () => {
  const year = new Date().getFullYear();
  const allRightsReserved = 'Adamnor Cloud Services - All Rights Reserved.';
  return (
    <p className="text-service-desc-dark select-none">
      &copy;{year} {allRightsReserved}{' '}
    </p>
  );
};
const Footer = () => {
  return (
    <div className="w-full grid mx-8 mt-48 p-8 col-span-4 bg-service-card rounded-t-2xl">
      <div className="max-w-7xl w-full justify-self-center grid grid-cols-1">
        <div className="flex flex-col items-center justify-around justify-self-center">
          <div className="w-16 m-8">
            <Image src={acsLogoWhite} alt="" />
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Footer;
