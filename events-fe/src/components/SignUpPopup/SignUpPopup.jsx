import React, { useState } from 'react'
import './SignUpPopup.css'

const SignUpPopup = ({setShowSignUp}) => {

        const [currState, setCurrState] = useState('Sign Up');

 return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <button onClick={() => setShowSignUp(false)}>X</button>
        </div>

        <div className="login-popup-inputs">
          {currState === "Log In" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="password" required />
        </div>

        <button>{currState === "Sign Up" ? "Create Account" : "Log In"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
         {currState === "Log in" ? 
           <p>
            Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span>
          </p>
         : 
            <p>
            Already have an account? <span onClick={()=>setCurrState("Log In")}>Login here</span>
          </p> 
        }
      </form>
    </div>
  );
}

export default SignUpPopup
