import { Box, Typography, Button } from '@mui/material'
import { Logout, Person, ShoppingCart } from "@mui/icons-material";
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext';
import useLogout from '../../hooks/useLogout';
import useRefreshToken from '../../hooks/useRefreshToken';
import { homeButtonStyle, loggedInMenuListStyle, navbarMenuListStyle, navbarWrapperStyle, notLoginMenuListStyle } from './NavbarStyles';

const Navbar = () => {
  const [token, tokenExpires, newToken, auth, setAuth] = useContext(AuthContext);
  const logout = useLogout();
  const refreshToken = useRefreshToken();

  // useEffect(()=>{
  //   if(token != "" && Date.now() < new Date(tokenExpires)){
  //     setAuth(true)
  //   }
  // }, [token, tokenExpires])

  useEffect(()=>{
    //cek apakah token expires 1 menit lagi
    if(token != "" && new Date(tokenExpires) - Date.now() < 60000){
      refreshToken(import.meta.env.VITE_API_URL + "/MsUser/RefreshToken")
    }
  }, [token, tokenExpires])

  const handleLogout = () => {
    logout(import.meta.env.VITE_API_URL + "/MsUser/Logout");
  }

  return (
    <Box sx={navbarWrapperStyle}>
        <Box sx={navbarMenuListStyle}>
          <Link to='/' style={homeButtonStyle}>
            <img src="/apel-music-logo.png" alt="logo" style={{objectFit:'contain'}}/>
          </Link>

          {!auth
          ? <ul style={notLoginMenuListStyle}>
              <li style={{display: 'flex', alignContent:'center'}}>
                <Link to='/register' style={{padding: '10px', textDecoration:'none',}}>
                  <Typography variant='p' sx={{
                    fontWeight: '500',
                    color: 'text.black'
                  }}>
                    Daftar Sekarang
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to='/login'>
                  <Button variant='contained' sx={{
                    minWidth: '93px',
                    maxHeight: '44px',
                  }}>Masuk</Button>
                </Link>
              </li>
            </ul>
          : <ul style={loggedInMenuListStyle}>
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
                  <Link to='/myclass' style={{padding: '10px', display: 'flex', alignContent:'center'}}>
                    <Person sx={{color: 'text.gray0'}} />
                  </Link>
              </li>
              <li>
                  <Link to='/logout' onClick={handleLogout} style={{padding: '10px', display: 'flex', alignContent:'center'}}>
                    <Logout sx={{color: 'text.gray0'}} />
                  </Link>
              </li>
            </ul>}
        </Box>
    </Box>
    
  )
}

export default Navbar