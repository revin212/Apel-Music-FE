import { useContext } from 'react';
import axios from 'axios'; 
import { AuthContext } from '../components/AuthContext/AuthContext';

const useRefreshToken = () => {

    const [token, tokenExpires, newToken, auth, setAuth] = useContext(AuthContext);

    const refreshToken = async (url) => {
        try {
            const instance = axios.create({withCredentials: true});
            const response = await instance.post(url);
            await newToken(response.data);
            await setAuth(true);
        } catch (error) {
            console.error("Error refreshing token:", error);
        }
    }

    return refreshToken
}

export default useRefreshToken
