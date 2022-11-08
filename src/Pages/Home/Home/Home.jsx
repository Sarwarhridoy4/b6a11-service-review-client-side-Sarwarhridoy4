import React from "react";
import Banner from "../../../Banner/Banner";
import Clients from "../../Clients/Clients";
import Locate from "../../Locate/Locate";
import Services from "../../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Clients></Clients>
      <Locate></Locate>
    </div>
  );
};

export default Home;
