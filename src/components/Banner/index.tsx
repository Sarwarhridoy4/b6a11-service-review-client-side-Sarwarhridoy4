import React from "react";
import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div>
      <div className='min-h-16 bg-gradient-to-r from-sky-500 to-indigo-500'>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='img w-1/2'>
            <img
              src='https://cdn.pixabay.com/photo/2018/02/15/18/29/devops-3155972_960_720.jpg'
              alt='WebLogic Banner'
              className='rounded-lg shadow-2xl'
            />
          </div>
          <div>
            <h1 className='text-5xl font-bold text-white'>
              Welcome To WebLogic
            </h1>
            <p className='py-6 text-white italic'>
              I'm an individual developer offering a range of modern web
              solutions, including DBMS, front & back-end, and mobile
              development.
            </p>
            <Link to='/services'>
              <button className='btn btn-primary'>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
