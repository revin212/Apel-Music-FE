import { Box, Modal, Stack, Typography, Button } from '@mui/material'
import { buttonStyle, modalContentStyle, titleStyle } from './ModalNavigateLoginStyles';
import { Link } from 'react-router-dom';


export const ModalNavigateLogin = ({ modalNavigateOpen, setModalNavigateOpen}) => {

  return (
    <Modal 
        open={modalNavigateOpen}
        onClose={()=>setModalNavigateOpen(false)}
        aria-labelledby="modal-payment-method"
        aria-describedby="modal-payment-method-list"
    >
        <Box sx={modalContentStyle}>
            <Stack gap='16px'>
                <Typography id="modal-payment-method" variant="h6" component="h2" sx={titleStyle}>
                    Anda belum login
                </Typography>
            </Stack>
            <Stack direction='row' gap='16px' justifyContent='center'>
                <Button variant='outlined' sx={buttonStyle} onClick={()=>setModalNavigateOpen(false)}>
                    Batal
                </Button>
                <Link to="/login" styles={{textDecoration: 'none'}}>
                <Button variant='contained' sx={buttonStyle}>
                    Login
                </Button>
                </Link>
            </Stack>
        </Box>
    </Modal>
  )
}
