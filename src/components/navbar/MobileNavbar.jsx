import { ArrowDropDown, ArrowDropUp, Class, Logout, Payment, Person, Piano, Receipt, ShoppingCart } from '@mui/icons-material';
import { Button, Collapse, Drawer, Stack, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { drawerMenuWrapperStyle } from './navbarStyles';
import usePostData from '../../hooks/usePostData';
import { AuthContext } from '../AuthContext/AuthContext';

export const MobileNavbar = ({ openMobileNav, setOpemMobileNav }) => {
    const { roleName, email } = useContext(AuthContext);
    const [adminOpen, setAdminOpen] = useState(false);
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
        postData(import.meta.env.VITE_API_URL + "/MsUser/Logout", 'logout', true, {"email": email});
      }

  return (
    <Drawer
        anchor='right'
        open={openMobileNav}
        onClose={toggleDrawer(false)}
        sx={{'& div.MuiStack-root':{backgroundColor:'primary.main'}}}
        
    >
        <Stack justifyContent='space-between' sx={drawerMenuWrapperStyle}>
            <Stack sx={{py: '32px', px: '16px'}}>
                <Link to='/checkout'  style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                    <ShoppingCart sx={{color: 'text.gray0'}} />
                    <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                    }}>
                    Keranjang
                    </Typography>
                </Link>
                <Link to='/myclass' style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                    <Class sx={{color: 'text.gray0'}} />
                    <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                    }}>
                    Kelasku
                    </Typography>
                </Link>

                <Link to='/invoice' style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                    <Receipt sx={{color: 'text.gray0'}} />
                    <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                    }}>
                    Pembelian
                    </Typography>
                </Link>
                { roleName == `${import.meta.env.VITE_ROLE_ADMIN_KEY}` &&
                <>
                <Button sx={{padding: '10px', display: 'flex', justifyContent:'space-between', textDecoration:'none', '&:hover':{backgroundColor:'primary.main'} }} onClick={()=>setAdminOpen(prev=>!prev)}>
                    <Stack direction={'row'} gap='12px'>
                    <Person sx={{color: 'text.gray0'}} />
                    <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                    }}>
                    Admin
                    </Typography>
                    </Stack>
                    {!adminOpen && <ArrowDropDown sx={{color:'text.black'}} />}
                    {adminOpen && <ArrowDropUp sx={{color:'text.black'}} />}
                </Button>
                <Collapse in={adminOpen} timeout="auto" unmountOnExit sx={{paddingLeft:1}} >
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
                </Collapse>
                </>
                }
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
    </Drawer>
  )
}
