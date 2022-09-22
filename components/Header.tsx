import Image from 'next/image';
import LoginBtn from './loginBtn';
import acsLogo from '../public/img/logo-white.svg';


const Header = () => {
  return (
    <div className="absolute top-0 py-6 col-start-2 col-span-2 flex justify-between w-full">
      <div className="w-12">
        <Image src={acsLogo} alt="logo" />
      </div>
      <LoginBtn />
    </div>
  );
};

export default Header;
