import Image from 'next/image';

import acsLogoWhite from '../public/img/logo-white.svg';

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
    <>
      <div className="w-full justify-self-center grid grid-cols-1">
        <div className="flex flex-col items-center justify-around justify-self-center">
          <div className="w-16 m-8">
            <Image src={acsLogoWhite} alt="" />
          </div>
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default Footer;
