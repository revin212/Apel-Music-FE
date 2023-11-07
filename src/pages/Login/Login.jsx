import React from 'react'
import './Login.css'

const Login = () => {
  
  return (
    <div className='login-wrapper'>
        <div className='login-title-wrapper'>
            <h2 className='login-title'>Selamat Datang Musikers!</h2>
            <p className='login-subtitle'>Login dulu yuk</p>
        </div>

        <form className='login-form-wrapper'>
            <input type="email" className='input-login input-email' placeholder='Masukkan Email' />
            <input type="password" className='input-login input-password' placeholder='Masukkan Password' />
            <div className='forgot-password'>
                <a href="#" >Lupa kata sandi</a>
            </div>

            <div className='login-button-wrapper'>
                <button className='login-button'>Masuk</button>
                <div className='redirect-daftar-wrapper'>
                    <span>Belum punya akun? <a href="#" className='redirect-daftar'>Daftar disini</a></span>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login