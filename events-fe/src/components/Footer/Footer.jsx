import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">&copy; Evently 2025</div>
       <Link to={"/about"}> <div className="footer-content-center">Contact Us</div></Link>
        <div className="footer-content-right">Privacy Policy</div>
      </div>
    </div>
  )
}

export default Footer
