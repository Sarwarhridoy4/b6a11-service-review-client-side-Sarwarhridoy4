import { useLoaderData } from "react-router-dom";


const ServiceDetailse = () => {
  const ServiceDetail = useLoaderData();
  console.log(ServiceDetail);
  const { _id, title, image, description, price } = ServiceDetail;
  return (
    <div>
      <div className='mockup-window border bg-sky-300 m-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4 py-16 bg-base-200'>
          <div className="image flex flex-col gap-4 justify-center items-center">
            <img className="" src={image} alt={title} />
            <h3 className="text-2xl text-sky-500 uppercase">price:💲{price}</h3>
          </div>
          <div className="description">
            <h2 className="text-3xl text-sky-600 my-5">Service Description</h2>
            <p className="text-justify">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailse;
