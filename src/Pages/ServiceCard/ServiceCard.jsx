import React from "react";

const ServiceCard = ({ service }) => {
    const {title,image,price,description} = service;
  return (
    <div>
      <div className='card w-96 h-96 glass'>
        <figure>
          <img src={image} alt='car!' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
                  <p>{description.slice(0, 100) +'...'}</p>
                  <h3 className="text-sky-600 font-semibold">{price}</h3>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Show Detailse</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
