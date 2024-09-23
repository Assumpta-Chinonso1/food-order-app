import React from 'react'
import './Footer.css'
import { assests } from '../../assets/assests'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
  <div className="footer-content">
      <div className="footer-content-left">
           <img className='logo' src={assests.logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam soluta fugit laudantium sapiente quidem, est corporis. Eveniet ratione non ducimus, ex optio ipsam rerum, mollitia hic maiores quasi consectetur fuga?</p>
           <div className="footer-social-icon">
            <img  src={assests.twitter} alt="" />
            <img src={assests.linkedline}alt="" />
            <img src={assests.insta} alt="" />
        
           </div>

      </div>
      <div className="footer-content-right">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>

      </div>
      <div className="footer-content-center">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li> +175-378-239 </li>
                <li>assumptiousmeal@314.com</li>
            </ul>
      </div>
  </div>

       <hr />
       <p className="footer-copy-right">Copyright 2024 @assumptiousmeal - All Right Resseverd.</p>
    </div>
  )
}

export default Footer