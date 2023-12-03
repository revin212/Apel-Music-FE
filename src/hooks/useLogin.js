import { useContext, useState } from 'react';
import axios from 'axios'; 
import { AuthContext } from '../components/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [token, tokenExpires, newToken, auth, setAuth] = useContext(AuthContext);

    const login = async (url, loginCredential) => {
        try {
            setIsLoading(true);
            const instance = axios.create({withCredentials: true});
            const response = await instance.post(url, loginCredential);
            await newToken(response.data);
            await setAuth(true);
            navigate("/")
        } catch (err) {
            if(err.response){
                setError(err.response.data)
            } else { setError("Server error, please try again") }
        } finally { setIsLoading(false) }
    }

    return { login, isLoading, error }
}

export default useLogin
