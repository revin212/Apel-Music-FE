import { useContext } from 'react';
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from '../AuthContext/AuthContext';


export const AuthRoute = () => {
    const { token } = useContext(AuthContext);
    const location = useLocation();

  return ( 
    token? 
    <Outlet /> 
    : 
    <Navigate to='/login' state={{from: {...location}}} replace={true} /> 
    )
}
