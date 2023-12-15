import { Box, Modal, Stack, Typography, Button } from '@mui/material'
import { buttonStyle, modalContentStyle, titleStyle } from './ModalDeleteCartStyles';


export const ModalDeleteCart = ({ modalDeleteOpen, setModalDeleteOpen, deleteLoading, handleDelete }) => {

  return (
    <Modal 
        open={modalDeleteOpen}
        onClose={()=>setModalDeleteOpen(false)}
        aria-labelledby="modal-payment-method"
        aria-describedby="modal-payment-method-list"
    >
        <Box sx={modalContentStyle}>
            <Stack gap='16px'>
                <Typography id="modal-payment-method" variant="h6" component="h2" sx={titleStyle}>
                    Hapus item keranjang?
                </Typography>
            </Stack>
            <Stack direction='row' gap='16px' justifyContent='center'>
                <Button variant='outlined' sx={buttonStyle} onClick={()=>setModalDeleteOpen(false)}>
                    Batal
                </Button>
                <Button disabled={deleteLoading} variant='contained' sx={buttonStyle} onClick={()=>{
                    handleDelete()
                    setModalDeleteOpen(false)
                    }}>
                    Hapus
                </Button>
            </Stack>
        </Box>
    </Modal>
  )
}
