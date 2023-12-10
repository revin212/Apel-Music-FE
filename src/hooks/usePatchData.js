import { useContext, useState } from 'react';
import axios from 'axios'; 
import { AuthContext } from '../components/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteAuthCookies, setAuthCookies } from '../utils/authUtils';

const usePatchData = () => {
    // const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    // let location = useLocation();
    // let from = location.state?.from.pathname || '/';

    // const { newToken } = useContext(AuthContext);

    const patchData = async (url, variant, withCredentials=false, payload={}, header={}) => {
        try {
            setIsLoading(true);
            setError('');
            setMsg('');
            const instance = axios.create({withCredentials: withCredentials});
            const response = await instance.patch(url, payload, {headers: header});
            switch(variant){
            case 'editCategory':
                {
                    setMsg(response.data);
                    break; 
                }
            case 'toggleActiveStatus':
                {
                    setMsg(response.data);
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
                default: break;
            }
        } finally { setIsLoading(false) }
    }

    return { patchData, isLoading, error, setError, msg, setMsg }
}

export default usePatchData