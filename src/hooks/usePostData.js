import { useContext, useState } from 'react';
import axios from 'axios'; 
import { AuthContext } from '../components/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const usePostData = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    let location = useLocation();
    let from = location.state?.from.pathname || '/';

    const { newToken, setAuth } = useContext(AuthContext);

    const postData = async (url, variant, withCredentials=false, payload={}) => {
        try {
            setIsLoading(true);
            setError('');
            setMsg('');
            const instance = axios.create({withCredentials: withCredentials});
            const response = await instance.post(url, payload);
            switch(variant){
            case 'register':
                {
                    setMsg("Register success, please check your email for account activation");
                    break;
                }
            case 'login':
                {
                    await newToken(response.data);
                    document.cookie = `token=${response.data.token}`;
                    navigate(from);
                    break;
                }
            case 'logout':
                {
                    await newToken({token: "", tokenExpires: Date.now()});
                    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                    navigate("/");
                    break;
                }
            case 'refreshToken':
                {
                    await newToken(response.data);
                    document.cookie = `token=${response.data.token}`;
                    break;
                }
            case 'forgetPassword':
                {
                    setMsg(response.data);
                    break;
                }
            case 'resetPassword':
                {
                    setMsg(response.data);
                    navigate('/login');
                    break;
                }
            case 'emailConfirm':
                {
                    break;
                }
            default: break;
            }
        } catch (err) {
            if(err.response)
            {
                setMsg('')
                setError(err.response.data)
            } else 
            { 
                setError("Server error, please try again") 
            }
            switch(variant){
                case 'logout':
                    {
                        console.error("Error during logout:", err);
                        document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT';
                        break;
                    }
                case 'refreshToken':
                    {
                        setAuth(false);
                    }
                case 'emailConfirm':
                    {
                        console.error(err);
                        break;
                    }
                default: break;
            }
        } finally { setIsLoading(false) }
    }

    return { postData, isLoading, error, setError, msg, setMsg }
}

export default usePostData