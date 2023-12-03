import { Box, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonCourse = () => {
  return (
    <Box>
        <Skeleton variant="rounded" width={'auto'} height={200} sx={{ bgcolor:'grey.400' }} />
        <Skeleton variant="text" sx={{ fontSize: '16px', bgcolor:'grey.400',  marginTop:'8px', width:"80px"  }} />
        <Skeleton variant="text" sx={{ fontSize: '18px', bgcolor:'grey.400' }} />
        <Skeleton variant="text" sx={{ fontSize: '18px', bgcolor:'grey.400', marginTop:'16px', width:"150px"}} />
    </Box>
  )
}
