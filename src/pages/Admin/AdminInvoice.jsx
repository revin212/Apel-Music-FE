import React from 'react'
import { Stack, Typography } from '@mui/material'
import { AdminInvoiceTable } from '../../components/Admin/AdminInvoice/AdminInvoiceTable'

const titleStyle = {
  fontSize: '20px',
  fontWeight: '700',
  lineHeight: '30px',
  letterSpacing: '0em',
  color: 'text.gray2',
  display:'flex',
  flexDirection: {xs:'column', sm:'row'},
  gap: 2           
}

export const AdminInvoice = () => {
  return (
    <Stack gap='32px'>
        <Typography variant='h2' sx={titleStyle}>Admin Panel : <Typography sx={titleStyle}>Invoice</Typography></Typography>
        <AdminInvoiceTable />
    </Stack>
  )
}
