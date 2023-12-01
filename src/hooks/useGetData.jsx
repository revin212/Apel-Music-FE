import { useState } from "react";
import axios from 'axios';

const useGetData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorState, setErrorState] = useState(false)
   
    const getData = async (url) =>{
        setErrorState(false)
        setLoading(true)
       
        await axios.get(import.meta.env.VITE_API_URL_DUMMY + url)
        .then((response) => {
          // handle success
          setData(response.data)
          setLoading(false)
        })
        .catch((error) => {
          // handle error
          console.log(error);
          setLoading(false)
          setErrorState(true)
        })
    }
    
    return {data, loading, errorState, getData}
}


export default useGetData