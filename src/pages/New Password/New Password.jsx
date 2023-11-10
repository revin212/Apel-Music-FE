import { Box, Typography, Input, Button, Stack } from "@mui/material";
import { inputStyle, titleStyle } from "./New Password.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
    const [data, setData] = useState({})
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        setMessage('')
    }

    const passwordValidation = () => {
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        if(regex.test(data.oldPw) /* && data.oldPw compare with password in db */ && regex.test(data.newPw)){
            if(data.oldPw != data.newPw){
                alert(`Password valid! Updating your password...\nOld: ${data.oldPw}\nNew: ${data.newPw}`) //Change it to update new pass to db for prod
                navigate('/login')
            } else {
                setMessage('New password cannot be the same as the old one!')
            }
        } else {
            setMessage('Invalid password, please try again')
        }
    }

    return(
        <Box maxWidth='616px' mx='auto' my='90px'>
            <Typography variant="h2" sx={titleStyle}>
                Buat Password
            </Typography>
            <Box display='flex' flexDirection='column' gap='1.5rem' mt='60px'>
                <Input disableUnderline type='password' sx={inputStyle} placeholder="Password Baru" onChange={handleChange} name="oldPw"/>
                <Input disableUnderline type='password' sx={inputStyle} placeholder="Konfirmasi Password Baru" onChange={handleChange} name="newPw"/>
                <Typography variant="body" sx={{color:'red'}}>
                    {message}
                </Typography>
            </Box>
            <Stack direction='row' gap='1.5rem' mt='40px'>
                <Button variant="outlined" sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                    width: '100%'
                }} placeholder="Batal" onClick={()=>{navigate('/login')}}>
                    Batal
                </Button>
                <Button variant="contained" sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                    width: '100%'
                }} onClick={passwordValidation}>Konfirmasi</Button>
            </Stack>

        </Box>
    )
}

export default NewPassword