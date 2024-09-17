import React from 'react'
import './Navbar.css'
import { assests } from '../../assets/assests'

const Navbar = () => {
  return (
    <div className='navbar'>
      
      <img className='logo' src={assests.logo} alt="" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact us</li>
      </ul>
      </div>
  )
}

export default Navbar