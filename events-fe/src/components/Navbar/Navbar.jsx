import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <h1>Evently.</h1>

<div className="navbar-search">

        <div className="navbar-search-icon">
          <p>Search Events</p>
        </div>

      </div>

      <ul className="navbar-menu">
        <li onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>{setMenu("events")}} className={menu==="events"?"active":""}>Events</li>
        <li onClick={()=>{setMenu("contact")}} className={menu==="contact"?"active":""}>Contact</li>
 
      </ul>
<div className="navbar-right">

    <button>Log In</button>
        <button>Sign Up</button>

</div>
           
      
    </div>
  );
};

export default Navbar;
