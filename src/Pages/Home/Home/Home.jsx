import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../../Banner/Banner";
import Clients from "../../Clients/Clients";
import Locate from "../../Locate/Locate";
import HomeCard from "../../ServiceCard/HomeCard";


const Home = () => {
  const service = useLoaderData()
  console.log(service);
  return (
    <div>
      <Banner></Banner>
      <div className="services grid grid-cols-1 gap-5 m-5 md:grid-cols-2 lg:grid-cols-3">
      {
        service.map(service=><HomeCard key={service._id} service ={service}></HomeCard>)
      }
      </div>
      <Link to='/services'><button className="btn btn-outline btn-success">See All</button></Link>
      <Clients></Clients>
      <Locate></Locate>
    </div>
  );
};

export default Home;
