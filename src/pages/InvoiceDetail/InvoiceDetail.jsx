import React from 'react'
import { Stack } from '@mui/material'
import { wrapperStyle } from './InvoiceDetailStyles'
import { InvoiceDetailTable } from '../../components/InvoiceDetail/InvoiceDetailTable/InvoiceDetailTable'
import { InvoiceDetailHeader } from '../../components/InvoiceDetail/InvoiceDetailHeader/InvoiceDetailHeader'

export const InvoiceDetail = () => {
  return (
    <Stack gap='32px' sx={wrapperStyle}>
        <InvoiceDetailHeader />
        <InvoiceDetailTable />
    </Stack>
  )
}
