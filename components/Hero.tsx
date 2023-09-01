import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

import { cn } from '@/utils';

const Hero = () => {
  const { data: session } = useSession();

  const firstName = session?.user?.name?.split(' ')[0] ?? '';

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
        <h1 className={cn('text-2xl font-ligh leading-relaxed', 'sm:text-4xl sm:leading-20')}>
          Welcome <span className="italic font-bold">{firstName}</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default Hero;
