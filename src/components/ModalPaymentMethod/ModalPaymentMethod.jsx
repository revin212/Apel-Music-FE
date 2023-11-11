import { Box, Modal, Stack, Typography, Button, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { buttonStyle, itemButtonStyle, methodListStyle, modalContentStyle, paymentMethodList, titleStyle } from './ModalPaymentMethodStyle';


export const ModalPaymentMethod = ([modalOpen, setModalOpen]) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const handleListItemClick = (method) => {setSelectedMethod(method)}

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
                    {paymentMethodList.map(paymentMethod => {
                        return (
                            <ListItemButton
                            key={paymentMethod.name}
                            disableRipple
                            selected={selectedMethod === paymentMethod.name}
                            onClick={() => handleListItemClick(paymentMethod.name)}
                            sx={itemButtonStyle}
                            >
                                <ListItemIcon>
                                    <img src={`/images/logo/${paymentMethod.name}.png`} alt={paymentMethod.name} />
                                </ListItemIcon>
                                <ListItemText primary={paymentMethod.name} />
                            </ListItemButton>
                        )
                    })}
                </List>
            </Stack>
            <Stack direction='row' gap='16px' justifyContent='center'>
                <Button variant='outlined' sx={buttonStyle} onClick={()=>setModalOpen(false)}>
                    Batal
                </Button>
                <Button variant='contained' sx={buttonStyle}>
                    Bayar
                </Button>
            </Stack>
        </Box>
    </Modal>
  )
}
