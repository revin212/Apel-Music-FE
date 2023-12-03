import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, CircularProgress, Backdrop, Alert } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { categoryStyle, imageStyle, wrapperStyle, classNameStyle, priceStyle, titleStyle, backdropStyle } from './ClassListSectionStyles'
import { dummyData } from '../../../utils/dummyData'
import { Link } from 'react-router-dom'
import axios from 'axios' 
import useGetData from '../../../hooks/useGetData'

export const ClassListSection = () => {
    // const [classData, setClassData] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [errorState, setErrorState] = useState(false)
    // useEffect(()=> {
    //     setLoading(true)
    //     setErrorState(false)
    //     axios.get('http://52.237.194.35:2024/api/Menu/GetMenuLimit')
    //       .then((response) => {
    //         // handle success
    //         setClassData(response.data)
    //         setLoading(false)
    //       })
    //       .catch((error) => {
    //         // handle error
    //         //console.log(error);
    //         setLoading(false)
    //         setErrorState(true)
    //       })
    //     }, [])
    

    const url = `/Menu/GetMenuLimit`  
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
        <Alert variant="filled" severity="error">
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
            <Backdrop sx={backdropStyle} open={loading}>
                <CircularProgress color="primary" />
            </Backdrop>
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
                        <Link to={`/class/${item.id_menu}`} underline='none' style={{textDecoration:'none'}}>
                        <Stack direction='column' gap='16px'>
                            <img src={`data:image/jpeg;base64,${item.image}`} width="350" height="234" alt={item.title} style={imageStyle} />
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

    if(errorState) return handleError
    else return handleSuccess
}
