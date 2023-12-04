import { Stack, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonCourseDetail = () => {
  return (
    <Stack direction={{xs:'column',md:'row'}} gap='40px' >
        <Skeleton variant="rounded" width={400} height={250} sx={{ bgcolor:'grey.400' }} />
        <Stack flexGrow={1}>
            <Skeleton variant="text" sx={{ fontSize: '18px', bgcolor:'grey.400', width:"80px" }} />
            <Skeleton variant="text" sx={{ fontSize: '25px', bgcolor:'grey.400', width:"300px" }} />
            <Skeleton variant="text" sx={{ fontSize: '25px', bgcolor:'grey.400', width:"150px"}} />
            <Skeleton variant="rounded" width={200} height={30} sx={{ bgcolor:'grey.400', mt:'16px' }} />
            <Stack direction={'row'} gap='16px' sx={{mt:'48px'}}>
                <Skeleton variant="rounded" height={40} sx={{ bgcolor:'grey.400', maxWidth:'233px', width:'100%'}} />
                <Skeleton variant="rounded" height={40} sx={{ bgcolor:'grey.400', maxWidth:'233px', width:'100%'}} />
            </Stack>
        </Stack>
    </Stack>
  )
}
