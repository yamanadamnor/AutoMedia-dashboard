import Image from 'next/image';

const Copyright = () => {
  const year = new Date().getFullYear();
  const allRightsReserved = 'Adamnor Cloud Services - All Rights Reserved.';
  return (
    <p className="select-none text-service-desc-dark">
      &copy;{year} {allRightsReserved}{' '}
    </p>
  );
};
const Footer = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 justify-self-center">
        <div className="flex flex-col items-center justify-around justify-self-center">
          <div className="w-16 m-8">
            <Image src="/img/logo-white.svg" width={400} height={400} alt="" />
          </div>
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default Footer;
