import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./Navbar.css";
import account from "../../assets/account.png";
import Hamburger from "../Hamburger/Hamburger";

const Navbar = ({
  setShowLogin,
  setShowSignUp,
  token,
  setToken,
  menu,
  setMenu,
}) => {
  const navigate = useNavigate;

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-contents">
          <Link to="/">
            <h1
              onClick={() => {
                setMenu("home");
              }}
              className="logo-title"
            >
              Evently.
            </h1>
          </Link>

          <ul className="navbar-menu">
            <li
              onClick={() => {
                setMenu("home");
              }}
              className={menu === "home" ? "active" : ""}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => {
                setMenu("events");
              }}
              className={menu === "events" ? "active" : ""}
            >
              <Link to="/events">Events</Link>
            </li>
            <li
              onClick={() => {
                setMenu("contact");
              }}
              className={menu === "contact" ? "active" : ""}
            >
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className="navbar-right">
            {!token ? (
              <div className="navbar-right-logged-out">
                <button
                  onClick={() => {
                    setShowLogin(true);
                  }}
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setShowSignUp(true);
                  }}
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <div className={"navbar-profile"}>
                <img className={"account-icon"} src={account} alt="account" />

                <ul className="nav-profile-dropdown">
                  <li>
                    <a href="https://launchpad-frontend-admin.onrender.com/" target="_blank">
                      Account
                    </a>
                  </li>
                  <li onClick={logout}>Log Out</li>
                </ul>
              </div>
            )}

             <button
            onClick={() => {
              setShow(!show);
              console.log(show, "status");
            }}
            className={"hamburger"}
          >
            <div className={"hamburger-outer"}>
              <div className="hamburger-inner"></div>
              <div className="hamburger-inner"></div>
              <div className="hamburger-inner"></div>
            </div>
          </button>
        </div>
      </div>
      <div className={show ? "show" : "hide"}>
        <Hamburger
          show={show}
          setShow={setShow}
          setShowLogin={setShowLogin}
          setShowSignUp={setShowSignUp}
          token={token}
          setToken={setToken}
          menu={menu}
          setMenu={setMenu}
        />
      </div>
          </div>

         
    </>
  );
};

export default Navbar;
