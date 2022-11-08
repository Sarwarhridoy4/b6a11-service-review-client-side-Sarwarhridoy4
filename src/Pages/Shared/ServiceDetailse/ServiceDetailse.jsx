import React, { useEffect, useState } from "react";
import Window from "./Window";

const ServiceDetailse = () => {
    // Loading services
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
          {
              services.map(service=><Window></Window>)
      }
    </div>
  );
};

export default ServiceDetailse;
