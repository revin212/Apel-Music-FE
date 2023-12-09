import { Typography, Stack, Breadcrumbs } from '@mui/material'
import { breadcrumbStyle, noInvoiceStyle, titleStyle, totalhargaStyle } from './AdminInvoiceDetailHeaderStyles'
import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { dateToStringInvoice } from '../../../../utils/DateUtils'
import useGetData from '../../../../hooks/useGetData'
import { AuthContext } from '../../../AuthContext/AuthContext'


export const AdminInvoiceDetailHeader = () => {
    const {id} = useParams()
    const {data: invoiceData, loading, errorState, getData} = useGetData();
    const {token} = useContext(AuthContext)
    
    useEffect(()=>{
        getData('/TsOrder/GetInvoiceDetailHeader?id='+ id, { 'Authorization': `Bearer ${token}` })
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
                <Stack gap='8px'>
                    <Stack direction='row' gap='24px'>
                        <Typography variant='body1' sx={noInvoiceStyle} >No. Invoice :</Typography>
                        <Typography variant='body1' sx={noInvoiceStyle} >{invoiceData?.invoiceNo}</Typography>
                    </Stack>
                    <Stack direction='row' gap='24px'>
                        <Typography variant='body1' sx={noInvoiceStyle} >Tanggal Beli :</Typography>
                        <Typography variant='body1' sx={noInvoiceStyle} >{dateToStringInvoice(new Date(invoiceData?.orderDate))}</Typography>
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
