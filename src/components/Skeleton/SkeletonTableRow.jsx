import { CircularProgress, Skeleton, Stack } from '@mui/material'
import React from 'react'

export const SkeletonTableRow = () => {
  return (
    <Stack minHeight={'200px'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
        <CircularProgress />
    </Stack>
  )
}
