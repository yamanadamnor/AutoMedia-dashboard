import ServiceCard from './components/ServiceCard/ServiceCard';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import { motion } from 'framer-motion';

import servicesData from './data';
import Service from './interfaces';

function App() {
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
    <div className="grid grid-cols-app justify-items-center place-content-center h-full text-white">
      <Hero />

      <div className="max-w-7xl w-full col-start-2 col-span-2">
        <h2 className="text-6xl font-bold mb-8">Clients</h2>
        <motion.div
          variants={serviceContainer}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10 gap-14"
        >
          {servicesData.map((serv: Service) => (
            <ServiceCard
              key={serv.id}
              id={serv.id}
              name={serv.name}
              img={serv.img}
              link={serv.link}
              desc={serv.desc}
            />
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
