import { Stack } from '@mui/material'
import { useEffect } from 'react'
import useEmailConfirm from '../../hooks/useEmailConfirm'
import { SuccessHeader } from '../../components/successPage/successHeader'
import { SuccessMessage } from '../../components/successPage/successMessage'

export const EmailConfirm = () => {
    const email = new URLSearchParams(window.location.search).get('email');
    const { emailConfirm } = useEmailConfirm();

    useEffect(()=>{
        emailConfirm(import.meta.env.VITE_API_URL + "/MsUser/ActivateUser?Email=" + email)
    }, [])

  return (
    <Stack sx={{minHeight: '100vh'}}>
        <SuccessHeader />
        <SuccessMessage 
            title={'Konfirmasi Email Berhasil'}
            desc={'Silahkan Login terlebih dahulu untuk masuk ke aplikasi'}
            buttonList={[{width: '176px', desc:'Masuk Sekarang', link:'/login'}]}
         />
    </Stack>
  )
}
