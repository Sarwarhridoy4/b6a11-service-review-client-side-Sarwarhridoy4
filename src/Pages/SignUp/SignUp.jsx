import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold text-center'>Signup Here</h1>
          </div>
          <p>Have an Account Already?<Link to='/login'>Sign In Now</Link></p>
          <div className='card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100'>
            <form className='card-body'>
              {/* name */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Your Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  required
                  className='input input-bordered'
                />
              </div>
              {/* Email */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  name='email'
                  required
                  className='input input-bordered'
                />
              </div>
              {/* password */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  name='password'
                  required
                  className='input input-bordered'
                />
              </div>
              {/* Image URL */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>ImageURL</span>
                </label>
                <input
                  type='text'
                  placeholder='Image URL here'
                  name='ImageURL'
                  required
                  className='input input-bordered'
                />
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>SignUP</button>
                <button className='btn btn-primary mt-4'>
               <FcGoogle style={{'width':'30px'}}></FcGoogle>
                  SignUp</button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;