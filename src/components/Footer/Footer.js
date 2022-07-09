import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li><Link to=''>About Us</Link></li>
        <li><Link to=''>Member News</Link></li>
        <li><Link to=''>Special Privileges For Members</Link></li>
      </ul>
      <ul>
        <li><Link to=''>Discount Coupon</Link></li>
        <li><Link to=''>FAQ</Link></li>
        <li><Link to=''>Warranty Terms</Link></li>
      </ul>
      <ul>
        <li><Link style={{ textDecoration: 'none' }} to=''>130 Nguyen Duc Canh, Hoang Mai, Ha Noi</Link></li>
        <li><Link to=''>+84 988 358 143</Link></li>
      </ul>
    </div>
  )
}

export default Footer