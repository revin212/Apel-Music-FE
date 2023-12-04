import { Stack, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonMyClass = () => {
  return (
    <Stack direction={{xs:'column',md:'row'}} gap='40px' mb="24px">
        <Skeleton variant="rounded" width={200} height={133} sx={{ bgcolor:'grey.400' }} />
        <Stack>
            <Skeleton variant="text" sx={{ fontSize: '16px', bgcolor:'grey.400', width:"80px" }} />
            <Skeleton variant="text" sx={{ fontSize: '24px', bgcolor:'grey.400', width:"300px" }} />
            <Skeleton variant="text" sx={{ fontSize: '16px', bgcolor:'grey.400', width:"200px", mt:"16px"}} />
        </Stack>
    </Stack>
  )
}
