import React, { useState } from 'react'
import { Box, Stack, Button, Typography, Link, Input } from '@mui/material'
import { inputStyle, titleStyle, subtitleStyle, forgotPassStyle, formStyle } from './LoginStyles'

const Login = () => {
    const [userid, setUserid] = useState('')
    const [pwd, setPwd] = useState('')
  //const [list, setList] = useState('')
    const handleUserid = (userid)=>{
        console.log("User ID : "+userid) 
    }
    const handlePwd = (pwd)=>{
        console.log("Password : "+pwd) 
    }


    return (
    <Box maxWidth='616px' mx='auto' my='3rem'>
        <Stack direction='column' gap={2} mb='60px'>
            <Typography variant='h2' sx={titleStyle}>Selamat Datang Musikers!</Typography>
            <Typography variant='body2' component='p' sx={subtitleStyle}>Login dulu yuk</Typography>
        </Stack>

        <Typography component='form' sx={formStyle}>
            <Input disableUnderline value={ userid } onChange={(e)=>{ setUserid(e.target.value) }} id='email-input' type="email" placeholder="Masukkan Email" sx={inputStyle}/>
            <Input disableUnderline value={ pwd } onChange={(e)=>{ setPwd(e.target.value) }} id='password-input' type="password" placeholder="Masukkan Password" sx={inputStyle}/>
            <Box textAlign='end' sx={forgotPassStyle}>
                <Link underline='none' color='text.gray2' href="#" >Lupa kata sandi</Link>
            </Box>

            <Stack direction='column' gap='24px' mt={2} >
                <Button onClick={()=>{
                    handleUserid(userid)
                    handlePwd(pwd)
                }} variant='contained' type='submit' sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                }}>
                    Masuk
                </Button>
                <Stack direction='row'>
                    <Typography component='p' variant='body1'>
                        <span>Belum punya akun? </span>
                        <Link href="/register" underline='hover' color='text.blue'>Daftar disini</Link>
                    </Typography>
                </Stack>
            </Stack>
        </Typography>
    </Box>
  )
}

export default Login