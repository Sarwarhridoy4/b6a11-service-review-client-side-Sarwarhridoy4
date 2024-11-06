import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

interface ServiceDetails {
  title: string;
  image: string;
  description: string;
  price: number;
}

const ServiceDetailse: React.FC = () => {
  const serviceDetail = useLoaderData() as ServiceDetails;
  const { title, image, description, price } = serviceDetail;

  return (
    <div>
      <div className='mockup-window border bg-sky-300 m-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4 py-16 bg-base-200'>
          <PhotoProvider
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            <div className='image flex flex-col gap-4 justify-center items-center'>
              <PhotoView src={image}>
                <img className='' src={image} alt={title} />
              </PhotoView>
              <h3 className='text-2xl text-sky-500 uppercase'>
                Price: 💲{price}
              </h3>
            </div>
          </PhotoProvider>
          <div className='description'>
            <h2 className='text-3xl text-sky-600 my-5'>Service Description</h2>
            <p className='text-justify'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailse;
