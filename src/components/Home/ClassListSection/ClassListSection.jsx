import React, { useEffect } from 'react'
import { Box, Stack, Typography, Alert } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { categoryStyle, imageStyle, wrapperStyle, classNameStyle, priceStyle, titleStyle } from './ClassListSectionStyles'
import { Link } from 'react-router-dom'
import useGetData from '../../../hooks/useGetData'
import { SkeletonCourse } from '../../Skeleton/SkeletonCourse'

export const ClassListSection = () => {
    const url = `/MsCourse/GetFavoriteList`  
    const { data: classData, loading, errorState, getData } = useGetData()

    useEffect(() => {
        getData(url)
    }, [])

    const handleError = 
    (
    <Box sx={wrapperStyle}>
        <Typography variant='h2' sx={titleStyle}>
            Pilih kelas impian kamu
        </Typography>
        <Alert variant="outlined" severity="error" sx={{color:'warning.main'}}>
            Terjadi kesalahan pada server, mohon muat ulang halaman beberapa saat lagi
        </Alert>
    </Box>
    )

    const handleSuccess =
    (
    <Box sx={wrapperStyle}>
        <Typography variant='h2' sx={titleStyle}>
            Explore kelas favorit
        </Typography>
        <Grid container minHeight={'300px'} columnSpacing={3} rowSpacing={7.5} position={'relative'}>
            {loading && [...Array(6)].map((item, i)=>{
                return(
                    <Grid xs={12} md={4} key={i}>
                        <SkeletonCourse />
                    </Grid>
                )
            })}
            {classData?.map((item)=>{
            return (
                <Grid xs={12} md={4} key={item.id}>
                    <Link to={`/class/${item.id}`} underline='none' style={{textDecoration:'none'}}>
                    <Stack direction='column' gap='16px'>
                        <img src={`${import.meta.env.VITE_BASE_URL}${item.image}?`+new Date().getTime()} width="350" height="234" alt={item.title} style={imageStyle} />
                        <Box padding='0px, 8px, 0px, 8px'>
                            <Box minHeight='113px' maxWidth='292px'>
                                <Typography variant='body1' sx={categoryStyle}>
                                    {item.categoryName}
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
            )
            })}
        </Grid>
    </Box>
    )

    if(errorState) return handleError
    else return handleSuccess
}
