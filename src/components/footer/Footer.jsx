import { Avatar, Box, Stack, Typography } from '@mui/material'
import { wrapperStyle, titleStyle, bodyStyle, listWrapperStyle } from './FooterStyles'
import { Link } from 'react-router-dom'
import './Footer.css'
import { Instagram, LocalPhone, MailOutline, Telegram, YouTube } from '@mui/icons-material'
import useGetData from '../../hooks/useGetData'
import { useEffect, useState } from 'react'


export const Footer = () => {
  const [categoryColumns, setCategoryColumns] = useState([])
  const url = '/MsCategory/GetShortList'
    const { data: categoryData, loading, errorState, getData } = useGetData()

    useEffect(() => {
        getData(url)
    }, [])

    useEffect(() => {
      setCategoryColumns(()=>{
        let result = []
        let columns = Math.ceil( categoryData.length / 5 );
        for(let i=0; i < columns; i++){
          result[i] = categoryData.slice(i*5, (i+1)*5)
        }
        return result
      })
  }, [setCategoryColumns, categoryData])

  return (
    <Box sx={wrapperStyle}>
      <Stack direction='column' gap='8px'>
        <Typography variant='h4' sx={titleStyle}>
          Tentang
        </Typography>
        <Typography variant='body1' sx={bodyStyle}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Typography>
      </Stack>
      <Stack direction='column' gap='14px'>
        <Typography variant='h4' sx={titleStyle}>
          Produk
        </Typography>
        <Stack direction='row' gap='8px' justifyContent={'start'}>
          {categoryColumns?.map((column, index)=>{
            return(
              <ul key={`category-column-${index}`} style={listWrapperStyle}>
                {column?.map(category=>{
                  return(
                    <li key={category.id}><Link to={`/category/${category.id}`} className='link-footer'>{category.name}</Link></li>
                  )
                })}
              </ul>
            )
          })}
        </Stack>
      </Stack>
      <Stack direction='column' gap='16px'>
        <Stack direction='column' gap='10px'>
          <Typography variant='h4' sx={titleStyle}>
            Alamat
          </Typography>
          <Typography variant='body1' sx={bodyStyle}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
          </Typography>
        </Stack>
        <Stack direction='column' gap='8px'>
          <Typography variant='h4' sx={titleStyle}>
            Kontak
          </Typography>
          <Stack direction='row' gap='16px' justifyContent={{xs:'center', md:'start'}}>
            <Link to='#'>
            <Avatar sx={{backgroundColor:'secondary.main'}} >
              <LocalPhone color='primary' />
            </Avatar>
            </Link>
            <Link to='#'>
            <Avatar sx={{backgroundColor:'secondary.main'}} >
              <Instagram color='primary' />
            </Avatar>
            </Link>
            <Link to='#'>
            <Avatar sx={{backgroundColor:'secondary.main'}} >
              <YouTube color='primary' />
            </Avatar>
            </Link>
            <Link to='#'>
            <Avatar sx={{backgroundColor:'secondary.main'}} >
              <Telegram color='primary' />
            </Avatar>
            </Link>
            <Link to='#'>
            <Avatar sx={{backgroundColor:'secondary.main'}} >
              <MailOutline color='primary' />
            </Avatar>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
