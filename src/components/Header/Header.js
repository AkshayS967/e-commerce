import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'  

const Header = () => {
  return (
    <div>
        <nav className='header nav-1'>
            <ul>
                <li>
                    <NavLink to='/'>
                        <img src='' alt='logo' />
                    </NavLink>
                </li>
                <li>
                    <div className='search'>
                        <input className='lb'></input>
                        <button className='btn'>
                            Search
                        </button>
                    </div>
                </li>
                <li>
                    <NavLink to='/account' >Account</NavLink>
                </li>
                <li>
                    <NavLink to='/cart' >Cart</NavLink>
                </li>
            </ul>
        </nav>

        <nav className='header nav-2'>
            <ul>
                <li>
                    <NavLink to='/women' >Women</NavLink>
                </li>
                <li>
                    <NavLink to='/men' >Men</NavLink>
                </li>
                <li>
                    <NavLink to='/gear' >Gear</NavLink>
                </li>
            </ul>
            <p>Free Shipping</p>
        </nav>
    </div>
  )
}

export default Header