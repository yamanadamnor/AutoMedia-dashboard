import ServiceCard from './components/ServiceCard/ServiceCard';
import reactLogo from './assets/react.svg'
import './App.css'

import servicesData from './data';
import Service from './interfaces';
function App() {
  return (
    <div className="w-screen h-ful max-w-7xl text-white pb-0 m-0 mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
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
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
