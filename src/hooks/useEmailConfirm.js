import axios from 'axios'; 
import { useState } from 'react';

const useEmailConfirm = () => {
    const [loading, setLoading] = useState(false)
    const emailConfirm = async (url) => {
        try {
            setLoading(false)
            await axios.post(url);
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return { emailConfirm, loading }
}

export default useEmailConfirm
