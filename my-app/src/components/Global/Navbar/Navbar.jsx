import { Link } from '@mui/material'

import { MenuItems } from '../../../data/MenuItems';
import './Navbar.css'
import React, { useState } from 'react';


const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>Trippy</h1>
      <div className='menu-icons' onClick={handleChange}>
        <i className={isToggled ? 'fas fa-times' : 'fas fa-bars'}></i>

      </div>
      <ul className={isToggled ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (

            <li key={index}>
              <a className={item.cName} href={item.url}>

                <i className={item.icon}></i>{item.title}

              </a>
            </li>
          )
        })}
        <button>Sign Up</button>

      </ul>
    </nav>
  )
}

export default Navbar
