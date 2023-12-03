import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useRegister from '../../hooks/useRegister'
import './Register.css'
import { Button } from '@mui/material'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [pwdconf, setPwdconf] = useState('')
    const registerUrl = import.meta.env.VITE_API_URL + "/MsUser/Register"
    const { register, isLoading, error, setError, msg, succesMessage } = useRegister();

    const resetForm = async () => {
        await setTimeout(() => {
        if(error == ''){
            setName('');
            setEmail('');
            setPwd('');
            setPwdconf('');
        }}, 3000);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if(name == '' || email == '' || pwd == '' || pwdconf == '' ) {
            setError("Please fill all the field")
            return
        }
        if(pwd != pwdconf) {
            setError("Password does not match")
            return
        }
        register(registerUrl, {
            name: name, 
            email: email, 
            password:pwd, 
            confirmPassword: pwdconf
        });
        succesMessage();
        resetForm();
    }


  return (
    <div className='register-wrapper'>
        <div className='register-title-wrapper'>
            <h2 className='register-title'>Selamat Datang Musikers!</h2>
            <p className='register-subtitle'>Yuk daftar terlebih dahulu akun kamu</p>
        </div>

        {msg && <p id='success-message' className='success-message' >{msg}</p>}
        {error && <p id='error-message' className='error-message' >{error}</p>}

        <form className='register-form-wrapper'>
            <input name={"nama"} required={true} type="text" value={ name } onChange={(e)=>{ setName(e.target.value) }} className='input-register register-email' placeholder='Masukkan Nama Lengkap' /> 
            <input name={"email"} required={true} autoComplete='email' type="email" value={ email } onChange={(e)=>{ setEmail(e.target.value) }} className='input-register register-email' placeholder='Masukkan Email' />
            <input name={"password"} required={true} type="password" value={ pwd } onChange={(e)=>{ setPwd(e.target.value) }} className='input-register register-password' placeholder='Masukkan Password' />
            <input name={"confirm-password"} required={true} type="password" value={ pwdconf } onChange={(e)=>{ setPwdconf(e.target.value) }} className='input-register register-password' placeholder='Konfirmasi Password' />
            <div className='register-button-wrapper'>
                <Button type='submit' onClick={(e)=>{
                    handleRegister(e)
                }} id='register-button' disabled={isLoading} >Daftar</Button>
                <div className='redirect-daftar-wrapper'>
                    <span>Sudah punya akun? <Link to='/login' style={{textDecoration:'none', color:'#2F80ED'}}>Login disini</Link></span>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register