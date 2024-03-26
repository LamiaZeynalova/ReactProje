import React from 'react'
import "./footer.css"
import { FaHeart } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="footerarea">
          <h3>Help</h3>
          <ul>
            <li>Contact us</li>
            <li>Account</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>  
        <div className="footerarea">
          <h3>About</h3>
          <ul>
            <li>About us</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Team</li>
            <li>FAQ</li>
          </ul>
        </div> 
        <div className="footerarea">
          <h3>Shop</h3>
          <ul>
            <li>Store</li>
            <li>Gift Cards</li>
            <li>Student Discount</li>
          </ul>
        </div> 
        <div className="footeremail">
          <h3>Join our list and receive exclusives</h3>
          <div className="input">
            <input type="text" placeholder='Email adress'/>
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>  
      <div className="footerend">
        <p>Copyright ©2024 All rights reserved | This template is made with <FaHeart className="heartIcon" />
           by <a href="https://colorlib.com" target="_blank" style={{ color: 'rgb(73, 73, 73)'}}>Colorlib</a>
           </p>
      </div>
    </>
  )
}

export default Footer