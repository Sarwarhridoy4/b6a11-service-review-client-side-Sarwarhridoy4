import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

// Define the type for the service prop
interface Service {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  service_Id: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { _id, title, image, price, description, service_Id } = service;
  console.log(_id);

  return (
    <div>
      <div className='card w-96 h-96 glass'>
        <PhotoProvider
          speed={() => 800}
          easing={(type) =>
            type === 2
              ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
              : "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }
        >
          <figure>
            <PhotoView src={image}>
              <img src={image} style={{ objectFit: "cover" }} alt={title} />
            </PhotoView>
          </figure>
        </PhotoProvider>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{description.slice(0, 100) + "..."}</p>
          <h3 className='text-sky-600 font-semibold'>$ {price}</h3>
          <span>SERVICE ID: {service_Id}</span>
          <div className='card-actions justify-end'>
            <Link to={`/services/${_id}`}>
              <button className='btn btn-primary'>Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
