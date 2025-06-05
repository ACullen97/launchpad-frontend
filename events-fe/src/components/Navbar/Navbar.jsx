import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./Navbar.css";
import account from "../../assets/account.png";

const Navbar = ({ setShowLogin, setShowSignUp, token, setToken, menu, setMenu }) => {
  

  const navigate = useNavigate;

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className="navbar">
        <Link to="/">
      <h1  onClick={() => {
            setMenu("home");
          }} className="logo-title">Evently.</h1>
      </Link>

      <div className="navbar-search">
        <div className="navbar-search-icon">
          <p style={{color: "white"}}>Search Events</p>
        </div>
      </div>

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
          <>
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
          </>
        ) : (
          <div className={"navbar-profile"}>
          <img className={"account-icon"} src={account} alt="account" />
    
            <ul className="nav-profile-dropdown">
              <li><a href="http://localhost:5174/add" target="_blank">Account</a></li>
              <li onClick={logout}>Log Out</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
