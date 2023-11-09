import { Box, Stack, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { imageStyle, wrapperStyle, titleStyle, categoryNameStyle } from './CategoryListSectionStyles'
import { dummyData } from './dummyData'

export const CategoryListSection = () => {
  return (
    <Box sx={wrapperStyle}>
        <Typography variant='h2' sx={titleStyle}>
            Pilih kelas impian kamu
        </Typography>
        <Grid container columnSpacing={3} rowSpacing={7.5}>
            {dummyData.map((item)=>{
                return (
                    <Grid xs={6} md={3} key={item.id}>
                        <Link href='#' underline='none'>
                        <Stack direction='column' gap='24px' alignItems='center'>
                            <img src={item.image} width="350" height="234" alt={item.category} style={imageStyle} />
                            <Typography variant='h4' sx={categoryNameStyle}>
                                {item.category}
                            </Typography>
                        </Stack>
                        </Link>
                    </Grid>
                )
            })} 
        </Grid>
    </Box>
  )
}
