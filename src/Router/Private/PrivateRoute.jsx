import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthProvider';
import Spenner from '../../Pages/Spinner/Spenner';

const PrivateRoute = ({ children }) => {
    const { user, loading} = useContext(AuthContext)
    if (loading) {
        return <Spenner></Spenner>
        
    }
    
    if (user && user.uid) {
        return children
    }
    return <Navigate to ='/login'></Navigate>
};

export default PrivateRoute;