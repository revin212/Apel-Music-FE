import { Box, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonHeaderImage = () => {
  return (
    <Box>
        <Skeleton variant="rectangular" width={'100%'} height={334} sx={{ bgcolor:'grey.400' }} />
    </Box>
  )
}
