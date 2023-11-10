import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { categoryStyle, imageStyle, wrapperStyle, classNameStyle, priceStyle, titleStyle } from './ClassListSectionStyles'
import { dummyData } from '../../../utils/dummyData'
import { Link } from 'react-router-dom'

export const ClassListSection = ({classData}) => {
  return (
    <Box sx={wrapperStyle}>
        <Typography variant='h2' sx={titleStyle}>
            Explore kelas favorit
        </Typography>
        <Grid container columnSpacing={3} rowSpacing={7.5}>
            {/* {dummyData.map((item)=>{
                return (
                    <Grid xs={12} md={4} key={item.id}>
                        <Link href='#' underline='none' style={{textDecoration:'none'}}>
                        <Stack direction='column' gap='16px'>
                            <img src={item.image} width="350" height="234" alt={item.name} style={imageStyle} />
                            <Box padding='0px, 8px, 0px, 8px'>
                                <Box minHeight='113px' maxWidth='292px'>
                                    <Typography variant='body1' sx={categoryStyle}>
                                        {item.category}
                                    </Typography>
                                    <Typography variant='h4' sx={classNameStyle}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant='subtitle1' sx={priceStyle}>
                                        IDR {new Intl.NumberFormat(["ban", "id"]).format(item.price)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                        </Link>
                    </Grid>
                ) */}
                {classData.map((item)=>{
                return (
                    <Grid xs={12} md={4} key={item.id_menu}>
                        <Link to='/class/1' underline='none' style={{textDecoration:'none'}}>
                        <Stack direction='column' gap='16px'>
                            <img src='https://placehold.co/600x400' width="350" height="234" alt={item.title} style={imageStyle} />
                            <Box padding='0px, 8px, 0px, 8px'>
                                <Box minHeight='113px' maxWidth='292px'>
                                    <Typography variant='body1' sx={categoryStyle}>
                                        {item.type_name}
                                    </Typography>
                                    <Typography variant='h4' sx={classNameStyle}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant='subtitle1' sx={priceStyle}>
                                        IDR {new Intl.NumberFormat(["ban", "id"]).format(item.price)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    </Box>
  )
}
