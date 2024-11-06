import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div>
      <section
        className='flex items-center h-screen p-16 text-gray-100'
        style={{
          backgroundImage: `url("https://i.ibb.co/CzLQ5ys/black-1072366-1280.jpg")`,
        }}
      >
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <div className='max-w-md text-center'>
            <div className='image flex items-center justify-center'>
              <img src='https://i.ibb.co/2yhxfK1/404.gif' alt='404' />
            </div>
            <p className='text-2xl text-red-600 font-semibold md:text-3xl'>
              Sorry, we couldn't find this page.
            </p>
            <p className='mt-4 mb-8 text-warning'>
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link to='/'>
              <button className='btn btn-outline btn-warning'>Back Home</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
