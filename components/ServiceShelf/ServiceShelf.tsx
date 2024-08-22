"use client";
import { AnimatePresence, motion } from "framer-motion";

import ServiceCard from "@/components/ServiceShelf/ServiceCard";
import type { Service } from "@prisma/client";

export function ServiceShelf({ services }: { services: Service[] }) {
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
    <AnimatePresence>
      <motion.div
        variants={serviceContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-6 text-white sm:grid-cols-2 sm:gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3"
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
