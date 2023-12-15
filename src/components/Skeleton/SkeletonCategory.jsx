import { Box, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonCategory = () => {
  return (
    <Box>
        <Skeleton variant="rounded" width={100} height={67} sx={{ bgcolor:'grey.400' }} />
        <Skeleton variant="text" sx={{ fontSize: '16px', bgcolor:'grey.400',  marginTop:'8px'  }} />
    </Box>
  )
}
