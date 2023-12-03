import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

const navbarMenuListStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'primary.main',
    px: '50px',
    my: 'auto',
    height: '91.51px',
}

const homeButtonStyle = {padding: '10px', display: 'flex', alignItems:'center'}

export const SuccessHeader = () => {
  return (
    <Box sx={navbarMenuListStyle}>
        <Link to='/' style={homeButtonStyle}>
            <img src="/apel-music-logo.png" alt="logo" width='100px' height='31.5px' />
        </Link>
    </Box>
  )
}
