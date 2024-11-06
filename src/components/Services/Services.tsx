import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

// Define the type for the service object
interface Service {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  service_Id: string;
}

const Services: React.FC = () => {
  // State to hold services data
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("https://web-logic-by-sarwar-server-side.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h2 className='text-4xl text-sky-600 font-bold'>Services</h2>
      <p className='text-indigo-600 font-semibold'>
        I've several years of experience in the Development Field, with that, I
        have served around <br /> 400+ satisfied clients.
      </p>
      <div className='services-section mt-4 mb-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
