import React from 'react'
import './MobileButton.css'
import { NavLink } from 'react-router-dom'

const MobileButton = () => {
  return (
    <div className='mobile-button-container'>
      <div className='mobile-button-left'>        <NavLink to={'/add'} className="sidebar-option">Add Event</NavLink></div>
      <div className='mobile-button-right'>   <NavLink to={'/list'} className="sidebar-option">List Events</NavLink></div>
    </div>
  )
}

export default MobileButton
