import React from 'react'
import { HeroSection } from '../../components/Home/HeroSection/HeroSection'
import { BenefitSection } from '../../components/Home/BenefitSection/BenefitSection'
import { Box } from '@mui/material'
import { ClassListSection } from '../../components/Home/ClassListSection/ClassListSection'
import { CategoryListSection } from '../../components/Home/CategoryListSection/CategoryListSection'

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <ClassListSection />
      <CategoryListSection />
      <BenefitSection />
    </Box>
  )
}

export default Home