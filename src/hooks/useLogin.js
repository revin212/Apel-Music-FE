import {useState, useEffect, useContext} from 'react';
import axios from 'axios'; 
import { AuthContext } from '../components/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    // const [data, setData] = useState({})
    const navigate = useNavigate();

    const [token, tokenExpires, newToken] = useContext(AuthContext);

    const now = Date.now();
    const login = (url, loginCredential) => {
        axios.post(url, loginCredential)
        .then(data => {console.log(data.data);newToken(data.data)})
        .then(console.log(token, tokenExpires))
        // .then(navigate("/"))
    }

    return { token, tokenExpires, login }
}

export default useLogin
