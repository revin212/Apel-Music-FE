import { Delete, DeleteForever } from "@mui/icons-material"
import { Box, Checkbox, Container, FormControlLabel, Stack, Input, Typography, Button } from "@mui/material"
import { useState, useEffect } from "react"
import { ModalPaymentMethod } from "../../components/ModalPaymentMethod/ModalPaymentMethod"
import { dateToString } from "../../utils/DateUtils"
import { cartItemStyle, classDescStyle, containerStyle, deleteBtnStyle, footerStyle, imageStyle, imageWrapperStyle, selectAllStyle, totalBiayaStyle, totalBiayaWrapperStyle } from "./checkoutStyles"
import { dummyDataCheckout } from "../../utils/dummyDataCheckout"

const Checkout = (/*{ data }*/) => {
    const [cart, setCart] = useState(dummyDataCheckout)
    const [openModal, setOpenModal] = useState(false)
    const [total, setTotal] = useState(0)
    const [allChecked, setAllChecked] = useState(false)

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
                {cart.map((e, i)=>{
                    return(
                        <Stack direction='row' justifyContent={'space-between'} alignItems='center'  key={i} sx={cartItemStyle}>
                            <Stack direction='row' gap='24px' alignItems='center'>
                                <Stack height='100%'>
                                    <Checkbox checked={e.selected} onChange={handleSelect} id={`${i}`} />
                                </Stack>
                                <Stack direction={{xs:"column", md:"row"}} gap="24px" >
                                <Stack sx={imageWrapperStyle}>
                                    <img src={e.thumbnail} style={imageStyle} />
                                </Stack>
                                <Stack>
                                    <Box sx={classDescStyle}>
                                        <Typography fontWeight={400} fontSize={16} sx={{color:'text.gray3'}}>{e.type}</Typography>
                                        <Typography fontWeight={600} fontSize={24} sx={{color:'text.gray1'}}>{e.title}</Typography>
                                        <Typography fontWeight={400} fontSize={16} my='4px' sx={{color:'text.gray2'}}>Jadwal : {dateToString(e.jadwal)}</Typography>
                                        <Typography fontWeight={600} fontSize={20} sx={{color: 'secondary.main'}}>
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
            <Box sx={footerStyle}>
                <Box sx={totalBiayaWrapperStyle}>
                    <Typography>Total biaya</Typography> 
                    <Typography sx={totalBiayaStyle}>{total > 0 ? "IDR " + new Intl.NumberFormat(["ban", "id"]).format(total) : ""}</Typography>
                </Box>
                <Button variant="contained" onClick={handleOpenModal} disabled={total == 0}>Bayar Sekarang</Button>
            </Box>
            <ModalPaymentMethod setModalOpen={setOpenModal} modalOpen={openModal}/>
        </>
    )
}

export default Checkout