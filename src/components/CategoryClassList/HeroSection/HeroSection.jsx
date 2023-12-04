import { Box, Stack, Typography, Backdrop, CircularProgress, Alert } from '@mui/material'
import { bodyStyle, titleStyle, wrapperStyle, bannerWrapperStyle, backdropStyle } from './HeroSectionStyles'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useGetData from '../../../hooks/useGetData'
import { SkeletonHeaderImage } from '../../Skeleton/SkeletonHeaderImage'
import { SkeletonDescription } from '../../Skeleton/SkeletonDescription'
import { useParams } from 'react-router-dom'

export const HeroSection = ({id}) => {
  const url = `/MsCategory/GetCategoryDetail?id=${id}`
  const { data: classData, loading, errorState, getData } = useGetData()

  useEffect(() => {
      getData(url)
  }, [])
  
  const bannerStyle = {
    height: '334px',
    backgroundImage: classData.headerImage ? `url("https://localhost:7201/${classData.headerImage.replace("\r\n", "")}")` : `url("https://placehold.co/1280x334")`,
    backgroundSize: 'cover',
    backgroundPosition: '0 20%'
  }

  const handleError = 
  (
    <Box sx={wrapperStyle} minHeight={'334px'}>
      <Alert variant="outlined" severity="error" sx={{color:'warning.main'}}>
        Terjadi kesalahan pada server, mohon muat ulang halaman beberapa saat lagi
      </Alert>
    </Box>
  )

  const handleSuccess =
  (
    <Box sx={wrapperStyle} minHeight={'334px'}>
      <Box sx={bannerWrapperStyle}>
        {loading && <SkeletonHeaderImage />}
        <Box sx={bannerStyle}/>
      </Box>
  
      <Stack direction='column' gap='16px' paddingInline={{xs: '30px',sm:'80px',md:'120px'}} paddingBlock='80px'>
          {loading && <SkeletonDescription />}
          <Typography variant='h4' sx={titleStyle}>
              {classData.title}
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
