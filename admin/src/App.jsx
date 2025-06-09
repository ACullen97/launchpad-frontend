import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import MobileButton from './components/MobileButton/MobileButton.jsx'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'


const App = () => {

const url = "https://launchpad-frontend-dcao.onrender.com" 

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <MobileButton/>
      <div className="app-content">
      <Sidebar/>
      <Routes>

        <Route path="/add" element={<Add url={url}/>}/>
        <Route path="/list" element={<List url={url}/>}/>

      </Routes>
      </div>
      
    </div>
  )
}

export default App
