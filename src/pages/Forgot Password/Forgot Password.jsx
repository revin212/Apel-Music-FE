import { Box, Button, Stack, Typography, Input  } from "@mui/material";
import { inputStyle, subtitleStyle, titleStyle } from "./Forgot password.style";
import { useState } from "react";


const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [valid, setValid] = useState(true)

    const handleChange = (e) => {
        setMessage('')
        setEmail(e.target.value)
    }

    // console.log(email);

    const emailValidation = () => {
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (regex.test(email)) {
            alert(`(VALID) Email: ${email}`);
            console.log('Send email to API');
        } else {
            setValid(false)
            setMessage('Invalid email, please try again')
        }
    }

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
                    <Input disableUnderline type='email' sx={inputStyle} placeholder="Masukkan Email" name="email" id="email" onChange={handleChange}/>
                </Box>
                {!valid ? <Typography variant="body" sx={{color: 'warning.main'}}>{message}</Typography> : <></>}
                
            </Box>
            <Stack direction='row' gap='24px' mt={2}>
                <Button variant="outlined" sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                    width: '100%'
                }} placeholder="Batal">
                    Batal
                </Button>
                <Button variant="contained" onClick={emailValidation} sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                    width: '100%'
                }}>Konfirmasi</Button>
            </Stack>
        </Box>
    )
}

export default ForgotPassword;