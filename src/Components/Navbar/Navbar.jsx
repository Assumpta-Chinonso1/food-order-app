import React, { useState } from 'react'
import './Navbar.css'
import { assests } from '../../assets/assests'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLoginForm}) => {
   const [menu, setMenu] = useState("Home")

  return (
    <div className='navbar'>
      
    <Link to='/'> <img className='logo' src={assests.logo} alt="" /> </Link> 
      <ul className="navbar-menu">
        <Link onClick={()=> setMenu("Home")} className={menu==="Home"?"active":""} >Home</Link>
        <a  href='#explore-menu' onClick={()=> setMenu("Menu")} className={menu==="Menu"?"active":"Menu"} >Menu</a>
        <a  href='#app-download' onClick={()=> setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""} >Mobile-app</a>
        <a  href='#footer' onClick={()=> setMenu("Contact Us")} className={menu==="Contact Us"?"active":""} >Contact us</a>
      </ul>
      <div className="navbar-right">
        <img className='search' src={assests.search} alt="" />
        <div className="navbar-search-icon">
         <Link to='/cart'><img className='basket' src={assests.basket} alt="" /></Link> 
          <div className="sign"></div>
        </div>
        <button onClick={()=> setShowLoginForm(true)}>Sign In</button>
      </div>
      </div>
  )
}

export default Navbar