import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

import ACSTag from './ACSTag';

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
      className="col-start-2 col-span-2 max-w-7xl w-full my-24 "
    >
      <div className="w-full">
        <h1 className="text-3xl  font-bold leading-relaxed sm:text-4xl sm:leading-20">
          Welcome {welcome} to
          <br />
          <ACSTag />
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
