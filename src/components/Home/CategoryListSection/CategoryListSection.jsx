import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, CircularProgress, Backdrop, Alert } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { imageStyle, wrapperStyle, titleStyle, categoryNameStyle, backdropStyle } from './CategoryListSectionStyles'
import { dummyData } from '../../../utils/dummyDataCategory'
import { Link } from 'react-router-dom'
import axios from 'axios'

import useGetData from '../../../hooks/useGetData'

export const CategoryListSection = () => {
    // const [categoryData, setCategoryData] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [errorState, setErrorState] = useState(false)
    // //console.log('loading = ', loading)
    // useEffect(()=> {
    //     setLoading(true)
    //     setErrorState(false)
    //     axios.get('http://52.237.194.35:2024/api/Type/GetActiveType')
    //         .then((response) => {
    //         // handle success
    //            setCategoryData(response.data)
    //            setLoading(false)
    //         })
    //         .catch((error) => {
    //         // handle error
    //            //console.log(error)
    //            setLoading(false)
    //            setErrorState(true)
    //            return(
    //             <Box sx={wrapperStyle}>
    //                 <Alert variant="filled" severity="error">
    //                     Terjadi kesalahan pada server, mohon muat ulang halaman beberapa saat lagi
    //                 </Alert>
    //             </Box>
    //            )
               
    //         })
    // }, [])

    const url = `/Type/GetActiveType`  
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
        <Alert variant="filled" severity="error">
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
            <Backdrop sx={backdropStyle} open={loading} >
                <CircularProgress color="primary" />
            </Backdrop>
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
                        <Link to={`/category/${item.type_name}`} underline='none' style={{textDecoration:'none'}}>
                        <Stack direction='column' gap='24px' alignItems='center'>
                            <img src={`data:image/jpeg;base64,${item.image}`} width="350" height="234" alt={item.type_name} style={imageStyle} />
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

    if(errorState) return handleError
    else return handleSuccess
}
