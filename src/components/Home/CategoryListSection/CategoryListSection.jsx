import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Alert } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { imageStyle, wrapperStyle, titleStyle, categoryNameStyle } from './CategoryListSectionStyles'
import { Link } from 'react-router-dom'

import useGetData from '../../../hooks/useGetData'
import { SkeletonCategory } from '../../Skeleton/SkeletonCategory'

export const CategoryListSection = () => {
    const url = '/MsCategory/GetShortList'
    const { data: categoryData, loading, errorState, getData } = useGetData()

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
            Pilih kelas impian kamu
        </Typography>
        <Grid container minHeight={'300px'} columnSpacing={3} rowSpacing={7.5} position={'relative'}>
            {loading && [...Array(8)].map((item, i)=>{
                return(
                    <Grid xs={6} md={3} key={i} sx={{display:'flex', justifyContent:'center'}}>
                        <SkeletonCategory />
                    </Grid>
                )
            })}
            {categoryData?.map((item)=>{
                return (
                    <Grid xs={6} md={3} key={item.id}>
                        <Link to={`/category/${item.id}`} underline='none' style={{textDecoration:'none'}}>
                        <Stack direction='column' gap='24px' alignItems='center'>
                            <img src={`${import.meta.env.VITE_BASE_URL}/${item.image}`} width="350" height="234" alt={item.type_name} style={imageStyle} />
                            <Typography variant='h4' sx={categoryNameStyle}>
                                {item.name}
                            </Typography>
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
