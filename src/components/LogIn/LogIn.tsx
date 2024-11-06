/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthProvider";

const LogIn: React.FC = () => {
  const { Login, googleSignIn }: any = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Default to home if no intended route

  // Handle regular login with email and password
  const handelLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    Login(email, password)
      .then((result: any) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  // Handle Google login
  const handelGoogleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    googleSignIn(googleProvider)
      .then((result:any) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error:any) => {
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
            New Here? <Link to='/signup'>Register Now</Link>
          </p>
          <div className='card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100'>
            <form onSubmit={handelLogin} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='Email'
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
                  placeholder='Password'
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
                <button type='submit' className='btn btn-primary'>
                  Login
                </button>
                <button
                  onClick={handelGoogleSignIn}
                  className='btn btn-primary mt-4 flex items-center justify-center'
                >
                  <FcGoogle style={{ width: "30px", marginRight: "10px" }} />
                  Login with Google
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
