import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  // Loading services
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className='text-4xl text-sky-600 font-bold'>Services</h2>
      <p className='text-indigo-600 font-semibold'>
        I've serval year of experiense in Development Field with that, I served
        around <br /> 400+ satisfied Clients.
      </p>
          <div className='services-section mt-4 mb-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {
                  services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
        
      </div>
      
    </div>
  );
};

export default Services;
