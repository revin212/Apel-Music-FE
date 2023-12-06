import { Box, Button, Stack, Typography, Input  } from "@mui/material";
import { inputStyle, messageStyle, subtitleStyle, titleStyle } from "./Forgot password.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePostData from "../../hooks/usePostData";


const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const navigate = useNavigate()
    const {postData, isLoading, error, setError, msg} = usePostData()

    const handleChange = (e) => {
        setError('')
        setEmail(e.target.value)
    }

    const emailValidation = () => {
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (regex.test(email)) {
            return true
        } else {
            setError('Invalid email, please try again')
            return false
        }
    }

    const handleForgetPassword = (e) => {
        e.preventDefault();
        setError('');
        if(emailValidation()){
            postData(import.meta.env.VITE_API_URL + `/MsUser/ForgetPassword?Email=${email}`, 'forgetPassword')
        }
    }

    return(
        <Box maxWidth='616px' mx='auto' my='90px'>
            <Box width='100%' mb='40px'>
                <Stack gap='16px' mb='60px' direction='column'>
                    <Typography variant='h2' sx={titleStyle}>
                        Reset Password
                    </Typography>
                    <Typography variant="body2" component='p' sx={subtitleStyle}>
                        Silahkan masukan terlebih dahulu email anda
                    </Typography>
                </Stack>
                {msg && <p style={messageStyle} >{msg}</p>}
                <Box display='flex' flexDirection='column' gap='1.5rem'>
                    <Input disableUnderline type='email' sx={inputStyle} placeholder="Masukkan Email" name="email" id="email" onChange={handleChange}/>
                </Box>
                <Typography variant="body" sx={{color: 'warning.main'}}>{error}</Typography>
            </Box>
            <Stack direction='row' gap='24px' mt={2}>
                <Button variant="outlined" sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                    width: '100%'
                }} placeholder="Batal" onClick={()=>{navigate('/login')}}>
                    Batal
                </Button>
                <Button type="submit" disabled={isLoading} variant="contained" onClick={(e)=>handleForgetPassword(e)} sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                    width: '100%',
                    
                }}>Konfirmasi</Button>
            </Stack>
        </Box>
    )
}

export default ForgotPassword;