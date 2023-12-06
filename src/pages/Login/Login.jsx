import { useState, useContext } from 'react'
import { Box, Stack, Button, Typography, Input } from '@mui/material'
import { inputStyle, titleStyle, subtitleStyle, forgotPassStyle, formStyle, errorMsgStyle } from './LoginStyles'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../../components/AuthContext/AuthContext'
import usePostData from '../../hooks/usePostData'




const Login = () => {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const loginUrl = import.meta.env.VITE_API_URL + "/MsUser/Login"
    const { postData, isLoading, error } = usePostData();
    const { token } = useContext(AuthContext);
    
    const handleLogin = (e) => {
        e.preventDefault();
        postData(loginUrl, 'login', true, {email:email, password:pwd})
    }

    return (
        !token? 
        <>
            <Box maxWidth='616px' mx={{xs:'18px',sm:'auto'}} my='90px'>
                <Stack direction='column' gap={2} mb='60px'>
                    <Typography variant='h2' sx={titleStyle}>Selamat Datang Musikers!</Typography>
                    <Typography variant='body2' component='p' sx={subtitleStyle}>Login dulu yuk</Typography>
                </Stack>

                {error && <Typography variant='body2' sx={errorMsgStyle} >{error}</Typography>}

                <Typography component='form' sx={formStyle}>
                    <Input disableUnderline name={"Email"} autoComplete='email' value={ email } onChange={(e)=>{ setEmail(e.target.value) }} id='email-input' type="email" placeholder="Masukkan Email" sx={inputStyle}/>
                    <Input disableUnderline name={"Password"} value={ pwd } onChange={(e)=>{ setPwd(e.target.value) }} id='password-input' type="password" placeholder="Masukkan Password" sx={inputStyle}/>
                    <Box textAlign='end' sx={forgotPassStyle}>
                        <Link to="/forgot-password" style={{textDecoration:'none', color:'#4F4F4F'}} >Lupa kata sandi</Link>
                    </Box>

                    <Stack direction='column' gap='24px' mt={2} >
                        <Button onClick={(e)=>{
                            handleLogin(e);
                        }} variant='contained' type='submit' sx={{
                            maxWidth: '140px',
                            maxHeight: '43px',
                        }} disabled={isLoading}>
                            Masuk
                        </Button>
                        <Stack direction='row'>
                            <Typography component='p' variant='body1'>
                                <span>Belum punya akun? </span>
                                <Link to="/register" style={{textDecoration:'none', color:'#2F80ED'}} >Daftar disini</Link>
                            </Typography>
                        </Stack>
                    </Stack>
                </Typography>
            </Box>
        </>
        :
        <Navigate to='/' /> 
  )
}

export default Login