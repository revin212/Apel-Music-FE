import { Box } from '@mui/material'
import { useState } from 'react'
import { ClassDescription } from '../../components/DetailClass/ClassDescription/ClassDescription'
import { RecommendedClasses } from '../../components/DetailClass/RecommendedClasses/RecommendedClasses'
import { useParams } from 'react-router-dom'

export const DetailClass = () => {
  const { id } = useParams();
  const [categoryIdState, setCategoryIdState] = useState('');
  return (
    <Box>
        <ClassDescription id={id} setCategoryIdState={setCategoryIdState} />
        <RecommendedClasses id={id} categoryIdState={categoryIdState} />
    </Box>
  )
}
