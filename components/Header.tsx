import Image from 'next/image';
import LoginBtn from './loginBtn';
import acsLogo from '../public/img/logo-white.svg';


const Header = () => {
  return (
    <>
      <div className="w-10">
        <Image src={acsLogo} alt="logo" />
      </div>
      <LoginBtn />
    </>
  );
};

export default Header;
