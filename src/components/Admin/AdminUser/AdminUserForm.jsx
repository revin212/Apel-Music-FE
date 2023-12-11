import { useState, useContext, useEffect } from 'react'
import { Box, Stack, Button, Typography, Input, Switch } from '@mui/material'
import { inputStyle, titleStyle, formStyle, errorMsgStyle, messageStyle } from './AdminUserFormStyle'
import usePostData from '../../../hooks/usePostData'
import { AuthContext } from '../../AuthContext/AuthContext'
import { ArrowBack } from '@mui/icons-material'
import { Link, useParams } from 'react-router-dom'
import { SelectRole } from './SelectRole'
import usePatchData from '../../../hooks/usePatchData'
import useGetData from '../../../hooks/useGetData'


export const AdminUserForm = () => {

    const {id} = useParams()

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        roleId: 2,
        isActivated: true
    })
    const [roleName, setRoleName] = useState('')

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeSwitch = (e) => {
        setData({
            ...data,
            isActivated: !data.isActivated
        })
    }

    const getUrl = "/Admin/MsUserAdmin/GetById?id=" + id
    const postUrl = import.meta.env.VITE_API_URL + "/Admin/MsUserAdmin/Create"
    const patchUrl = import.meta.env.VITE_API_URL + "/Admin/MsUserAdmin/Update?id=" + id
    const { postData, isLoading, error, msg } = usePostData();
    const { patchData, isLoading: patchLoading, error: patchError, msg: patchMsg } = usePatchData();
    const { token } = useContext(AuthContext);
    const { getData, data: paymentData, loading: getDataLoading, error: getDataError } = useGetData();

    useEffect(()=>{
        if(id){
            getData(getUrl, { 'Authorization': `Bearer ${token}` }, setData)
        }
    }, [token])
    
    const handleSave = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        if(id){
            patchData(patchUrl, 'editCategory', false, data, { 'Authorization': `Bearer ${token}` })
        } else {
            postData(postUrl, 'createCategory', false, data, { 'Authorization': `Bearer ${token}` })
        }
    }

  return (
    <>
    <Box width={'min-content'}>
        <Link to='/admin/user' style={{textDecoration:'none'}}>
            <Button variant='outlined' 
            sx={{color:'text.gray2', display:'flex', gap:1}}>
                <ArrowBack />
                Back
            </Button>
        </Link>
    </Box>
    <Box maxWidth='616px' mx={{xs:'18px',sm:'auto'}} my='90px'>
        
        <Stack direction='column' gap={2} mb='60px'>
            <Typography variant='h2' sx={titleStyle}>User Add / Edit</Typography>
        </Stack>

        {msg && <p style={messageStyle} >{msg}</p>}
        {patchMsg && <p style={messageStyle} >{patchMsg}</p>}
        {error && <Typography variant='body2' sx={errorMsgStyle} >{error}</Typography>}
        {patchError && <Typography variant='body2' sx={errorMsgStyle} >{patchError}</Typography>}

        <Typography component='form' sx={formStyle}>
            <Input disableUnderline name={"name"} autoComplete='name' value={ data.name } onChange={handleChange} id='name-input' type="text" placeholder="Name" sx={inputStyle}/>
            <Input disableUnderline name={"email"} autoComplete='email' value={ data.email } onChange={handleChange} id='email-input' type="email" placeholder="Email" sx={inputStyle}/>
            <Input disableUnderline name={"password"} value={ data.password } onChange={handleChange} id='password-input' type="password" placeholder="Password" sx={inputStyle}/>
            <Input disableUnderline name={"confirmPassword"} value={ data.confirmPassword } onChange={handleChange} id='confirmPassword-input' type="password" placeholder="Confirm Password" sx={inputStyle}/>
            
            <Stack gap="8px">
                <Typography>Role</Typography>
                <SelectRole data={data} setData={setData} roleName={roleName} setRoleName={setRoleName} />
            </Stack>

            <Stack direction={'row'} alignItems={'center'} gap="8px">
                <Typography>Status</Typography>
                <Switch checked={ data.isActivated } onChange={handleChangeSwitch} name={'status'} id='status-input' color={'secondary'} />
            </Stack>

            <Stack direction='column' gap='24px' mt={2} >
                <Button onClick={(e)=>{
                    handleSave(e);
                }} variant='contained' type='submit' sx={{
                    maxWidth: '140px',
                    maxHeight: '43px',
                }} disabled={isLoading}>
                    Save
                </Button>
            </Stack>
        </Typography>
    </Box>
    </>
  )
}
