import { Box, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonDescription = () => {
  return (
    <Box>
        <Skeleton variant="text" sx={{ fontSize: '24px', bgcolor:'grey.400', width:"120px", mb:'16px'  }} />
        <Skeleton variant="rounded" sx={{ fontSize: '16px', bgcolor:'grey.400', height:"170px" }} />
    </Box>
  )
}
