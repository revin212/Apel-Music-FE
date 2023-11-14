import { Delete, DeleteForever } from "@mui/icons-material"
import { Box, Checkbox, Container, FormControlLabel, Grid, Input, Typography, Button } from "@mui/material"
import { useState, useEffect } from "react"
import { ModalPaymentMethod } from "../../components/ModalPaymentMethod/ModalPaymentMethod"
import { dateToStringInvoice } from "../../utils/DateUtils"

const Checkout = (/*{ data }*/) => {
    const [cart, setCart] = useState([
        {
            type: 'Drum',
            title: 'Kursus Drummer Special Coach (Eno Netral)',
            jadwal: 'Senin, 25 Juli 2022',
            price: 850000,
            thumbnail: '/images/Rectangle 12-7.png',
            selected: false
        },
        {
            type: 'Biola',
            title: 'Biola Mid-Level Course',
            jadwal: 'Senin, 25 Juli 2022',
            price: 850000,
            thumbnail: '/images/Rectangle 12-7.png',
            selected: false
        },
        {
            type: 'Drum',
            title: 'Kursus Drummer Special Coach (Eno Netral)',
            jadwal: 'Senin, 25 Juli 2022',
            price: 850000,
            thumbnail: '/images/Rectangle 12-7.png',
            selected: false
        },
        {
            type: 'Drum',
            title: 'Kursus Drummer Special Coach (Eno Netral)',
            jadwal: 'Senin, 25 Juli 2022',
            price: 850000,
            thumbnail: '/images/Rectangle 12-7.png',
            selected: false
        }
    ])
    const [openModal, setOpenModal] = useState(false)
    const [total, setTotal] = useState(0)
    const [allChecked, setAllChecked] = useState(false)

    // const selectAll = () => {
    //     if(checked!==null){
    //         checked.forEach((item)=>{
    //             if(!item){
    //                 return false
    //             }
    //         })
    //         return true
    //     } else return false
    // }

    // // const handleSelectAll = () => {
    // //     setChecked(checked.map((item)=>{
    // //         item
    // //     }))
    // // }
    const handleSelect = (e) => {
        // console.log('before' + cart[e.target.id].selected);
        setCart(cart.map((item, index)=>{
            return index == e.target.id ? {...item, selected: !item.selected} : item
        }))
        // cart[e.target.id].selected = !cart[e.target.id].selected;
        // console.log('after' + cart[e.target.id].selected);
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
        const deleteTarget = e.target.id.split(',')
        setCart(cart.filter(item=>{
            if(item.title == deleteTarget[0] && dateToStringInvoice(new Date(item.jadwal)) == deleteTarget[1]){
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
        // console.log(total)
    }, [cart]);

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const formatPrice = (price) => {
        let juta = (Math.floor(price/1000000)).toString()
        let ribu = (Math.floor((price%1000000)/1000)).toString()
        let ratus = ((price%1000000)%1000).toString()
        if (ratus === '0') ratus += '00'
        if (ribu === '0') ribu += '00'
        if (juta === '0') juta = ''
        return (`IDR ${juta!='' ? juta+'.'+ribu+'.'+ratus : ribu+'.'+ratus}`)
    }

    return(
        <>
            <Container sx={{
                px: 0,
                mx: 'auto',
                mt: '40px',
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: '32px',
                    height: '54px',
                    width: '100%',
                    borderBottom: '1px solid',
                    borderColor: 'text.gray4',
                    boxSizing: 'border-box',
                }}>
                    <Checkbox onChange={handleSelectAll} checked={allChecked} /> Pilih Semua
                </Box>
                {cart.map((e, i)=>{
                    return(
                        <Box key={i} sx={{
                            py: '24px',
                            borderBottom: '1px solid'
                        }}>
                            <Grid key={i} direction='row' container gap='24px' alignItems='center'>
                                <Grid item xs={0.5} height='100%'>
                                    <Checkbox checked={e.selected} onChange={handleSelect} id={`${i}`} />
                                </Grid>
                                <Grid item xs={2}>
                                    <img width='200px' height='133px' src={e.thumbnail} />
                                </Grid>
                                <Grid item xs={7}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '4px'
                                    }}>
                                        <Typography fontWeight={400} fontSize={16} sx={{color:'text.gray3'}}>{e.type}</Typography>
                                        <Typography fontWeight={600} fontSize={24} sx={{color:'text.gray1'}}>{e.title}</Typography>
                                        <Typography fontWeight={400} fontSize={16} my='4px' sx={{color:'text.gray2'}}>Jadwal: {e.jadwal}</Typography>
                                        <Typography fontWeight={600} fontSize={20} sx={{color: 'secondary.main'}}>{formatPrice(e.price)}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button onClick={handleDelete} id={e.title+','+dateToStringInvoice(new Date(e.jadwal))} variant="text" sx={{
                                        color: 'text.gray1',
                                        fontWeight: '500',
                                        fontSize: '16px'
                                        }}>
                                        <DeleteForever sx={{color: 'warning.main'}}/>
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    )
                })}
            </Container>
            <Box sx={{
                width: '100%',
                px: '70px',
                py: '30px',
                position: "fixed",
                boxSizing: 'border-box',
                bottom: '0px',
                zIndex: '2',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderTop: 'solid 1px #BDBDBD',
                boxShadow: '0 -2px 3px #CFD6E5'
            }}>
                <Box sx={{display: 'flex', gap:'24px', alignItems:'center'}}>
                    <Typography>Total biaya</Typography> 
                    <Typography sx={{
                        fontWeight: '500',
                        fontSize: '24px',
                        color: 'secondary.main',

                    }}>{formatPrice(total)}</Typography>
                </Box>
                <Button variant="contained" onClick={handleOpenModal}>Bayar Sekarang</Button>
            </Box>
            <ModalPaymentMethod setModalOpen={setOpenModal} modalOpen={openModal}/>
        </>
    )
}

export default Checkout