import Image from 'next/image';
import LoginBtn from './loginBtn';

const Header = () => {
  return (
    <>
      <div className="w-12">
        <Image src="/img/logo-white.svg" width={400} height={400} alt="logo" />
      </div>
      <LoginBtn />
    </>
  );
};

export default Header;
