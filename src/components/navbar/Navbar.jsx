import { Box, Typography, Button } from '@mui/material'
import { Logout, Person, ShoppingCart } from "@mui/icons-material";
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext';
import useLogout from '../../hooks/useLogout';

const Navbar = () => {
  const [auth, setAuth] = useState(false)
  // const [token, tokenExpires, newToken] = useContext(AuthContext);
  // const logout = useLogout();

  // useEffect(()=>{
  //   if(token != "" && Date.now() < new Date(tokenExpires)){
  //     setAuth(true)
  //   } else setAuth(false)
  // }, [token, tokenExpires])

  // const handleLogout = () => {
  //   logout(import.meta.env.VITE_API_URL + "/MsUser/Logout");
  // }

  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      height: '91.51px',
      display: 'flex',
      alignContent: 'center'
    }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          color: 'primary.main',
          px: '50px',
          my: 'auto'
        }}>
          <Link to='/' style={{padding: '10px', display: 'flex', alignContent:'center'}}>
            <img src="/apel-music-logo.png" alt="logo" style={{objectFit:'contain'}}/>
          </Link>

          {!auth
          ? <ul style={{listStyleType:'none', display: 'flex', flexDirection: 'row', gap:'40px'}}>
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
          : <ul style={{listStyleType:'none', display: 'flex', flexDirection: 'row', gap:'40px'}}>
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
                  <Link to='/logout' style={{padding: '10px', display: 'flex', alignContent:'center'}}>
                    <Logout sx={{color: 'text.gray0'}} />
                  </Link>
              </li>
            </ul>}
        </Box>
    </Box>
    
  )
}

export default Navbar