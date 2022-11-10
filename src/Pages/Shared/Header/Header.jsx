
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth/AuthProvider";
import { FaSignOutAlt } from 'react-icons/fa';


const Header = () => {
  const { user,LogOut} = useContext(AuthContext);
  const handelLogOut = () => {
    const confirm = window.confirm('Really Want to Logout?')
    if (confirm) {
      window.alert('Log Out Successful')
      return LogOut()
    }
    
    if (!confirm) {
      return window.alert('Operation Interupted!')
    }
  }
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <NavLink to='/'>Homepage</NavLink>
              </li>
              <li>
                <NavLink to='/services'>Services</NavLink>
              </li>
              <li>
                <NavLink to='/add-service'>Add A Service</NavLink>
              </li>
              <li>
                <NavLink to='/my-reviews'>My Reviews</NavLink>
              </li>
              <li>
                <NavLink to='/login'>LogIn/SignUp</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='navbar-center'>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            WebLogic Solutions
          </Link>
        </div>
        <div className='navbar-end'>
          <img className="rounded-full w-10" src={user?.photoURL} alt="" />
        </div>
        {
          user ? <button onClick={handelLogOut} className="btn btn-outline btn-primary w-14 rounded-full">
            <FaSignOutAlt></FaSignOutAlt>
                </button>:null
              }
      </div>
    </div>
  );
};

export default Header;
