import { Stack, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonEmailConfirm = () => {
  return (
    <Stack alignItems={'center'} justifyContent={'center'}  >
        <Skeleton variant="rounded" width={250} height={250} sx={{ bgcolor:'grey.400' }} />
        <Skeleton variant="text" sx={{ fontSize: '24px', bgcolor:'grey.400', marginTop:'32px', width:"160px"  }} />
        <Skeleton variant="text" sx={{ fontSize: '16px', bgcolor:'grey.400', marginTop:'8px', width:"250px" }} />
        <Skeleton variant="rounded" width={170} height={50} sx={{ bgcolor:'grey.400', marginTop:'16px' }} />
    </Stack>
  )
}
