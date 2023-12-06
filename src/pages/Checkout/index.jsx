import { Delete, DeleteForever } from "@mui/icons-material"
import { Box, Checkbox, Container, FormControlLabel, Stack, Input, Typography, Button, Alert } from "@mui/material"
import { useState, useEffect } from "react"
import { ModalPaymentMethod } from "../../components/ModalPaymentMethod/ModalPaymentMethod"
import { dateToString } from "../../utils/DateUtils"
import { cartItemStyle, classDescStyle, containerStyle, deleteBtnStyle, footerStyle, footerWrapperStyle, imageStyle, imageWrapperStyle, selectAllStyle, totalBiayaStyle, totalBiayaWrapperStyle } from "./checkoutStyles"
import { dummyDataCheckout } from "../../utils/dummyDataCheckout"
import { SkeletonMyClass } from "../../components/Skeleton/SkeletonMyClass"

const Checkout = (/*{ data }*/) => {
    const [cart, setCart] = useState(dummyDataCheckout)
    const [openModal, setOpenModal] = useState(false)
    const [total, setTotal] = useState(0)
    const [allChecked, setAllChecked] = useState(false)
    const loading = false
    const errorState = false

    const handleSelect = (e) => {
        setCart(cart.map((item, index)=>{
            return index == e.target.id ? {...item, selected: !item.selected} : item
        }))
    }

    const isSelectedAll = () => {
        for (let i=0; i<cart.length; i++) {
            if(!cart[i].selected) return false
        }
        return true
    }

    const handleSelectAll = () => {
        if(!isSelectedAll()) {
            setCart(cart.map((item, index)=>{
                return {...item, selected: true}
            }))
            setAllChecked(true)
            return
        } else {
            setCart(cart.map((item, index)=>{
                return {...item, selected: false}
            }))
            setAllChecked(false)
        }
    }

    const handleDelete = (e) => {
        const deleteTarget = e.target.id
        setCart(cart.filter(item=>{
            if(item.id == deleteTarget){
                return false
            }
            return true
        }))
    }

    useEffect(() => {
        setTotal(()=>{
            let sum = 0
            cart.forEach((e)=>{
                sum += e.price
                if(!e.selected) sum -= e.price
            })
            return sum
        })
    }, [cart]);

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    return(
        <>
            <Container sx={containerStyle}>
                <Box sx={selectAllStyle}>
                    <Checkbox onChange={handleSelectAll} checked={allChecked} /> Pilih Semua
                </Box>
                {errorState && 
                <Alert variant="outlined" severity="error" sx={{color:'warning.main', my:'48px', mx:'32px'}}>
                    Terjadi kesalahan pada server, mohon muat ulang halaman beberapa saat lagi
                </Alert>}
                {loading && [...Array(3)].map((item, i)=>{
                    return(
                        <SkeletonMyClass key={i} />
                    )
                })}
                {!errorState && !loading && 
                cart.map((e, i)=>{
                    return(
                        <Stack direction='row' justifyContent={{xs:'center',md:'space-between'}} alignItems={{xs:'start', md:'center'}} key={i} sx={cartItemStyle}>
                            <Stack direction='row' gap={{xs:'8px', md:'24px'}} alignItems={{xs:'start', md:'center'}} sx={{width: '100%', maxWidth:{xs:'250px', sm:'400px', md:'none'}}}>
                                <Stack height='100%'>
                                    <Checkbox checked={e.selected} onChange={handleSelect} id={`${i}`} />
                                </Stack>
                                <Stack direction={{xs:"column", md:"row"}} gap="24px" alignItems={'start'} flexGrow={1} >
                                <Stack alignItems={'center'} width={{xs:'100%', md:'auto'}}>
                                    <Box sx={imageWrapperStyle}>
                                        <img src={e.thumbnail} style={imageStyle} />
                                    </Box>
                                </Stack>
                                <Stack>
                                    <Box sx={classDescStyle}>
                                        <Typography fontWeight={400} fontSize={{xs:8,md:16}} sx={{color:'text.gray3'}}>{e.type}</Typography>
                                        <Typography fontWeight={600} fontSize={{xs:16,md:24}} sx={{color:'text.gray1'}}>{e.title}</Typography>
                                        <Typography fontWeight={400} fontSize={{xs:12,md:16}} my='4px' sx={{color:'text.gray2'}}>Jadwal : {dateToString(e.jadwal)}</Typography>
                                        <Typography fontWeight={600} fontSize={{xs:14,md:20}} sx={{color: 'secondary.main'}}>
                                            IDR {new Intl.NumberFormat(["ban", "id"]).format(e.price)}
                                        </Typography>
                                    </Box>
                                </Stack>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Button onClick={(e)=>handleDelete(e)} id={e.id} variant="text" sx={deleteBtnStyle}>
                                    <DeleteForever id={e.id} sx={{color: 'warning.main'}}/>
                                    <Typography id={e.id} display={{xs:"none", md:"block"}}>Delete</Typography>
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
                    <Typography sx={totalBiayaStyle}>{total > 0 ? "IDR " + new Intl.NumberFormat(["ban", "id"]).format(total) : ""}</Typography>
                </Box>
                <Button variant="contained" sx={{fontSize:{xs:'10px',md:'16px'}}} onClick={handleOpenModal} disabled={total == 0}>Bayar Sekarang</Button>
                </Box>
            </Box>
            <ModalPaymentMethod setModalOpen={setOpenModal} modalOpen={openModal}/>
        </>
    )
}

export default Checkout