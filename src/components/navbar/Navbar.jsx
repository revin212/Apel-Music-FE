import { Box, Typography, Button, Menu, MenuItem } from '@mui/material'
import { Class, Logout, Menu as MenuIcon, Person, Piano, Receipt, ShoppingCart } from "@mui/icons-material";
import { useEffect, useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext';
import { homeButtonStyle, loggedInMenuListStyle, loggedInMobileMenuListStyle, navbarMenuListStyle, navbarWrapperStyle, notLoginMenuListStyle } from './NavbarStyles';
import usePostData from '../../hooks/usePostData';
import { doesHttpOnlyCookieExist } from '../../utils/authUtils';
import { MobileNavbar } from './MobileNavbar';

const Navbar = () => {
  const { token, tokenExpires } = useContext(AuthContext);
  const [openMobileNav, setOpemMobileNav] = useState(false);
  const { postData } = usePostData();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(()=>{
    //cek apakah ada cookies refreshToken & token expires 1 menit lagi
    if(doesHttpOnlyCookieExist("refreshToken") &&
    new Date(tokenExpires) - Date.now() < 60000)
    {
      postData(import.meta.env.VITE_API_URL + "/MsUser/RefreshToken", 'refreshToken', true)
    }
  }, [location])

  const handleLogout = () => {
    postData(import.meta.env.VITE_API_URL + "/MsUser/Logout", 'logout', true);
  }

  return (
    <Box sx={navbarWrapperStyle}>
        <Box sx={navbarMenuListStyle}>
          <Link to='/' style={homeButtonStyle}>
            <img src="/apel-music-logo.png" alt="logo" style={{objectFit:'contain'}}/>
          </Link>

          {token
          ?
          <>
          <Box sx={loggedInMobileMenuListStyle}>
            <Button onClick={()=>setOpemMobileNav(true)}>
              <MenuIcon sx={{color:'text.gray2'}} />
            </Button>
            <MobileNavbar openMobileNav={openMobileNav} setOpemMobileNav={setOpemMobileNav} />
          </Box>
          <Box sx={loggedInMenuListStyle}>
              <li>
                  <Link to='/checkout' style={{padding: '10px', display: 'flex', alignContent:'center'}}>
                    <ShoppingCart sx={{color: 'text.gray0'}} />
                  </Link>
              </li>
              <li style={{display: 'flex', alignContent:'center'}}>
                <Link to='/myclass' style={{padding: '10px', textDecoration:'none',}}>
                  <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                  }}>
                    Kelasku
                  </Typography>
                </Link>
              </li>
              <li style={{display: 'flex', alignContent:'center'}}>
                <Link to='/invoice' style={{padding: '10px', textDecoration:'none',}}>
                  <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                  }}>
                    Pembelian
                  </Typography>
                </Link>
              </li>
              <li style={{display: 'flex', textAlign:'center'}}>
                  <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black',
                    my: 'auto'
                  }}>
                    |
                  </Typography>
              </li>
              <li>
                  <Button onClick={(e)=>setAnchorEl(e.currentTarget)}
                    sx={{display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none', '&:hover':{backgroundColor:'primary.main'}}}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}          
                  >
                    <Person sx={{color: 'text.gray0'}} />
                    <Typography variant='p' sx={{
                          fontWeight: '500',
                          color: 'text.black'
                          }}>
                          Admin
                    </Typography>
                  </Button>
                  <Menu sx={{padding: '10px', display: 'flex', alignContent:'center', '& ul':{backgroundColor:'primary.main'} }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={()=>setAnchorEl(null)}
                  >
                        <MenuItem >
                        <Link to='/admin/category'  style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                            <Piano sx={{color: 'text.gray0'}} />
                            <Typography variant='p' sx={{
                            fontWeight: '500',
                            color: 'text.black'
                            }}>
                            Category
                            </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem >
                        <Link to='/admin/course' style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                          <Class sx={{color: 'text.gray0'}} />
                          <Typography variant='p' sx={{
                          fontWeight: '500',
                          color: 'text.black'
                          }}>
                          Course
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem >
                        <Link to='/admin/user' style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                            <Person sx={{color: 'text.gray0'}} />
                            <Typography variant='p' sx={{
                            fontWeight: '500',
                            color: 'text.black'
                            }}>
                            User
                            </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem >
                        <Link to='/admin/invoice' style={{padding: '10px', display: 'flex', alignContent:'center', gap:'12px', textDecoration:'none'}}>
                          <Receipt sx={{color: 'text.gray0'}} />
                          <Typography variant='p' sx={{
                          fontWeight: '500',
                          color: 'text.black'
                          }}>
                          Invoice
                          </Typography>
                        </Link>
                      </MenuItem>
                  </Menu>
              </li>
              <li>
                  <Link to='/logout' onClick={handleLogout} style={{padding: '10px', display: 'flex', alignContent:'center'}}>
                    <Logout sx={{color: 'text.gray0'}} />
                  </Link>
              </li>
            </Box>
            </>
          : <ul style={notLoginMenuListStyle}>
              <Box sx={{display: {xs:'none', md:'flex'}}}>
              <li style={{display: 'flex', alignContent:'center'}}>
                <Link to='/register' style={{padding: '10px', textDecoration:'none'}}>
                  <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                  }}>
                    Daftar Sekarang
                  </Typography>
                </Link>
              </li>
              </Box>
              <li>
                <Link to='/login'>
                  <Button variant='contained' sx={{
                    minWidth: '93px',
                    maxHeight: '44px',
                  }}>Masuk</Button>
                </Link>
              </li>
            </ul>
          }
        </Box>
    </Box>
    
  )
}

export default Navbar