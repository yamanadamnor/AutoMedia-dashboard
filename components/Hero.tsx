import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

import CompanyTag from './CompanyTag';
import { classNames } from './utils';

const Hero = () => {
  const { data: session } = useSession();

  const welcome = session?.user?.name ?? '';

  return (
    <motion.div
      initial={{
        y: -40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="w-full">
        <h1
          className={classNames('text-2xl font-bold leading-relaxed', 'sm:text-4xl sm:leading-20')}
        >
          Welcome {welcome} to
          <br />
          <CompanyTag />
        </h1>
      </div>
    </motion.div>
  );
};

export default Hero;
