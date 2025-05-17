import React, { useState } from 'react'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <button onClick={()=>setShowLogin(false)}>X</button>
        </div>

        <div className="login-popup-inputs">
          {currState==="Log In" ? <></> :  <input type="text" placeholder='Your name' required/>}
          <input type="email" placeholder='Your email' required/>
          <input type="password" placeholder='password' required/>
        </div>

        <button>{currState === "Sign Up" ? "Create Account" : "Log In"}</button>
        <div className='login-popup-condition'>
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        <p>Create a new account? <span>Click here</span></p>

      </form>
    </div>
  )
}

export default LoginPopup
