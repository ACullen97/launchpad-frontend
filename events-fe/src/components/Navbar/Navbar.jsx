import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({setShowLogin, setShowSignUp}) => {

  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <h1 className="logo-title">Evently.</h1>

<div className="navbar-search">

        <div className="navbar-search-icon">
          <p>Search Events</p>
        </div>

      </div>

      <ul className="navbar-menu">
        <li onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}><Link to="/">Home</Link></li>
        <li onClick={()=>{setMenu("events")}} className={menu==="events"?"active":""}><Link to="/events">Events</Link></li>
        <li onClick={()=>{setMenu("contact")}} className={menu==="contact"?"active":""}>Contact</li>
 
      </ul>
<div className="navbar-right">

    <button onClick={() => {setShowLogin(true)}}>Log In</button>
    <button onClick={() => {setShowSignUp(true)}}>Sign Up</button>

</div>
           
      
    </div>
  );
};

export default Navbar;
