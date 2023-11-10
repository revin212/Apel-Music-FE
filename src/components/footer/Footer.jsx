import { Avatar, Box, Stack, Typography } from '@mui/material'
import { wrapperStyle, titleStyle, bodyStyle, listWrapperStyle } from './FooterStyles'
import { Link } from 'react-router-dom'
import './Footer.css'
import { Instagram, LocalPhone, MailOutline, Telegram, YouTube } from '@mui/icons-material'


export const Footer = () => {

  return (
    <Box sx={wrapperStyle}>
      <Stack direction='column' gap='8px'>
        <Typography variant='h4' sx={titleStyle}>
          Tentang
        </Typography>
        <Typography variant='body1' sx={bodyStyle}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Typography>
      </Stack>
      <Stack direction='column' gap='14px'>
        <Typography variant='h4' sx={titleStyle}>
          Produk
        </Typography>
        <Stack direction='row' gap='8px' justifyContent={{xs:'center', md:'start'}}>
          <ul style={listWrapperStyle}>
            <li><Link to="#" className='link-footer'>Gitar</Link></li>
            <li><Link to="#" className='link-footer'>Biola</Link></li>
            <li><Link to="#" className='link-footer'>Drum</Link></li>
          </ul>
          <ul style={listWrapperStyle}>
            <li><Link to="#" className='link-footer'>Menyanyi</Link></li>
            <li><Link to="#" className='link-footer'>Piano</Link></li>
            <li><Link to="#" className='link-footer'>Saxophone</Link></li>
          </ul>
        </Stack>
      </Stack>
      <Stack direction='column' gap='16px'>
        <Stack direction='column' gap='10px'>
          <Typography variant='h4' sx={titleStyle}>
            Alamat
          </Typography>
          <Typography variant='body1' sx={bodyStyle}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
          </Typography>
        </Stack>
        <Stack direction='column' gap='8px'>
          <Typography variant='h4' sx={titleStyle}>
            Kontak
          </Typography>
          <Stack direction='row' gap='16px' justifyContent={{xs:'center', md:'start'}}>
            <Link to='#'>
            <Avatar sx={{backgroundColor:'secondary.main'}} >
              <LocalPhone color='primary' />
            </Avatar>
            </Link>
            <Link to='#'>
            <Avatar sx={{backgroundColor:'secondary.main'}} >
              <Instagram color='primary' />
            </Avatar>
            </Link>
            <Link to='#'>
            <Avatar sx={{backgroundColor:'secondary.main'}} >
              <YouTube color='primary' />
            </Avatar>
            </Link>
            <Link to='#'>
            <Avatar sx={{backgroundColor:'secondary.main'}} >
              <Telegram color='primary' />
            </Avatar>
            </Link>
            <Link to='#'>
            <Avatar sx={{backgroundColor:'secondary.main'}} >
              <MailOutline color='primary' />
            </Avatar>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
