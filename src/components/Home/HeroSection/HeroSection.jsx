import { Box, Stack, Typography, Card } from '@mui/material'
import { cardContentStyle, cardStyle, cardTitleStyle, subtitleStyle, titleStyle, wrapperStyle } from './HeroSectionStyles'

export const HeroSection = () => {
  return (
    <Box sx={wrapperStyle} >
        <Stack direction='column' gap={{xs: '40px', md: '60px'}} >
            <Stack direction='column' gap='27px' color='white' alignItems='center'>
                <Typography variant='h1' sx={titleStyle}>
                    Hi Musiker! Gabung yuk di Apel Music
                </Typography>
                <Typography variant='h2' sx={subtitleStyle}>
                    Banyak kelas keren yang bisa menunjang bakat bermusik kamu
                </Typography>
            </Stack>
            <Stack direction={{xs:'column', md:'row'}} gap='40px' alignItems='center'>
                <Card sx={cardStyle}>
                    <Typography variant='h3' sx={cardTitleStyle}>
                        500+
                    </Typography>
                    <Typography variant='body2' component='p' sx={cardContentStyle}>
                        Lebih dari sekedar kelas biasa yang bisa mengeluarkan bakat kalian
                    </Typography>
                </Card>
                <Card sx={cardStyle}>
                    <Typography variant='h3' sx={cardTitleStyle}>
                        50+
                    </Typography>
                    <Typography variant='body2' component='p' sx={cardContentStyle}>
                        Lulusan yang menjadi musisi ternama dengan skill memukau
                    </Typography>
                </Card>
                <Card sx={cardStyle}>
                    <Typography variant='h3' color='secondary'  sx={cardTitleStyle}>
                        10+
                    </Typography>
                    <Typography variant='body2' component='p' sx={cardContentStyle}>
                        Coach Special kolaborasi dengan musisi terkenal
                    </Typography>
                </Card>
            </Stack>
        </Stack>
    </Box>
  )
}
