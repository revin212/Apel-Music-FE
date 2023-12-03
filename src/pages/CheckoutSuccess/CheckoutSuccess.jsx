import { Stack } from '@mui/material'
import { SuccessHeader } from '../../components/successPage/successHeader'
import { SuccessMessage } from '../../components/successPage/successMessage'
import { ArrowForward, Home } from '@mui/icons-material'

export const CheckoutSuccess = () => {
  return (
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
  )
}
