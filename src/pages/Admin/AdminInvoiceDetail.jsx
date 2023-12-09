import { Stack } from '@mui/material'
import React from 'react'
import { AdminInvoiceDetailHeader } from '../../components/Admin/AdminInvoice/AdminInvoiceDetailHeader/AdminInvoiceDetailHeader'
import { InvoiceDetailTable } from '../../components/InvoiceDetail/InvoiceDetailTable/InvoiceDetailTable'

export const AdminInvoiceDetail = () => {
  return (
    <Stack gap='32px'>
        <AdminInvoiceDetailHeader />
        <InvoiceDetailTable />
    </Stack>
  )
}
