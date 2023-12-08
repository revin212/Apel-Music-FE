import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { AdminCategoryTable } from '../../components/Admin/AdminCategory/AdminCategoryTable'
import { Add } from '@mui/icons-material'
import { Link } from 'react-router-dom'

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
        <Link to='/admin/category/form' style={{textDecoration:'none', width:'100%', maxWidth:'180px'}}>
          <Button variant='contained' color='secondary' sx={{width:'100%'}}>
            <Add />Add Category
          </Button>
        </Link>
        <AdminCategoryTable />
    </Stack>
  )
}
