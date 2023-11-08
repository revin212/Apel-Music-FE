import { Box, Button, Stack, Typography, Input  } from "@mui/material";
import { inputStyle, subtitleStyle, titleStyle } from "./Forgot password.style";


const ForgotPassword = () => {
    return(
        <Box maxWidth='616px' mx='auto' mt='182px'>
            <Box width='100%' mb='40px'>
                <Stack gap='16px' mb='60px' direction='column'>
                    <Typography variant='h2' sx={titleStyle}>
                        Reset Password
                    </Typography>
                    <Typography variant="body2" component='p' sx={subtitleStyle}>
                        Silahkan masukan terlebih dahulu email anda
                    </Typography>
                </Stack>
                <Box display='flex' flexDirection='column' gap='1.5rem'>
                    <Input disableUnderline type='email' sx={inputStyle} placeholder="Masukkan Email"/>
                </Box>
            </Box>
            <Stack direction='row' gap='24px' mt={2}>
                <Button variant="outlined" sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                }} placeholder="Batal">
                    Batal
                </Button>
                <Button variant="contained" sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                }}>Konfirmasi</Button>
            </Stack>
        </Box>
    )
}

export default ForgotPassword;