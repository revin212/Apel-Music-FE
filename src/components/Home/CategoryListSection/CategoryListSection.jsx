import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { imageStyle, wrapperStyle, titleStyle, categoryNameStyle } from './CategoryListSectionStyles'
import { dummyData } from '../../../utils/dummyDataCategory'
import { Link } from 'react-router-dom'

export const CategoryListSection = ({categoryData}) => {
  return (
    <Box sx={wrapperStyle}>
        <Typography variant='h2' sx={titleStyle}>
            Pilih kelas impian kamu
        </Typography>
        <Grid container columnSpacing={3} rowSpacing={7.5}>
            {/* {dummyData.map((item)=>{
                return (
                    <Grid xs={6} md={3} key={item.id}>
                        <Link to='/category/drum/' underline='none' style={{textDecoration:'none'}}>
                        <Stack direction='column' gap='24px' alignItems='center'>
                            <img src={item.image} width="350" height="234" alt={item.category} style={imageStyle} />
                            <Typography variant='h4' sx={categoryNameStyle}>
                                {item.category}
                            </Typography>
                        </Stack>
                        </Link>
                    </Grid>
                )
            })}  */}
            {categoryData.map((item)=>{
                return (
                    <Grid xs={6} md={3} key={item.id_type}>
                        <Link to='/category/drum/' underline='none' style={{textDecoration:'none'}}>
                        <Stack direction='column' gap='24px' alignItems='center'>
                            <img src='https://placehold.co/600x400' width="350" height="234" alt={item.type_name} style={imageStyle} />
                            <Typography variant='h4' sx={categoryNameStyle}>
                                {item.type_name}
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
