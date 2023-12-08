import { DeleteForever } from "@mui/icons-material"
import { Box, Checkbox, Container, Stack, Typography, Button, Alert } from "@mui/material"
import { useState, useEffect, useContext } from "react"
import { ModalPaymentMethod } from "../../components/ModalPaymentMethod/ModalPaymentMethod"
import { dateToString } from "../../utils/DateUtils"
import { cartItemStyle, classDescStyle, containerStyle, deleteBtnStyle, footerStyle, footerWrapperStyle, imageStyle, imageWrapperStyle, selectAllStyle, totalBiayaStyle, totalBiayaWrapperStyle } from "./checkoutStyles"
import { SkeletonMyClass } from "../../components/Skeleton/SkeletonMyClass"
import { handleDelete, handleSelect, handleSelectAll, isSelectedAll } from "./checkoutUtils"
import { getCookie } from "../../utils/authUtils"
import useGetData from "../../hooks/useGetData"
import usePostData from "../../hooks/usePostData"
import { AuthContext } from "../../components/AuthContext/AuthContext"

const Checkout = () => {
    const [openModal, setOpenModal] = useState(false)
    const [userId, setUserId] = useState(getCookie('userId'))
    const [cartDataChange, setCartDataChange] = useState(false)
    const [allChecked, setAllChecked] = useState(false)

    const {data: cartList, setData: setCartList,getData: getCartListData, loading: getCartListLoading, errorState: getCartListError} = useGetData();
    const {data: cartInfo, getData: getCartInfoData, loading: getCartInfoLoading, errorState: getCarInfoError} = useGetData();
    const {postData, isLoading: postDataLoading, error: postError} = usePostData();
    const {token} = useContext(AuthContext)

    useEffect(()=>{
        getCartInfoData('/TsOrder/GetCartInfo?userid='+ userId, { 'Authorization': `Bearer ${token}` })
    },[cartDataChange, postError, token])

    useEffect(()=>{
        getCartListData('/TsOrder/GetCart?userid='+ userId, { 'Authorization': `Bearer ${token}` })
    },[postError, token])

    useEffect(()=>{
        if(isSelectedAll(cartList))
            setAllChecked(true)
        else setAllChecked(false)
    },[cartList])

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    return(
        <>
            <Container sx={containerStyle}>
                <Box sx={selectAllStyle}>
                    <Checkbox name={'select-all'} disabled={postDataLoading} checked={allChecked} onChange={()=>handleSelectAll(cartList, setCartList, postData, userId, allChecked, setAllChecked,setCartDataChange, token)} /> Pilih Semua
                </Box>
                {getCartListError && 
                <Alert variant="outlined" severity="error" sx={{color:'warning.main', my:'48px', mx:'32px'}}>
                    Terjadi kesalahan pada server, mohon muat ulang halaman beberapa saat lagi
                </Alert>}
                {getCartListLoading && [...Array(3)].map((item, i)=>{
                    return(
                        <Box key={i} paddingLeft={{xs:0, md:7}} paddingTop={3}>
                            <SkeletonMyClass />
                        </Box>
                    )
                })}
                {!getCartListError && !getCartListLoading && 
                cartList?.map((item, i)=>{
                    return(
                        <Stack direction='row' justifyContent={{xs:'center',md:'space-between'}} alignItems={{xs:'start', md:'center'}} key={item.id} sx={cartItemStyle}>
                            <Stack direction='row' gap={{xs:'8px', md:'24px'}} alignItems={{xs:'start', md:'center'}} sx={{width: '100%', maxWidth:{xs:'250px', sm:'400px', md:'none'}}}>
                                <Stack height='100%'>
                                    <Checkbox disabled={postDataLoading} checked={item.isSelected} onChange={()=>handleSelect(cartList, setCartList, item.id, postData, userId, item.isSelected, setCartDataChange, token)} id={`${item.id}`} />
                                </Stack>
                                <Stack direction={{xs:"column", md:"row"}} gap="24px" alignItems={'start'} flexGrow={1} >
                                <Stack alignItems={'center'} width={{xs:'100%', md:'auto'}}>
                                    <Box sx={imageWrapperStyle}>
                                        <img src={`${import.meta.env.VITE_BASE_URL}/${item.image}`} style={imageStyle} />
                                    </Box>
                                </Stack>
                                <Stack>
                                    <Box sx={classDescStyle}>
                                        <Typography fontWeight={400} fontSize={{xs:8,md:16}} sx={{color:'text.gray3'}}>{item.categoryName}</Typography>
                                        <Typography fontWeight={600} fontSize={{xs:16,md:24}} sx={{color:'text.gray1'}}>{item.courseName}</Typography>
                                        <Typography fontWeight={400} fontSize={{xs:12,md:16}} my='4px' sx={{color:'text.gray2'}}>Jadwal : {dateToString(new Date(item.jadwal))}</Typography>
                                        <Typography fontWeight={600} fontSize={{xs:14,md:20}} sx={{color: 'secondary.main'}}>
                                            IDR {new Intl.NumberFormat(["ban", "id"]).format(item.harga)}
                                        </Typography>
                                    </Box>
                                </Stack>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Button disabled={postDataLoading} onClick={()=>handleDelete(item.id, postData, setCartDataChange, cartList, setCartList, token)} id={item.id} variant="text" sx={deleteBtnStyle}>
                                    <DeleteForever id={item.id} sx={{color: 'warning.main'}}/>
                                    <Typography id={item.id} display={{xs:"none", md:"block"}}>Delete</Typography>
                                </Button>
                            </Stack>
                        </Stack>
                    )
                })}
            </Container>
            <Box sx={footerWrapperStyle}>
                <Box sx={footerStyle}>
                <Box sx={totalBiayaWrapperStyle}>
                    <Typography fontSize={{xs:'12px',md:'18px'}}>Total biaya</Typography> 
                    <Typography sx={totalBiayaStyle}>{cartInfo?.totalHarga > 0 ? "IDR " + new Intl.NumberFormat(["ban", "id"]).format(cartInfo?.totalHarga) : "IDR 0"}</Typography>
                </Box>
                <Button variant="contained" sx={{fontSize:{xs:'10px',md:'16px'}}} onClick={handleOpenModal} disabled={cartInfo?.totalHarga == 0}>Bayar Sekarang</Button>
                </Box>
            </Box>
            <ModalPaymentMethod setModalOpen={setOpenModal} modalOpen={openModal} userId={cartInfo?.userId} cartId={cartInfo?.id} />
        </>
    )
}

export default Checkout