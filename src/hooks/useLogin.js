import { useContext } from 'react';
import axios from 'axios'; 
import { AuthContext } from '../components/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const navigate = useNavigate();

    const [token, tokenExpires, newToken, auth, setAuth] = useContext(AuthContext);

    const login = async (url, loginCredential) => {
        try {
            const instance = axios.create({withCredentials: true});
            const response = await instance.post(url, loginCredential);
            await newToken(response.data);
            await setAuth(true);
            navigate("/")
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    return { token, tokenExpires, login }
}

export default useLogin
