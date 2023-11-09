import React from 'react'
import { HeroSection } from '../../components/Home/HeroSection/HeroSection'
import { BenefitSection } from '../../components/Home/BenefitSection/BenefitSection'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <HeroSection />
      {/* Class list */}
      {/* Category list */}
      <BenefitSection />
    </Box>
  )
}

export default Home