import React from 'react'
import "./Login.css"
import Logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={Logo} className='login__logo' alt="" />
      <div className="login__form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>Sign Up</button>
          <div className="form__help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Login