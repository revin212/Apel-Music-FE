import { Box, Stack, Typography, Backdrop, CircularProgress, Alert } from '@mui/material'
import { bodyStyle, titleStyle, wrapperStyle, bannerWrapperStyle, backdropStyle } from './HeroSectionStyles'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useGetData from '../../../hooks/useGetData'

export const HeroSection = ({categoryName}) => {
  // const [classData, setClassData] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [errorState, setErrorState] = useState(false)

  // useEffect(() => {
  //   setErrorState(false)
  //   setLoading(true)
  //   axios.get(`http://52.237.194.35:2024/api/Type/GetTypeByName?name=${categoryName}`)
  //   .then((response) => {
  //     // handle success
  //     //console.log(response.data)
  //     setClassData(response.data)
  //     setLoading(false)
  //   })
  //   .catch((error) => {
  //     // handle error
  //     //console.log(error);
  //     setLoading(false)
  //     setErrorState(true)
  //   })
  
  // }, [])

  const url = `/Type/GetTypeByName?name=${categoryName}`  
  const { data: classData, loading, errorState, getData } = useGetData()

  useEffect(() => {
      getData(url)
  }, [])
  
  const bannerStyle = {
    height: '334px',
    backgroundImage: `url("data:image/jpeg;base64,${classData.image}")`,
    backgroundSize: 'cover',
    backgroundPosition: '0 20%'
  }

  const handleError = 
  (
    <Box sx={wrapperStyle} minHeight={'334px'}>
      <Alert variant="filled" severity="error">
        Terjadi kesalahan pada server, mohon muat ulang halaman beberapa saat lagi
      </Alert>
    </Box>
  )

  const handleSuccess =
  (
    <Box sx={wrapperStyle} minHeight={'334px'}>
      <Box sx={bannerWrapperStyle}>
        <Backdrop sx={backdropStyle} open={loading} >
            <CircularProgress color="primary"/>
        </Backdrop>
        <Box sx={bannerStyle}/>
      </Box>
  
      <Stack direction='column' gap='16px' paddingInline={{xs: '30px',sm:'80px',md:'120px'}} paddingBlock='80px'>
          <Typography variant='h4' sx={titleStyle}>
              {classData.type_name}
          </Typography>
          <Typography variant='body1' sx={bodyStyle}>
              {classData.description}
          </Typography>
      </Stack>
    </Box>
  )

  if(errorState) return handleError
  else return handleSuccess
}
