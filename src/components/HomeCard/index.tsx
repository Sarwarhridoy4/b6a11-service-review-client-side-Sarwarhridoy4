import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const HomeCard = ({ service }) => {
  const { _id, image, title, description, price } = service;
  const shortDes = description.slice(0, 100);
  return (
    <div>
      <div className='card w-72 md:w96 h-96 glass'>
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
              <img src={image} style={{ objectFit: "cover" }} alt='' />
            </PhotoView>
          </figure>
        </PhotoProvider>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{shortDes}</p>
          <h3 className='text-sky-600 font-semibold'>$ {price}</h3>
          <div className='card-actions justify-end'>
            <Link to={`/services/${_id}`}>
              <button className='btn btn-primary'>Show Detailse</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
