import { Stack } from '@mui/material'
import { SuccessHeader } from '../../components/SuccessPage/SuccessHeader'
import { SuccessMessage } from '../../components/SuccessPage/SuccessMessage'
import { Home } from '@mui/icons-material'

export const NotFound = () => {
  return (
    <Stack sx={{minHeight: '100vh'}}>
        <SuccessHeader />
        <SuccessMessage 
            title={'404 Page Not Found'}
            desc={'Silahkan kembali ke halaman utama'}
            buttonList={[{width: '176px', desc:'Ke Beranda', link:'/', icon:<Home sx={{marginRight:'6px', width:'15px', height:'15px'}} />}]}
         />
    </Stack>
  )
}
