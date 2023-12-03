import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
    const [name, setName] = useState('')
    const [userid, setUserid] = useState('')
    const [pwd, setPwd] = useState('')
    const [pwdconf, setPwdconf] = useState('')
    //const [list, setList] = useState('')
    const handleName = (name)=>{
        console.log("Name : "+name) 
    }
    const handleUserid = (userid)=>{
        console.log("User ID : "+userid) 
    }
    const handlePwd = (pwd)=>{
        console.log("Password : "+pwd) 
    }
    const handlePwdconf = (pwdconf)=>{
        console.log("Password Confirm : "+pwdconf) 
    }
  return (
    <div className='register-wrapper'>
        <div className='register-title-wrapper'>
            <h2 className='register-title'>Selamat Datang Musikers!</h2>
            <p className='register-subtitle'>Yuk daftar terlebih dahulu akun kamu</p>
        </div>

        <form className='register-form-wrapper'>
            <input name={"nama"} type="text" value={ name } onChange={(e)=>{ setName(e.target.value) }} className='input-register register-email' placeholder='Masukkan Nama Lengkap' /> 
            <input name={"email"} autoComplete='email' type="email" value={ userid } onChange={(e)=>{ setUserid(e.target.value) }} className='input-register register-email' placeholder='Masukkan Email' />
            <input name={"password"} type="password" value={ pwd } onChange={(e)=>{ setPwd(e.target.value) }} className='input-register register-password' placeholder='Masukkan Password' />
            <input name={"confirm-password"} type="password" value={ pwdconf } onChange={(e)=>{ setPwdconf(e.target.value) }} className='input-register register-password' placeholder='Konfirmasi Password' />
            <div className='register-button-wrapper'>
                <button onClick={()=>{
                    handleName(name)
                    handleUserid(userid)
                    handlePwd(pwd)
                    handlePwdconf(pwdconf)
                }} className='register-button'>Daftar</button>
                <div className='redirect-daftar-wrapper'>
                    <span>Sudah punya akun? <Link to='/login' style={{textDecoration:'none', color:'#2F80ED'}}>Login disini</Link></span>
                </div>
            </div>

        </form>
    </div>
  )
}

export default Register