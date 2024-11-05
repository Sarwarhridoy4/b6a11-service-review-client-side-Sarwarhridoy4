import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../../contexts/auth/AuthProvider";

const Header: React.FC = () => {
  const { user, LogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelLogOut = (): void => {
    const confirm = window.confirm("Really Want to Logout?");
    if (confirm) {
      window.alert("Log Out Successful");
      LogOut();
      navigate("/");
    } else {
      window.alert("Operation Interrupted!");
    }
  };

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
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50'
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
          {user?.photoURL && (
            <img
              className='rounded-full w-10'
              src={user?.photoURL}
              alt='User Avatar'
            />
          )}
          {user && (
            <button
              onClick={handelLogOut}
              className='btn btn-outline btn-primary w-14 rounded-full'
            >
              <FaSignOutAlt />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
