import React, { useState } from "react";
import "./SignUpPopup.css";
import { useEffect } from "react";
import axios from "axios";

const SignUpPopup = ({ setShowSignUp }) => {
  const [currState, setCurrState] = useState("Sign Up");

  const [data, setData] = useState({ name: "", email: "", password: "" });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSignUp = async (e) => {
    e.preventDefault();

    let newUrl = "http://localhost:4000";

    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setShowSignUp(false);
    } else {
      alert(response.data.message);
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="login-popup">
      <form onSubmit={onSignUp} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <button onClick={() => setShowSignUp(false)}>X</button>
        </div>

        <div className="login-popup-inputs">
          {currState === "Log In" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="password"
            required
          />
        </div>

        <button>{currState === "Sign Up" ? "Create Account" : "Log In"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Log in" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Log In")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SignUpPopup;
