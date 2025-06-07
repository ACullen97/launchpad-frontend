import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Events from './pages/Events/Events.jsx'
import ViewEvent from './pages/ViewEvent/ViewEvent.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import SignUpPopup from './components/SignUpPopup/SignUpPopup.jsx'
import About from './components/About/About.jsx'


const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  const [showSignUp, setShowSignUp] = useState(false);

  const [token, setToken] = useState("");

  const [menu, setMenu] = useState("home");

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} setToken={setToken}/> : <></>}
     {showSignUp ? <SignUpPopup setShowSignUp={setShowSignUp} setToken={setToken}/> : <></>}

       <Navbar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} token={token} setToken={setToken} menu={menu} setMenu={setMenu}/>
    <div className='app'>
    
      <Routes>
        <Route path="/" element={<Home  menu={menu} setMenu={setMenu}/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/events/:id" element={<ViewEvent/>}/>
        <Route path="/about" element={<About/>}></Route>
      </Routes>


    </div>

    <Footer/>

      </>
  )

}

export default App
