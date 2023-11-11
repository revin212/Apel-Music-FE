import { Box, Stack, Typography, Card } from '@mui/material'
import { bodyStyle, titleStyle, wrapperStyle } from './HeroSectionStyles'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const HeroSection = ({categoryName}) => {
  const [classData, setClassData] = useState([])
  useEffect(() => {
    axios.get(`http://52.237.194.35:2024/api/Type/GetTypeByName?name=${categoryName}`)
    .then((response) => {
      // handle success
      //console.log(response.data)
      setClassData(response.data)
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })

  
}, [])
  return (
    
    <Box sx={wrapperStyle} >
        <img src={`data:image/jpeg;base64,${classData.image}`} alt="" style={{width:'100%', height:'auto'}} />
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
