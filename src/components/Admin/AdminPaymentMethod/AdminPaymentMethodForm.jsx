import { useState, useContext, useEffect } from 'react'
import { Box, Stack, Button, Typography, Input, Switch } from '@mui/material'
import { inputStyle, titleStyle, formStyle, errorMsgStyle, messageStyle, imageStyle } from './AdminPaymentMethodFormStyle'
import usePostData from '../../../hooks/usePostData'
import { AuthContext } from '../../AuthContext/AuthContext'
import { ArrowBack } from '@mui/icons-material'
import { Link, useParams } from 'react-router-dom'
import { convertImageToBase64 } from '../../../utils/imageUtils'
import usePatchData from '../../../hooks/usePatchData'
import useGetData from '../../../hooks/useGetData'
import { validateName } from '../../../utils/authUtils'


export const AdminPaymentMethodForm = () => {

    const {id} = useParams()

    const [data, setData] = useState({
        name: '',
        image: null,
        isActivated: true
    })

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

    const handleUploadImage = (e) => {
        const imgUrl = URL.createObjectURL(e.target.files[0])
        convertImageToBase64(imgUrl, (dataUrl)=>{
            setData({
                ...data,
                image: dataUrl.slice(22)
            })
        })
    }
    
    const getUrl = "/Admin/MsPaymentMethodAdmin/GetById?id=" + id
    const postUrl = import.meta.env.VITE_API_URL + "/Admin/MsPaymentMethodAdmin/Create"
    const patchUrl = import.meta.env.VITE_API_URL + "/Admin/MsPaymentMethodAdmin/Update?id=" + id
    const { postData, isLoading, error, msg, setError } = usePostData();
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
        if(!validateName(data.name)){
            setError("Name must not be only space characters")
            return
        }
        if(id){
            patchData(patchUrl, 'editCategory', false, data, { 'Authorization': `Bearer ${token}` })
        } else {
            postData(postUrl, 'createCategory', false, data, { 'Authorization': `Bearer ${token}` })
        }
    }

  return (
    <>
    <Box width={'min-content'}>
        <Link to='/admin/payment-method' style={{textDecoration:'none'}}>
            <Button variant='outlined' 
            sx={{color:'text.gray2', display:'flex', gap:1}}>
                <ArrowBack />
                Back
            </Button>
        </Link>
    </Box>
    <Box maxWidth='616px' mx={{xs:'18px',sm:'auto'}} my='90px'>
        
        <Stack direction='column' gap={2} mb='60px'>
            <Typography variant='h2' sx={titleStyle}>Payment Method Add / Edit</Typography>
        </Stack>

        {msg && <p style={messageStyle} >{msg}</p>}
        {patchMsg && <p style={messageStyle} >{patchMsg}</p>}
        {error && <Typography variant='body2' sx={errorMsgStyle} >{error}</Typography>}
        {patchError && <Typography variant='body2' sx={errorMsgStyle} >{patchError}</Typography>}

        <Typography component='form' sx={formStyle}>
            <Input disableUnderline name={"name"} autoComplete='name' value={ data.name } onChange={handleChange} id='name-input' type="text" placeholder="Name" sx={inputStyle}/>

            <Stack gap="16px">
            <Typography>Image</Typography>
            <input
                type="file"
                name="myImage"
                onChange={handleUploadImage}
                />
            {data.image && (
                <div>
                <img
                    alt="not found"
                    width={"250px"}
                    style={imageStyle}
                    src={data.image.length > 100 ? `data:image/jpeg;base64,${data.image}` : `${import.meta.env.VITE_BASE_URL}${data.image}?`+new Date().getTime()}
                />
                <br />
                <button onClick={() => {setData({...data, image: null})}}>Remove</button>
                </div>
            )}
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
                }} disabled={isLoading || patchLoading}>
                    Save
                </Button>
            </Stack>
        </Typography>
    </Box>
    </>
  )
}
