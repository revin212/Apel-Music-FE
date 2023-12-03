import { useContext } from 'react';
import axios from 'axios'; 
import { AuthContext } from '../components/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
    const navigate = useNavigate();

    const [token, tokenExpires, newToken, auth, setAuth] = useContext(AuthContext);

    const now = Date.now();
    const logout = async (url) => {
        try {
            const instance = axios.create({withCredentials: true});
            await instance.post(url);
            await newToken({token: "", tokenExpires: now});
            await setAuth(false);
            navigate("/")
        } catch (error) {
            console.error("Error during logout:", error);
        }
    }

    return logout
}

export default useLogout
