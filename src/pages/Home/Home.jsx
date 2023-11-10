import React, { useEffect, useState } from 'react'
import { HeroSection } from '../../components/Home/HeroSection/HeroSection'
import { BenefitSection } from '../../components/Home/BenefitSection/BenefitSection'
import { Box } from '@mui/material'
import { ClassListSection } from '../../components/Home/ClassListSection/ClassListSection'
import { CategoryListSection } from '../../components/Home/CategoryListSection/CategoryListSection'
import axios from 'axios'

const Home = () => {
  const [classData, setClassData] = useState([])
  const [categoryData, setCategoryData] = useState([])

  useEffect(()=> {
    axios.get('http://52.237.194.35:2024/api/Menu/GetMenuLimit')
      .then((response) => {
        // handle success
        setClassData(response.data)
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })

    axios.get('http://52.237.194.35:2024/api/Type/GetActiveType')
    .then((response) => {
      // handle success
      setCategoryData(response.data)
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  }, [])

  return (
    <Box>
      <HeroSection />
      <ClassListSection classData={classData} />
      <CategoryListSection categoryData={categoryData} />
      <BenefitSection />
    </Box>
  )
}

export default Home