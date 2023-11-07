import React from 'react'
import './Register.css'

const Register = () => {
  
  return (
    <div className='register-wrapper'>
        <div className='register-title-wrapper'>
            <h2 className='register-title'>Selamat Datang Musikers!</h2>
            <p className='register-subtitle'>Yuk daftar terlebih dahulu akun kamu</p>
        </div>

        <form className='register-form-wrapper'>
            <input type="text" className='input-register register-email' placeholder='Masukkan Nama Lengkap' /> 
            <input type="email" className='input-register register-email' placeholder='Masukkan Email' />
            <input type="password" className='input-register register-password' placeholder='Masukkan Password' />
            <input type="password" className='input-register register-password' placeholder='Konfirmasi Password' />
            <div className='register-button-wrapper'>
                <button className='register-button'>Daftar</button>
                <div className='redirect-daftar-wrapper'>
                    <span>Sudah punya akun? <a href="#" className='redirect-daftar'>Login disini</a></span>
                </div>
            </div>

        </form>
    </div>
  )
}

export default Register