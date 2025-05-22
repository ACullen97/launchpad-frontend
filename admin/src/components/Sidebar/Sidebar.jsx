import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to={'/add'} className="sidebar-option">
          Add Event
        </NavLink>
        <NavLink to={'/list'} className="sidebar-option">
          List Events
        </NavLink>
        <div className="sidebar-option">
          Options
        </div>
      </div>
    </div>
  )
}

export default Sidebar
