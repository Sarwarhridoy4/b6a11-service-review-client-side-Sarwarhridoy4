import React from "react";

const Banner = () => {
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src='https://placeimg.com/260/400/arch' alt=""
            className='max-w-sm rounded-lg shadow-2xl'
          />
          <div>
            <h1 className='text-5xl font-bold'>WelCome To WebLogic</h1>
            <p className='py-6'>
                          I'm a indivisual developer serving a bunch of mordern Web-Solurtions. <br />
                          Like DBMS, Front & Back Ends, mobile Dev etc.
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
