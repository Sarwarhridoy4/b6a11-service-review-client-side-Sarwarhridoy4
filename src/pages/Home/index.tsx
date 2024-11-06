import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import HomeCard from "../../components/HomeCard";
import Clients from "../../components/Clients";
import Locate from "../../components/Locate";

interface Service {
  _id: string;
}


const Home: React.FC = () => {
  const service = useLoaderData() as Service[];

  return (
    <div>
      <Banner />
      <div className='services grid grid-cols-1 gap-5 m-5 md:grid-cols-2 lg:grid-cols-3'>
        {service.map((serviceItem) => (
          <HomeCard key={serviceItem._id} service={serviceItem} />
        ))}
      </div>
      <Link to='/services'>
        <button className='btn btn-outline btn-success'>See All</button>
      </Link>
      <Clients />
      <Locate />
    </div>
  );
};

export default Home;
