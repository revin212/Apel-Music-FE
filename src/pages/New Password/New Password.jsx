import { Box, Typography, Input, Button, Stack } from "@mui/material";
import { batalButtonStyle, buttonStyle, inputStyle, messageStyle, titleStyle } from "./New Password.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePostData from "../../hooks/usePostData";
import { validatePassword } from "../../utils/authUtils";

const NewPassword = () => {
    const [data, setData] = useState({})
    const { postData, isLoading, error, setError, msg } = usePostData()
    const navigate = useNavigate()
    const Id = new URLSearchParams(window.location.search).get('Id');

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        setError('')
    }

    const handleNewPassword = (e) => {
        e.preventDefault();
        setError('');
        if( data.newPw == '' || data.newPwConf == '' ) {
            setError("Please fill all the field")
            return
        }
        if( data.newPw != data.newPwConf ) {
            setError("Password does not match")
            return
        }
        if(!validatePassword(data.newPw)){
            setError("Password should contains at least 6 characters, 1 uppercase and 1 lowercase letter with at least 1 number and 1 special character")
            return
        }
        postData(import.meta.env.VITE_API_URL + '/MsUser/ResetPassword', 'resetPassword', false, 
        {
            id: Id,
            password:data.newPw, 
            confirmPassword:data.newPwConf
        })
    }

    return(
        <Box maxWidth='616px' mx={{xs:'18px',sm:'auto'}} my='90px'>
            <Typography variant="h2" sx={titleStyle}>
                Buat Password
            </Typography>
            {msg && <p style={messageStyle} >{msg}</p>}
            <Box display='flex' flexDirection='column' gap='1.5rem' mt='60px'>
                <Input disableUnderline type='password' sx={inputStyle} placeholder="Password Baru" onChange={handleChange} name="newPw"/>
                <Input disableUnderline type='password' sx={inputStyle} placeholder="Konfirmasi Password Baru" onChange={handleChange} name="newPwConf"/>
                <Typography variant="body" sx={{color:'red'}}>
                    {error}
                </Typography>
            </Box>
            <Stack direction='row' gap='1.5rem' mt='40px'>
                <Button variant="outlined" sx={batalButtonStyle} placeholder="Batal" onClick={()=>{navigate('/login')}}>
                    Batal
                </Button>
                <Button type='submit' variant="contained" sx={buttonStyle} onClick={handleNewPassword} disabled={isLoading}>Konfirmasi</Button>
            </Stack>
        </Box>
    )
}

export default NewPassword