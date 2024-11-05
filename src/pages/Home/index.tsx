import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import HomeCard from "../../components/HomeCard";
import Clients from "../../components/Clients";
import Locate from "../../components/Locate";

const Home = () => {
  const service = useLoaderData();
  // console.log(service);
  return (
    <div>
      <Banner />
      <div className='services grid grid-cols-1 gap-5 m-5 md:grid-cols-2 lg:grid-cols-3'>
        {service.map((service) => (
          <HomeCard key={service._id} service={service} />
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
