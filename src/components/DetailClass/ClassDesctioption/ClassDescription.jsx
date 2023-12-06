import { Stack, Typography, Button, Alert } from '@mui/material'
import { useState, useEffect } from 'react'
import { bodyStyle, categoryStyle, classNameStyle, imageStyle, imageWrapperStyle, priceStyle, titleStyle } from './ClassDescriptionStyles'
import { MuiSelect } from './MuiSelect'
import { SkeletonCourseDetail } from '../../Skeleton/SkeletonCourseDetail'
import { SkeletonDescription } from '../../Skeleton/SkeletonDescription'
import useGetData from '../../../hooks/useGetData'

export const ClassDescription = ({id, setCategoryIdState}) => {
    const [jadwal, setJadwal] = useState('');
    const url = `/MsCourse/GetDetail?id=${id}`
    const { data: classData, loading, errorState, getData } = useGetData()

    useEffect(() => {
        getData(url)
    }, [id])

    useEffect(() => {
        setCategoryIdState(classData.categoryId)
    }, [classData])

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
                <img src={classData.image?`${import.meta.env.VITE_BASE_URL}/${classData.image}`:''} alt={classData?.name} style={imageStyle} />
            </Stack>
            <Stack direction='column' gap='60px' flexGrow={1}>
                <Stack direction='column' gap='16px'>
                    <Typography variant='body1' sx={categoryStyle}>
                        {classData?.categoryName}
                    </Typography>
                    <Typography variant='h4' sx={classNameStyle}>
                        {classData?.name}
                    </Typography>
                    <Typography variant='subtitle1' sx={priceStyle}>
                        IDR {new Intl.NumberFormat(["ban", "id"]).format(classData?.price)}
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
                {classData?.description}
            </Typography>
            </>}
        </Stack></>}
    </Stack>
  )
}
