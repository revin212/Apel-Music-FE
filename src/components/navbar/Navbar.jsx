import { Box, Typography, Button } from '@mui/material'
import { Logout, Person, ShoppingCart } from "@mui/icons-material";
import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext';
import { homeButtonStyle, loggedInMenuListStyle, navbarMenuListStyle, navbarWrapperStyle, notLoginMenuListStyle } from './NavbarStyles';
import usePostData from '../../hooks/usePostData';
import { doesHttpOnlyCookieExist } from '../../utils/authUtils';

const Navbar = () => {
  const { token, tokenExpires, setAuth } = useContext(AuthContext);
  const { postData } = usePostData();

  useEffect(()=>{
    //cek apakah ada cookies refreshToken & token expires 1 menit lagi
    if(doesHttpOnlyCookieExist("refreshToken") &&
    new Date(tokenExpires) - Date.now() < 60000)
    {
      postData(import.meta.env.VITE_API_URL + "/MsUser/RefreshToken", 'refreshToken', true)
    } else if(!doesHttpOnlyCookieExist("refreshToken"))
    {
      setAuth(false)
    }
  }, [token, tokenExpires])

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
          <ul style={loggedInMenuListStyle}>
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
            </ul>
          : <ul style={notLoginMenuListStyle}>
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
          }
        </Box>
    </Box>
    
  )
}

export default Navbar