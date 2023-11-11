import { Delete, DeleteForever } from "@mui/icons-material"
import { Box, Checkbox, Container, FormControlLabel, Grid, Input, Typography, Button } from "@mui/material"
import { useState } from "react"

const Checkout = (/*{ data }*/) => {
    const [cart, setCart] = useState([
        {
            type: 'Drum',
            title: 'Kursus Drummer Special Coach (Eno Netral)',
            jadwal: 'Senin, 25 Juli 2022',
            price: 850000,
            thumbnail: '/images/Rectangle 12-7.png'
        },
        {
            type: 'Biola',
            title: 'Biola Mid-Level Course',
            jadwal: 'Senin, 25 Juli 2022',
            price: 850000,
            thumbnail: '/images/Rectangle 12-7.png'
        },
        {
            type: 'Drum',
            title: 'Kursus Drummer Special Coach (Eno Netral)',
            jadwal: 'Senin, 25 Juli 2022',
            price: 850000,
            thumbnail: '/images/Rectangle 12-7.png'
        },
        {
            type: 'Drum',
            title: 'Kursus Drummer Special Coach (Eno Netral)',
            jadwal: 'Senin, 25 Juli 2022',
            price: 850000,
            thumbnail: '/images/Rectangle 12-7.png'
        }
    ])

    const [checked, setChecked] = useState([]) //{select: bool, title: string}
    const [openModal, setOpenModal] = useState(false)

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

    const total = () => {
        let sum = 0
        try {
            cart.forEach((e, i)=>{
                /* if(checked[i].select) */ sum += e.price
            })
            return sum
        } catch (error) {
            console.log(error);
        }
    }

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
                    <Checkbox /> Pilih Semua
                </Box>
                {cart.map((e, i)=>{
                    // {console.log(e)}
                    return(
                        <Box key={i} sx={{
                            py: '24px',
                            borderBottom: '1px solid'
                        }}>
                            <Grid key={i} direction='row' container gap='24px' alignItems='center'>
                                <Grid item xs={0.5} height='100%'>
                                    <Checkbox />
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
                                        {console.log(e.type, e.title, e.jadwal, e.price)}
                                        <Typography fontWeight={400} fontSize={16} sx={{color:'text.gray3'}}>{e.type}</Typography>
                                        <Typography fontWeight={600} fontSize={24} sx={{color:'text.gray1'}}>{e.title}</Typography>
                                        <Typography fontWeight={400} fontSize={16} my='4px' sx={{color:'text.gray2'}}>Jadwal: {e.jadwal}</Typography>
                                        <Typography fontWeight={600} fontSize={20} sx={{color: 'secondary.main'}}>{formatPrice(e.price)}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button variant="text" sx={{
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
                <Typography sx={{display: 'flex', gap:'24px', alignItems:'center'}}>
                    Total biaya <Typography sx={{
                        fontWeight: '500',
                        fontSize: '24px',
                        color: 'secondary.main',

                    }}>{formatPrice(total())}</Typography>
                </Typography>
                <Button variant="contained" onClick={handleOpenModal}>Bayar Sekarang</Button>
            </Box>
        </>
    )
}

export default Checkout