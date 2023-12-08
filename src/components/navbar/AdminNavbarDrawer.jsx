import { Class, Home, Logout, Payment, Person, Piano, Receipt, ShoppingCart } from '@mui/icons-material';
import { Drawer, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { drawerMenuWrapperStyle } from './NavbarStyles';
import usePostData from '../../hooks/usePostData';

export const AdminNavbarDrawer = ({ openMobileNav, setOpemMobileNav }) => {
    const toggleDrawer =
    (open) =>
    (event) => {
      if (
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }

      setOpemMobileNav(open);
    };

    const { postData } = usePostData();
    const handleLogout = () => {
        setOpemMobileNav(false)
        postData(import.meta.env.VITE_API_URL + "/MsUser/Logout", 'logout', true);
      }

  return (
    <Drawer
        anchor='right'
        open={openMobileNav}
        onClose={toggleDrawer(false)}
        sx={{'& div.MuiStack-root':{backgroundColor:'primary.main'}}}
    > 
        <Stack sx={drawerMenuWrapperStyle}>
            <Typography variant='h4' sx={{fontSize:'24px', fontWeight:600, textAlign:'center', pt: '32px'}}>Admin Panel</Typography>
            <Stack justifyContent='space-between' height={'100%'}>
            <Stack sx={{py: '32px', px: '16px'}}>
                <Link to='/admin/category'  style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                    <Piano sx={{color: 'text.gray0'}} />
                    <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                    }}>
                    Category
                    </Typography>
                </Link>
                <Link to='/admin/course' style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                    <Class sx={{color: 'text.gray0'}} />
                    <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                    }}>
                    Course
                    </Typography>
                </Link>
                <Link to='/admin/user' style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                    <Person sx={{color: 'text.gray0'}} />
                    <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                    }}>
                    User
                    </Typography>
                </Link>
                <Link to='/admin/payment-method' style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                    <Payment sx={{color: 'text.gray0'}} />
                    <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                    }}>
                    Payment Method
                    </Typography>
                </Link>
                <Link to='/admin/invoice' style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                    <Receipt sx={{color: 'text.gray0'}} />
                    <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                    }}>
                    Invoice
                    </Typography>
                </Link>
            </Stack>
            <Stack sx={{py: '16px', px: '16px'}}>
                <Link to='/logout' onClick={handleLogout} style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                    <Logout sx={{color: 'text.gray0'}} />
                    <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                    }}>
                    Logout
                    </Typography>
                </Link>
            </Stack>
            </Stack>
        </Stack>
    </Drawer>
  )
}
