import { useContext } from 'react';
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from '../AuthContext/AuthContext';


export const AuthRoute = ({ ...rest }) => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();

  return ( 
    auth? 
    <Outlet /> 
    : 
    <Navigate to='/login' state={{from: {...location}}} replace={true} /> 
    )
}
