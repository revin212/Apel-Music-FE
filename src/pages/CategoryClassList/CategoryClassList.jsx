import React from 'react'
import { HeroSection } from '../../components/CategoryClassList/HeroSection/HeroSection'
import { Box } from '@mui/material'
import { ClassListSection } from '../../components/CategoryClassList/ClassListSection/ClassListSection'
import {useParams} from 'react-router-dom'
const CategoryClassList = () => {
  const { type_name } = useParams()
  return (
    <Box>
      <HeroSection categoryName={type_name} />
      <ClassListSection categoryName={type_name} />
    </Box>
  )
}

export default CategoryClassList