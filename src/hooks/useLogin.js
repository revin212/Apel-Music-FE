import {useState, useEffect} from 'react';
import axios from 'axios'; 

const useLogin = () => {
    const [data, setData] = useState({})
    const now = Date.now();
    const login = (url, loginCredential) => {
        axios.post(url, loginCredential)
        .then(data => setData(data.data))
        .then(console.log(data))
        .then(console.log(now < new Date(data.tokenExpires)))
    }

    return { data, login }
}

export default useLogin
