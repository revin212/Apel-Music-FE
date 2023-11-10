import { Box } from '@mui/material'
import React from 'react'
import { ClassDescription } from '../../components/DetailClass/ClassDesctioption/ClassDescription'
import { RecommendedClasses } from '../../components/DetailClass/RecommendedClasses/RecommendedClasses'

export const DetailClass = () => {
  return (
    <Box>
        <ClassDescription />
        <RecommendedClasses />
    </Box>
  )
}
