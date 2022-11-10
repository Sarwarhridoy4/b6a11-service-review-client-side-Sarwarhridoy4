import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthProvider";

const LogIn = () => {
  const { Login, googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    event.target.reset();

    Login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //google signin
  const handelGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
       
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold text-center'>Login now!</h1>
          </div>
          <p>
            New Here?<Link to='/signup'>Register Now</Link>
          </p>
          <div className='card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100'>
            <form onSubmit={handelLogin} className='card-body'>
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
                <label className='label'>
                  <a href='/' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
                <button
                  onClick={handelGoogleSignIn}
                  className='btn btn-primary mt-4'
                >
                  <FcGoogle style={{ width: "30px" }}></FcGoogle>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
