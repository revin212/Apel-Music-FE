import { useState } from "react";
import axios from 'axios';

const useGetData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorState, setErrorState] = useState(false)
   
    const getData = async (url) =>{
        setErrorState(false)
        setLoading(true)
       
        await axios.get(import.meta.env.VITE_API_URL + url)
        .then((response) => {
          // handle success
          setData(response.data)
          setLoading(false)
        })
        .catch((error) => {
          // handle error
          setLoading(false)
          setErrorState(true)
        })
    }
    
    return {data, setData, loading, errorState, getData}
}


export default useGetData