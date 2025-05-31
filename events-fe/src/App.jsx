import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Events from './pages/Events/Events.jsx'
import ViewEvent from './pages/ViewEvent/ViewEvent.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import SignUpPopup from './components/SignUpPopup/SignUpPopup.jsx'


const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  const [showSignUp, setShowSignUp] = useState(false);

  const [token, setToken] = useState("");

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} setToken={setToken}/> : <></>}
     {showSignUp ? <SignUpPopup setShowSignUp={setShowSignUp} setToken={setToken}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} token={token} setToken={setToken}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/events/:id" element={<ViewEvent/>}/>
      </Routes>


    </div>

    <Footer/>

      </>
  )

}

export default App
