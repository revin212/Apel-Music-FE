import { Box, Typography, Input, Button, Stack } from "@mui/material";
import { inputStyle, titleStyle } from "./New Password.style";

const NewPassword = () => {
    return(
        <Box maxWidth='616px' mx='auto' mt='182px'>
            <Typography variant="h2" sx={titleStyle}>
                Buat Password
            </Typography>
            <Box display='flex' flexDirection='column' gap='1.5rem' mt='60px'>
                <Input disableUnderline type='email' sx={inputStyle} placeholder="Password Baru" />
                <Input disableUnderline type='email' sx={inputStyle} placeholder="Konfirmasi Password Baru"/>
            </Box>
            <Stack direction='row' gap='1.5rem' mt='40px'>
                <Button variant="outlined" sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                    width: '100%'
                }} placeholder="Batal">
                    Batal
                </Button>
                <Button variant="contained" sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                    width: '100%'
                }}>Konfirmasi</Button>
            </Stack>

        </Box>
    )
}

export default NewPassword