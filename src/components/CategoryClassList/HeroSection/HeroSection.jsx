import { Box, Stack, Typography, Backdrop, CircularProgress } from '@mui/material'
import { bodyStyle, titleStyle, wrapperStyle, bannerWrapperStyle, backdropStyle } from './HeroSectionStyles'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const HeroSection = ({categoryName}) => {
  const [classData, setClassData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`http://52.237.194.35:2024/api/Type/GetTypeByName?name=${categoryName}`)
    .then((response) => {
      // handle success
      //console.log(response.data)
      setClassData(response.data)
      setLoading(false)
    })
    .catch((error) => {
      // handle error
      console.log(error);
      setLoading(false)
    })

  
  }, [])
  
  const bannerStyle = {
    height: '334px',
    backgroundImage: `url("data:image/jpeg;base64,${classData.image}")`,
    backgroundSize: 'cover',
    backgroundPosition: '0 20%'
  }

  return (
    
    <Box sx={wrapperStyle} minHeight={'334px'}>
          <Box sx={bannerWrapperStyle}>
              <Backdrop sx={backdropStyle} open={loading} >
                  <CircularProgress color="primary"/>
              </Backdrop>
          <Box sx={bannerStyle}></Box>
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
}
