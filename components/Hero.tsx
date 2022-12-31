import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

import CompanyTag from './CompanyTag';

const Hero = () => {
  const { data: session } = useSession();

  const welcome = session?.user?.name || '';

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
        <h1 className="text-2xl font-bold leading-relaxed sm:text-4xl sm:leading-20">
          Welcome {welcome} to
          <br />
          <CompanyTag />
        </h1>
        <p className="mt-4 text-lg sm:text-2xl">
          The leading media provider for friends and family ❤️. Request that trending series your
          friends won{"'"}t shut up about or enjoy our already expansive library.
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;
