import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { categoryStyle, imageStyle, wrapperStyle, classNameStyle, priceStyle, titleStyle } from './ClassListSectionStyles'
import { dummyData } from '../../../utils/dummyData'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'


export const ClassListSection = ({categoryName}) => {
    //const { id } = categoryName
    const [classData, setClassData] = useState([])
    useEffect(() => {
        axios.get(`http://52.237.194.35:2024/api/Menu/GetMenuByTypeName?type_name=${categoryName}`)
        .then((response) => {
          // handle success
          //console.log(response.data)
          setClassData(response.data)
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
    
      
    }, [])
    
  return (
    <Box sx={wrapperStyle}>
        <Typography variant='h2' sx={titleStyle}>
            Kelas yang tersedia
        </Typography>
        <Grid container columnSpacing={3} rowSpacing={7.5}>
            {classData.map((item)=>{
                return (
                    <Grid xs={12} md={4} key={item.id}>
                        <Link to={`/class/${item.id_menu}`} underline='none' style={{textDecoration:'none'}}>
                        <Stack direction='column' gap='16px'>
                            <img src={`data:image/jpeg;base64,${item.image}`} width="350" height="234" alt={item.name} style={imageStyle} />
                            <Box padding='0px, 8px, 0px, 8px'>
                                <Box minHeight='113px' maxWidth='292px'>
                                    <Typography variant='body1' sx={categoryStyle}>
                                        {categoryName}
                                    </Typography>
                                    <Typography variant='h4' sx={classNameStyle}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant='subtitle1' sx={priceStyle}>
                                        IDR {new Intl.NumberFormat(["ban", "id"]).format(item.price)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    </Box>
  )
}
