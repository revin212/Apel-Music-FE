import React from 'react'
import { HeroSection } from '../../components/CategoryClassList/HeroSection/HeroSection'
import { Box } from '@mui/material'
import { ClassListSection } from '../../components/CategoryClassList/ClassListSection/ClassListSection'
import {useParams} from 'react-router-dom'
const CategoryClassList = () => {
  const { id } = useParams()
  return (
    <Box>
      <HeroSection id={id} />
      <ClassListSection id={id} />
    </Box>
  )
}

export default CategoryClassList