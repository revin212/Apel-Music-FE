import axios from 'axios'; 
import { useState } from 'react';

const useForgetPassword = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')

    const forgetPassword = async (url) => {
        try {
            setError('')
            setLoading(false)
            const response = await axios.post(url);
            setMsg(response.data)
        } catch (err) {
            if(err.response){
                setError(err.response.data)
            } else { setError("Server error, please try again") }
        } finally {
            setLoading(false)
        }
    }

    return { forgetPassword, loading, error, setError, msg }
}

export default useForgetPassword
