import React from 'react'
import { InvoiceTable } from '../../components/InvoiceTable/InvoiceTable'
import { Typography, Stack, Breadcrumbs } from '@mui/material'
import { Link } from 'react-router-dom'
import { breadcrumbStyle, titleStyle, wrapperStyle } from './InvoiceStyles'

export const Invoice = () => {
  return (
    <Stack gap='32px' sx={wrapperStyle}>
        <Breadcrumbs
            separator=">"
            aria-label="breadcrumb"
            sx={breadcrumbStyle}
        >
            <Link to='/' style={{color:'#828282', textDecoration:'none'}}>Beranda</Link>
            <Typography variant='div' sx={{color:'secondary.main'}}>Invoice</Typography>
        </Breadcrumbs>
        <Typography variant='h2' sx={titleStyle}>Menu Invoice</Typography>
        <InvoiceTable />
    </Stack>
  )
}
