import { useContext } from 'react';
import axios from 'axios'; 
import { AuthContext } from '../components/AuthContext/AuthContext';

const useRefreshToken = () => {

    const [token, tokenExpires, newToken] = useContext(AuthContext);

    const refreshToken = async (url) => {
        try {
            const instance = axios.create({withCredentials: true, validateStatus: () => true});
            const response = await instance.post(url);
            await newToken(response.data);
        } catch {
            return
        }
    }

    return refreshToken
}

export default useRefreshToken
