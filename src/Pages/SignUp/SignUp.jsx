import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthProvider";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()
  // console.log(createUser);
  const handelSignup = (event) => {
    event.preventDefault();

    // Form Data Collection
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const ImageURL = form.ImageURL.value;
    //checking data
    console.log(name, email, password, ImageURL);
    //reset form
    event.target.reset();
    //creating user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //google signin
  const handelGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
      console.error(error);
    })
  }
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold text-center'>Signup Here</h1>
          </div>
          <p>
            Have an Account Already?<Link to='/login'>Sign In Now</Link>
          </p>
          <div className='card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100'>
            <form onSubmit={handelSignup} className='card-body'>
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
              </div>
              <button onClick={handelGoogleSignIn} className='btn btn-primary mt-4'>
                <FcGoogle style={{ width: "30px" }}></FcGoogle>
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
