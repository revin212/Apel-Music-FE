import { Box, Modal, Stack, Typography, Button, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { buttonStyle, itemButtonStyle, methodListStyle, modalContentStyle, titleStyle } from './ModalPaymentMethodStyle';
import useGetData from '../../hooks/useGetData';
import usePostData from '../../hooks/usePostData';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';


export const ModalPaymentMethod = ({ modalOpen, setModalOpen, userId, cartId, setCheckoutError }) => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const handleListItemClick = (method) => {setPaymentMethod(method)}
  const navigate = useNavigate()
  const {data, getData} = useGetData();
  const { postData, error, isLoading } = usePostData();
  const {token} = useContext(AuthContext)

  useEffect(()=>{
    getData('/MsPaymentMethod/GetAll')
  },[])

  const handleCheckout = async () => {
    await postData(`${import.meta.env.VITE_API_URL}/TsOrder/CheckoutCart`, 'checkout', false, {
        id: cartId,
        userId: userId,
        paymentId: paymentMethod.id
    }, { 'Authorization': `Bearer ${token}` }, setCheckoutError);
    if(!isLoading)
        setModalOpen(false)
  }

  return (
    <Modal 
        open={modalOpen}
        onClose={()=>setModalOpen(false)}
        aria-labelledby="modal-payment-method"
        aria-describedby="modal-payment-method-list"
    >
        <Box sx={modalContentStyle}>
            <Stack gap='16px'>
                <Typography id="modal-payment-method" variant="h6" component="h2" sx={titleStyle}>
                    Pilih Metode Pembayaran
                </Typography>
                <List component="ul" aria-label="modal-payment-method-list" sx={methodListStyle}>
                    {data?.map(item => {
                        return (
                            <ListItemButton
                            key={item.id}
                            disableRipple
                            selected={paymentMethod?.id === item.id}
                            onClick={() => handleListItemClick(item)}
                            sx={itemButtonStyle}
                            >
                                <ListItemIcon>
                                    <img style={{width:'40px',maxWidth:'40px', height:'40px', maxHeight:'40px', objectFit:'contain'}} src={`${import.meta.env.VITE_BASE_URL}${item.image}?`+ new Date().getTime()} alt={item.name} />
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        )
                    })}
                </List>
            </Stack>
            <Stack direction='row' gap='16px' justifyContent='center'>
                <Button variant='outlined' sx={buttonStyle} onClick={()=>setModalOpen(false)}>
                    Batal
                </Button>
                <Button disabled={isLoading} variant='contained' sx={buttonStyle} onClick={()=>{handleCheckout()}}>
                    Bayar
                </Button>
            </Stack>
        </Box>
    </Modal>
  )
}
