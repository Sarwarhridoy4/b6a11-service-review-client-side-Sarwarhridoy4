import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className=' min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500'>
        <div className='hero-content flex-col lg:flex-row'>
          <div className="img w-1/2">
          <img
            src='https://cdn.pixabay.com/photo/2018/02/15/18/29/devops-3155972_960_720.jpg' alt=""
            className=' rounded-lg shadow-2xl'
          />
          </div>
          <div>
            <h1 className='text-5xl font-bold text-white'>WelCome To WebLogic</h1>
            <p className='py-6 text-white italic'>
                          I'm a indivisual developer serving a bunch of mordern Web-Solurtions. <br />
                          Like DBMS, Front & Back Ends, mobile Dev etc.
            </p>
            <Link to='/services'><button className='btn btn-primary'>Get Started</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
