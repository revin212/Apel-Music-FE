import { Box, Stack, Typography, Card } from '@mui/material'
import { bodyStyle, titleStyle, wrapperStyle } from './HeroSectionStyles'

export const HeroSection = () => {
  return (
    <Box sx={wrapperStyle} >
        <img src="/images/image 3-1.png" alt="drum" style={{width:'100%', height:'auto'}} />
        <Stack direction='column' gap='16px' paddingInline={{xs: '30px',sm:'80px',md:'120px'}} paddingBlock='80px'>
            <Typography variant='h4' sx={titleStyle}>
                Drummer Class
            </Typography>
            <Typography variant='body1' sx={bodyStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </Stack>
    </Box>
  )
}
