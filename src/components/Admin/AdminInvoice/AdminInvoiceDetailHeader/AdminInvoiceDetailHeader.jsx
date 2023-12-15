import { Typography, Stack, Breadcrumbs } from '@mui/material'
import { breadcrumbStyle, noInvoiceStyle, noInvoiceStyleEmail, titleStyle, totalhargaStyle } from './AdminInvoiceDetailHeaderStyles'
import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { dateToStringInvoiceHeader } from '../../../../utils/DateUtils'
import useGetData from '../../../../hooks/useGetData'
import { AuthContext } from '../../../AuthContext/AuthContext'


export const AdminInvoiceDetailHeader = () => {
    const {id} = useParams()
    const {data: invoiceData, loading, errorState, getData} = useGetData();
    const {token} = useContext(AuthContext)
    
    useEffect(()=>{
        getData('/admin/TsOrderAdmin/GetInvoiceDetailHeader?id='+ id, { 'Authorization': `Bearer ${token}` })
    },[token])

  return (
    <>
        <Breadcrumbs
                separator=">"
                aria-label="breadcrumb"
                sx={breadcrumbStyle}
            >
            <Link to='/' style={{color:'#828282', textDecoration:'none'}}>Beranda</Link>
            <Link to='/admin/invoice' style={{color:'#828282', textDecoration:'none'}}>Admin Invoice</Link>
            <Typography variant='div' sx={{color:'secondary.main'}}>Rincian Invoice</Typography>
        </Breadcrumbs>
        <Stack gap='24px'>
            <Typography variant='h2' sx={titleStyle}>Rincian Invoice</Typography>
            <Stack direction={{xs:'column', md:'row'}} gap='24px' justifyContent='space-between' alignItems={{xs:'start', md:'end'}}>
                <Stack gap={{xs:'16px', sm:'8px'}}>
                <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                    <Typography variant='body1' sx={noInvoiceStyle} width={'200px'} fontWeight={{xs:'600', sm:'500'}} maxWidth={{xs:'none', sm:'170px'}} flexGrow={1} >User Email</Typography>
                    <Stack direction={'row'} gap='12px'>
                        <Typography variant='body1' sx={noInvoiceStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                        <Typography variant='body1' sx={noInvoiceStyleEmail}>{invoiceData?.userEmail}</Typography>
                    </Stack>
                </Stack>

                <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                    <Typography variant='body1' sx={noInvoiceStyle} width={'100%'} fontWeight={{xs:'600', sm:'500'}} maxWidth={{xs:'none', sm:'170px'}} >Payment Method</Typography>
                    <Stack direction={'row'} gap='12px'>
                        <Typography variant='body1' sx={noInvoiceStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                        <Typography variant='body1' sx={noInvoiceStyle} >{invoiceData?.paymentName}</Typography>
                    </Stack>
                </Stack>
                <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                    <Typography variant='body1' sx={noInvoiceStyle} width={'100%'} fontWeight={{xs:'600', sm:'500'}} maxWidth={{xs:'none', sm:'170px'}} >No. Invoice</Typography>
                    <Stack direction={'row'} gap='12px'>
                        <Typography variant='body1' sx={noInvoiceStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                        <Typography variant='body1' sx={noInvoiceStyle} >{invoiceData?.invoiceNo}</Typography>
                    </Stack>
                </Stack>
                <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                    <Typography variant='body1' sx={noInvoiceStyle} width={'100%'} fontWeight={{xs:'600', sm:'500'}} maxWidth={{xs:'none', sm:'170px'}} >Tanggal Beli</Typography>
                    <Stack direction={'row'} gap='12px'>
                        <Typography variant='body1' sx={noInvoiceStyle} display={{xs:'none', sm:'block'}} >:</Typography>
                        <Typography variant='body1' sx={noInvoiceStyle} >{dateToStringInvoiceHeader(new Date(invoiceData?.orderDate))}</Typography>
                    </Stack>
                </Stack>
                </Stack>
                    
                <Stack direction='row' gap='24px' >
                    <Typography variant='body1' sx={totalhargaStyle} >Total Harga</Typography>
                    <Typography variant='body1' sx={totalhargaStyle} >IDR {new Intl.NumberFormat(["ban", "id"]).format(invoiceData?.totalHarga)}</Typography>
                </Stack>
            </Stack>
        </Stack>
    </>
  )
}
