import { Stack } from '@mui/material'
import { useEffect } from 'react'
import { SuccessHeader } from '../../components/SuccessPage/SuccessHeader'
import { SuccessMessage } from '../../components/SuccessPage/SuccessMessage'
import usePostData from '../../hooks/usePostData'

export const EmailConfirm = () => {
    const email = new URLSearchParams(window.location.search).get('email');
    const { postData, loading } = usePostData();

    useEffect(()=>{
      postData(import.meta.env.VITE_API_URL + "/MsUser/ActivateUser?Email=" + email, 'emailConfirm')
    }, [])

  return (
    <Stack sx={{minHeight: '100vh'}}>
        <SuccessHeader />
        <SuccessMessage 
            title={'Konfirmasi Email Berhasil'}
            desc={'Silahkan Login terlebih dahulu untuk masuk ke aplikasi'}
            buttonList={[{width: '176px', desc:'Masuk Sekarang', link:'/login'}]}
            loading = {loading}
         />
    </Stack>
  )
}
