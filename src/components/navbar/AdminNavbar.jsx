import { Box, Typography, Button } from '@mui/material'
import { Logout, Menu, Person, ShoppingCart } from "@mui/icons-material";
import { useEffect, useContext, useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext';
import { homeButtonStyle, loggedInMobileMenuListStyle, navbarMenuListStyle, navbarWrapperStyle } from './adminNavbarStyles';
import usePostData from '../../hooks/usePostData';
import { AdminNavbarDrawer } from './AdminNavbarDrawer';

const AdminNavbar = () => {
  const { token, tokenExpires, roleName, refreshToken, email } = useContext(AuthContext);
  const [openMobileNav, setOpemMobileNav] = useState(false);
  const { postData } = usePostData();
  const location = useLocation();

  useEffect(()=>{
    //cek apakah ada cookies refreshToken & token expires 1 menit lagi
    
    if(!token || refreshToken &&
    new Date(tokenExpires) - Date.now() < 60000)
    {
      postData(import.meta.env.VITE_API_URL + "/MsUser/RefreshToken", 'refreshToken', true, {"Email": email, "refreshToken": refreshToken})
    }
  }, [location])

  return (
    <Box sx={navbarWrapperStyle}>
        <Box sx={navbarMenuListStyle}>
          <Link to='/' style={homeButtonStyle}>
            <img src="/apel-music-logo.png" alt="logo" style={{objectFit:'contain'}}/>
          </Link>

          <Box sx={loggedInMobileMenuListStyle}>
            <Button onClick={()=>setOpemMobileNav(true)}>
              <Menu sx={{color:'text.gray2'}} />
            </Button>
            <AdminNavbarDrawer openMobileNav={openMobileNav} setOpemMobileNav={setOpemMobileNav} />
          </Box>
        </Box>
    </Box>
  )
}

export default AdminNavbar