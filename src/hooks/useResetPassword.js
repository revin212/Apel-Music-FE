import axios from 'axios'; 
import { useState } from 'react';

const useResetPassword = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')

    const resetPassword = async (url, payload) => {
        try {
            setError('')
            setLoading(false)
            const response = await axios.post(url, payload);
            setMsg(response.data)
        } catch (err) {
            if(err.response){
                setError(err.response.data)
            } else { setError("Server error, please try again") }
        } finally {
            setLoading(false)
        }
    }

    return { resetPassword, loading, error, setError, msg }
}

export default useResetPassword