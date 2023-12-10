import { useState, useContext } from 'react'
import { Box, Stack, Button, Typography, Input, TextareaAutosize, Switch } from '@mui/material'
import { inputStyle, titleStyle, subtitleStyle, formStyle, errorMsgStyle, textAreaStyle } from './AdminCategoryFormStyle'
import usePostData from '../../../hooks/usePostData'
import { AuthContext } from '../../AuthContext/AuthContext'
import { ArrowBack } from '@mui/icons-material'
import { Link, useParams } from 'react-router-dom'
import { convertImageToBase64 } from '../../../utils/imageUtils'


export const AdminCategoryForm = () => {

    const {id} = useParams()

    const [data, setData] = useState({
        name: '',
        image: null,
        description: '',
        status: true
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
            status: !data.status
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
    
    const postUrl = import.meta.env.VITE_API_URL + "/Admin/MsCategoryAdmin/Create"
    const { postData, isLoading, error } = usePostData();
    const { token } = useContext(AuthContext);
    
    const handleSave = (e) => {
        e.preventDefault();
        postData(postUrl, 'createCategory', true, data)
        console.log(data)
    }

  return (
    <>
    <Box width={'min-content'}>
        <Link to='/admin/category' style={{textDecoration:'none'}}>
            <Button variant='outlined' 
            sx={{color:'text.gray2', display:'flex', gap:1}}>
                <ArrowBack />
                Back
            </Button>
        </Link>
    </Box>
    <Box maxWidth='616px' mx={{xs:'18px',sm:'auto'}} my='90px'>
        
        <Stack direction='column' gap={2} mb='60px'>
            <Typography variant='h2' sx={titleStyle}>Category Add / Edit</Typography>
        </Stack>

        {error && <Typography variant='body2' sx={errorMsgStyle} >{error}</Typography>}

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
                    src={data.image.length > 100 ? `data:image/jpeg;base64,${data.image}` : `${import.meta.env.VITE_BASE_URL}/${data.image}`}
                />
                <br />
                <button onClick={() => {setData({...data, image: null})}}>Remove</button>
                </div>
            )}
            </Stack>
                
            <textarea name={"description"} value={ data.description } onChange={handleChange} id='description-input' placeholder="Description" rows={6} style={textAreaStyle} />
            <Stack direction={'row'} alignItems={'center'} gap="8px">
                <Typography>Status</Typography>
                <Switch checked={ data.status } onChange={handleChangeSwitch} name={'status'} id='status-input' color={'secondary'} />
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
