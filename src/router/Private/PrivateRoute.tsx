import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthProvider.tsx";
import Spinner from "../../components/Spinner/Spinner.tsx";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (user && user.uid) {
    return children;
  }

  // Redirect to login, but save the intended destination in the state
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
