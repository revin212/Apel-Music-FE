import { Stack, Typography, Button, Alert } from '@mui/material'
import React, { useState } from 'react'
import { bodyStyle, categoryStyle, classNameStyle, imageStyle, imageWrapperStyle, priceStyle, titleStyle } from './ClassDescriptionStyles'
import { MuiSelect } from './MuiSelect'
import { SkeletonCourseDetail } from '../../Skeleton/SkeletonCourseDetail'
import { SkeletonDescription } from '../../Skeleton/SkeletonDescription'

export const dummyData = {
    id:'1',
    category: 'Drum',
    name: 'Kursus Drummer Special Coach (Eno Netral)',
    price: 8500000,
    image: '/images/Rectangle 12-7.png',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit es ullamcorper lore m dictates eum erat inter partur adip tempor cum soluta ut aliquet consequ velit sed diam nonumy euismod tempor cum sol. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero hic odit repellat, eos dolorum tempore necessitatibus ipsum adipisci illo veniam voluptate, corrupti, expedita voluptatem tempora delectus labore reprehenderit nostrum.',
}

export const ClassDescription = () => {
    const [jadwal, setJadwal] = useState('');
    const errorState = false;
    const loading = false;

  return (
    <Stack direction='column' gap='40px' paddingTop='40px' paddingBottom='60px' paddingInline={{xs: '30px',sm:'50px',md:'70px'}}>
        {errorState && 
        <Alert variant="outlined" severity="error" sx={{color:'warning.main'}}>
                Terjadi kesalahan pada server, mohon muat ulang halaman beberapa saat lagi
        </Alert>}
        {!errorState && 
        <>
        {loading && <SkeletonCourseDetail />}
        {!loading && 
        <Stack direction={{xs:'column',md:'row'}} gap='40px'>
            <Stack direction='row' justifyContent={{xs:'center',md:'auto'}} sx={imageWrapperStyle}>
                <img src={dummyData?.image} alt={dummyData?.name} style={imageStyle} />
            </Stack>
            <Stack direction='column' gap='60px'>
                <Stack direction='column' gap='16px'>
                    <Typography variant='body1' sx={categoryStyle}>
                        {dummyData?.category}
                    </Typography>
                    <Typography variant='h4' sx={classNameStyle}>
                        {dummyData?.name}
                    </Typography>
                    <Typography variant='subtitle1' sx={priceStyle}>
                        IDR {new Intl.NumberFormat(["ban", "id"]).format(dummyData?.price)}
                    </Typography>
                    <MuiSelect jadwal={jadwal} setJadwal={setJadwal} />
                </Stack>
                 
                <Stack direction='row' gap='16px'>
                    <Button variant='outlined' sx={{maxWidth:'233px', width:'100%'}}>Masukkan Keranjang</Button>
                    <Button variant='contained' sx={{maxWidth:'233px', width:'100%'}}>Beli Sekarang</Button>
                </Stack>
            </Stack>
        </Stack>}
        <Stack gap='16px'>
            {loading && <SkeletonDescription />}
            {!loading && 
            <>
            <Typography variant='h4' sx={titleStyle}>
                Deskripsi
            </Typography>
            <Typography variant='body1' sx={bodyStyle}>
                {dummyData?.description}
            </Typography>
            </>}
        </Stack></>}
    </Stack>
  )
}
