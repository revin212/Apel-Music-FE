import {useState, useEffect, useContext} from 'react';
import axios from 'axios'; 
import { AuthContext } from '../components/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
    const navigate = useNavigate();

    const [token, tokenExpires, newToken] = useContext(AuthContext);

    const now = Date.now();
    const logout = (url) => {
        axios.post(url, {})
        .then(newToken({token: "", tokenExpires: now}))
        .then(navigate("/"))
    }

    return logout
}

export default useLogout
