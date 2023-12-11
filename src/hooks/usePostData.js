import { useContext, useState } from 'react';
import axios from 'axios'; 
import { AuthContext } from '../components/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteAuthCookies, setAuthCookies } from '../utils/authUtils';

const usePostData = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    let location = useLocation();
    let from = location.state?.from.pathname || '/';

    const { newToken } = useContext(AuthContext);

    const postData = async (url, variant, withCredentials=false, payload={}, header={}) => {
        try {
            setIsLoading(true);
            setError('');
            setMsg('');
            const instance = axios.create({withCredentials: withCredentials});
            const response = await instance.post(url, payload, {headers: header});
            switch(variant){
            case 'register':
                {
                    setMsg("Register success, please check your email for account activation");
                    break;
                }
            case 'createCategory':
                {
                    setMsg(response.data);
                    break; 
                }
            case 'login':
                {
                    await newToken(response.data);
                    setAuthCookies(response.data);
                    navigate(from);
                    break;
                }
            case 'logout':
                {
                    await newToken({token: "", tokenExpires: Date.now(), roleName: ""});
                    deleteAuthCookies();
                    navigate("/");
                    break;
                }
            case 'refreshToken':
                {
                    await newToken(response.data);
                    setAuthCookies(response.data);
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
                    navigate('/login?msg=Reset password berhasil');
                    break;
                }
            case 'emailConfirm':
                {
                    break;
                }
            case 'checkoutFlow':
                {
                    break;
                }
            case 'addToCart':
                {
                    setMsg("Berhasil ditambahkan")
                    break;
                }
            case 'buyNow':
                {
                    navigate('/checkout')
                    break;
                }
            default: break;
            }
        } catch (err) {
            if(typeof err.response.data === 'string' || err.response.data instanceof String)
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
                        deleteAuthCookies();
                        break;
                    }
                case 'emailConfirm':
                    {
                        console.error(err);
                        break;
                    }
                case 'checkoutFlow':
                    {
                        setError("Server error, please try again")
                    }
                default: break;
            }
        } finally { setIsLoading(false) }
    }

    return { postData, isLoading, error, setError, msg, setMsg }
}

export default usePostData