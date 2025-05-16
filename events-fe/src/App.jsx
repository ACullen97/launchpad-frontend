import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Events from './pages/Events/Events.jsx'
import ViewEvent from './pages/ViewEvent/ViewEvent.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
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
