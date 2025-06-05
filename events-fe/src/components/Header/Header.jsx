import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({menu, setMenu}) => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Welcome to Evently!</h2>
        <p>A platform for viewing the latest events in your area.</p>
        <Link to={'/events'}><button onClick={() => {
            setMenu("events");
          }}>All Events</button></Link>
      </div>
    </div>
  )
}

export default Header
