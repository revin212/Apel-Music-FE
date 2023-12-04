import { Alert, Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { dummyData } from '../../../utils/dummyDataRecommended'
import { Link } from 'react-router-dom'
import { categoryStyle, imageStyle, wrapperStyle, classNameStyle, priceStyle, titleStyle } from './RecommendedClassesStyles'
import { SkeletonCourse } from '../../Skeleton/SkeletonCourse'

export const RecommendedClasses = ({classData}) => {
    const errorState = false;
    const loading = false;
  return (
    <Box sx={wrapperStyle}>
        <Typography variant='h2' sx={titleStyle}>
            Kelas lain yang mungkin kamu suka
        </Typography>
        {errorState && 
            <Alert variant="outlined" severity="error" sx={{color:'warning.main'}}>
                Terjadi kesalahan pada server, mohon muat ulang halaman beberapa saat lagi
            </Alert>
        }
        <Grid container columnSpacing={3} rowSpacing={7.5}>
                {loading && [...Array(3)].map((item, i)=>{
                    return(
                        <Grid xs={12} md={4} key={i}>
                            <SkeletonCourse />
                        </Grid>
                    )
                })}
                {!loading && dummyData.map((item)=>{
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
                    )}
                )}
        </Grid>
    </Box>
  )
}
