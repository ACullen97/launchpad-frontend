import React, { useState } from "react";
import "./LoginPopup.css";
import axios from "axios";

const LoginPopup = ({ setShowLogin, setToken }) => {
  const [currState, setCurrState] = useState("Log In");
  const [data, setData] = useState({ name: "", email: "", password: "" });


  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data, [name]:value}))
  }


  const onLogin = async (e) => {
      e.preventDefault();
      
  let newUrl ="http://localhost:4000";

  if(currState==="Log In"){
    newUrl += "/api/user/login"
  }
  else{
    newUrl += "/api/user/register"
  }

  const response = await axios.post(newUrl, data);

  if(response.data.success){
    setToken(response.data.token);
    localStorage.setItem("token", response.data.token)
    setShowLogin(false)
  }
  else{
    alert(response.data.message)
  }

  } 

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <button onClick={() => setShowLogin(false)}>X</button>
        </div>

        <div className="login-popup-inputs">
          {currState === "Log In" ? (
            <></>
          ) : (
            <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required />
          )}
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your email" required />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="password" required />
        </div>

        <button type = "submit">{currState === "Sign Up" ? "Create Account" : "Log In"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Log in" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Log In")}>Login here</span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
