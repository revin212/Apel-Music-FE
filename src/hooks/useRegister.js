import { useContext, useState } from 'react';
import axios from 'axios'; 
import { AuthContext } from '../components/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    // const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    const register = async (url, registerCredential) => {
        try {
            setIsLoading(true);
            const instance = axios.create({withCredentials: true});
            const response = await instance.post(url, registerCredential);
            // navigate("/login")
        } catch (err) {
            if(err.response){
                setMsg('')
                setError(err.response.data)
            } else { setError("Server error, please try again") }
        } finally { setIsLoading(false) }
    }

    const succesMessage = async () => {
        const registerTimeout = setTimeout(() => {
            if(error == ''){
                setMsg("Register success, please check your email for account activation");
            } else {
                setMsg("");
            }
        }, 3000)
    }

    return { register, isLoading, error, setError, msg, succesMessage }
}

export default useLogin