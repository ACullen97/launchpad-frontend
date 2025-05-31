import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setShowLogin, setShowSignUp, token, setToken }) => {
  const [menu, setMenu] = useState("home");

  const navigate = useNavigate;

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className="navbar">
      <h1 className="logo-title">Evently.</h1>

      <div className="navbar-search">
        <div className="navbar-search-icon">
          <p>Search Events</p>
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
          Contact
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
            <p>Profile Icon</p>
            <ul className="nav-profile-dropdown">
              <li>Account</li>
              <li onClick={logout}>Log Out</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
