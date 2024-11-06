/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthProvider";


const SignUp: React.FC = () => {
  const { createUser, googleSignIn }:any = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handelSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Form Data Collection
    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const ImageURL = (form.elements.namedItem("ImageURL") as HTMLInputElement)
      .value;

    console.log(name, email, password, ImageURL);

    // Reset form
    form.reset();

    // Creating user
    createUser(email, password)
      .then((result: any) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error: Error) => {
        console.error(error);
      });
  };

  // Google sign-in
  const handelGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result: any) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error: Error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold text-center'>Signup Here</h1>
          </div>
          <p>
            Have an Account Already? <Link to='/login'>Sign In Now</Link>
          </p>
          <div className='card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100'>
            <form onSubmit={handelSignup} className='card-body'>
              {/* Name */}
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
              {/* Password */}
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
                <button type='submit' className='btn btn-primary'>
                  Sign Up
                </button>
              </div>
              <button
                onClick={handelGoogleSignIn}
                className='btn btn-primary mt-4'
              >
                <FcGoogle style={{ width: "30px" }} />
                Sign Up with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
