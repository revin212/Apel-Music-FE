import React from 'react'
import { InvoiceTable } from '../../components/InvoiceTable/InvoiceTable'
import { Stack, Typography } from '@mui/material'

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

export const AdminCategory = () => {
  return (
    <Stack gap='32px'>
        <Typography variant='h2' sx={titleStyle}>Admin Panel : <Typography variant='h2' sx={titleStyle}>Category</Typography></Typography>
        <InvoiceTable />
    </Stack>
  )
}
