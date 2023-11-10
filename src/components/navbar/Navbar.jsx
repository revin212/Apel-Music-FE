import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
          <ul style={{listStyleType:'none', display: 'flex', flexDirection: 'row', gap:'40px'}}>
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
        </Box>
    </Box>
    
  )
}

export default Navbar