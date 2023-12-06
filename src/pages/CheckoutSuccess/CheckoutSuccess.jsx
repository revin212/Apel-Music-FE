import { useContext, useEffect } from 'react'
import { Stack } from '@mui/material'
import { SuccessHeader } from '../../components/successPage/successHeader'
import { SuccessMessage } from '../../components/successPage/successMessage'
import { ArrowForward, Home } from '@mui/icons-material'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../components/AuthContext/AuthContext'
import usePostData from '../../hooks/usePostData'

export const CheckoutSuccess = () => {
  const { token, tokenExpires, auth } = useContext(AuthContext);
  const { postData } = usePostData();

  useEffect(()=>{
    //cek apakah token expires 1 menit lagi
    if(new Date(tokenExpires) - Date.now() < 60000){
      postData(import.meta.env.VITE_API_URL + "/MsUser/RefreshToken", 'refreshToken', true)
    }
  }, [token, tokenExpires])

  return (
    auth? 
    <Stack sx={{minHeight: '100vh'}}>
        <SuccessHeader />
        <SuccessMessage 
            title={'Pembelian Berhasil'}
            desc={'Yey! Kamu telah berhasil membeli kursus di Apel Music'}
            buttonList={[
                {width: '165px', variant:'outlined',desc:'Ke Beranda', link:'/', icon:<Home sx={{marginRight:'6px', width:'15px', height:'15px'}} />},
                {width: '165px', desc:'Buka Invoice', link:'/invoice', icon:<ArrowForward sx={{marginRight:'6px', width:'15px', height:'15px'}} />}
            ]}
         />
    </Stack>
    :
    <Navigate to='/' /> 
  )
}
