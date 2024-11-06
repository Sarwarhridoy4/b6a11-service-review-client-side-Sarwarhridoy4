import React, { useContext, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthProvider";
import Spinner from "../../components/Spinner/Spinner";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, loading } = useContext(AuthContext)!;
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (user && user.uid) {
    return <>{children}</>;
  }

  // Redirect to login, but save the intended destination in the state
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
