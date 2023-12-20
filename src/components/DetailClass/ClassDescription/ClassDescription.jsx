import { Stack, Typography, Button, Alert, Box } from '@mui/material'
import { useState, useEffect, useContext } from 'react'
import { bodyStyle, categoryStyle, classNameStyle, imageStyle, imageWrapperStyle, priceStyle, titleStyle } from './ClassDescriptionStyles'
import { MuiSelect } from './MuiSelect'
import { SkeletonCourseDetail } from '../../Skeleton/SkeletonCourseDetail'
import { SkeletonDescription } from '../../Skeleton/SkeletonDescription'
import useGetData from '../../../hooks/useGetData'
import usePostData from '../../../hooks/usePostData'
import { getCookie } from '../../../utils/authUtils'
import { dateToStringJadwal } from '../../../utils/DateUtils'
import { AuthContext } from '../../AuthContext/AuthContext'
import { ModalNavigateLogin } from './ModalNavigateLogin'

export const ClassDescription = ({id, setCategoryIdState}) => {
    const [userId, setUserId] = useState(getCookie('userId'))
    const [jadwal, setJadwal] = useState('');
    const [modalNavigateOpen, setModalNavigateOpen] = useState(false);
    const url = `/MsCourse/GetDetail?id=${id}`
    const { data: classData, loading, errorState, getData } = useGetData()
    const { isLoading: postLoading, error: postError, setError: setPostError, postData, msg } = usePostData()
    const {token} = useContext(AuthContext)

    const handleAddToCart = async (variant) => {
        if(!jadwal){
            setPostError("Tolong pilih jadwal")
            return
        }
        if(!token){
            setPostError("Anda belum login")
            setModalNavigateOpen(true)
            return
        }
        setPostError("")
        await postData(`${import.meta.env.VITE_API_URL}/TsOrderDetail/AddToCart`, variant, false, {
            userId: userId,
            courseId: id,
            jadwal: dateToStringJadwal(new Date(jadwal))
        }, { 'Authorization': `Bearer ${token}` })
    }

    const handleBuyNow = async () => {
        await handleAddToCart('buyNow')
    }

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
                <img src={classData.image?`${import.meta.env.VITE_BASE_URL}${classData.image}?${new Date().getTime()}`:''} alt={classData?.name} style={imageStyle} />
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
                    <Box position={'relative'}>
                        <MuiSelect jadwal={jadwal} setJadwal={setJadwal} />
                        {postError && 
                        <Typography variant="body2" sx={{color:'warning.main', position:'absolute', bottom:'-24px', left:0}}>
                                {postError}
                        </Typography>}
                        {msg && 
                        <Typography variant="body2" sx={{color:'#4dc050', position:'absolute', bottom:'-24px', left:0}}>
                                {msg}
                        </Typography>}
                    </Box>
                </Stack>
                 
                <Stack direction='row' gap='16px'>
                    <Button disabled={postLoading} onClick={()=>handleAddToCart('addToCart')} variant='outlined' sx={{maxWidth:'233px', width:'100%'}}>Masukkan Keranjang</Button>
                    <Button disabled={postLoading} variant='contained' onClick={handleBuyNow} sx={{maxWidth:'233px', width:'100%'}}>Beli Sekarang</Button>
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
        <ModalNavigateLogin modalNavigateOpen={modalNavigateOpen} setModalNavigateOpen={setModalNavigateOpen} />
    </Stack>
  )
}
