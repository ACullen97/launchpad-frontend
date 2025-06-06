import React from "react";
import "./Hamburger.css";
import { Link } from "react-router-dom";

const Hamburger = ({setShow, token, setToken, setShowLogin, show}) => {
  return (
    <div className={"hamburger-dropdown"}>
      <div className={"hamburger-dropdown-left"}></div>
      <div className={"hamburger-dropdown-right"}>
        <Link to="/" onClick={() => setShow(false)}>
        <div className="hamburger-menu-item">
          <p>Home</p>
        </div>
        </Link>
        <Link to="/events" onClick={() => setShow(false)}>
        <div className="hamburger-menu-item">
          <p>Events</p>
        </div>
        </Link>
        <Link to="/about" onClick={() => setShow(false)}>
        <div className="hamburger-menu-item">
          <p>About</p>
        </div>
        </Link>
        <div>
            {!token ? (
            <>
              <div className={"hamburger-menu-item"}
                onClick={() => {
                  setShowLogin(true);
                  setShow(!show);
                }}
              >
                Log In
              </div>
              <div
                onClick={() => {
                  setShowSignUp(true);
                  setShow(!show);
                }}
              >
                Sign Up
              </div>
            </>
          ) : (
        <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
