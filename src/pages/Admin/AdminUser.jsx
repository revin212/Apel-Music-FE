import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { AdminCategoryTable } from '../../components/Admin/AdminCategory/AdminCategoryTable'
import { Add } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { AdminCourseTable } from '../../components/Admin/AdminCourse/AdminCourseTable'
import { AdminUserTable } from '../../components/Admin/AdminUser/AdminUserTable'

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

export const AdminUser = () => {
  return (
    <Stack gap='32px'>
        <Typography variant='h2' sx={titleStyle}>Admin Panel : <Typography sx={titleStyle}>User</Typography></Typography>
        <Link to='/admin/user/form' style={{textDecoration:'none', width:'100%', maxWidth:'180px'}}>
          <Button variant='contained' color='secondary' sx={{width:'100%'}}>
            <Add />Add User
          </Button>
        </Link>
        <AdminUserTable />
    </Stack>
  )
}
