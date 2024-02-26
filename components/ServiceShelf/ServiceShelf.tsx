import { AnimatePresence, motion } from "framer-motion";
import type { Service } from "@prisma/client";
import useSWR from "swr";

import { fetcher } from "@/utils/fetcher";
import { cn } from "@/utils/cn";
import ServiceCard from "@/components/ServiceShelf/ServiceCard";

const ServiceShelf = () => {
  const { data, error, isLoading } = useSWR<Service[], Error>(
    "/api/services",
    fetcher,
  );

  const serviceContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={serviceContainer}
          initial="hidden"
          animate="show"
          className={cn(
            "grid grid-cols-1 gap-6 text-white",
            "sm:grid-cols-2 sm:gap-4",
            "lg:grid-cols-2 lg:gap-6",
            "xl:grid-cols-3",
          )}
        >
          {error && <div>Failed to load</div>}

          {isLoading && <div>Loading...</div>}

          {data?.map((serv) => (
            <ServiceCard
              key={serv.id}
              id={serv.id}
              title={serv.title}
              image={serv.image}
              href={serv.href}
              description={serv.description}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ServiceShelf;
