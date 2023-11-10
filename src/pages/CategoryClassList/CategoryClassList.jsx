import React from 'react'
import { HeroSection } from '../../components/CategoryClassList/HeroSection/HeroSection'
import { Box } from '@mui/material'
import { ClassListSection } from '../../components/CategoryClassList/ClassListSection/ClassListSection'

const CategoryClassList = () => {
  return (
    <Box>
      <HeroSection />
      <ClassListSection categoryName={'drum'} />
    </Box>
  )
}

export default CategoryClassList