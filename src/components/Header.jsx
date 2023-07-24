import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'react-bootstrap-icons'
import MobileMenu from './MobileMenu'

const Header = () => {
  // declare on and off state for the navbar
  const [menuIsOpen, openMenu] = useState(false)

  // toggles the state of openMenu
  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle('no-scroll');
  }

  return (
    <>
      <div id='topnav'>
        <div id='logo'>

        </div>

        {/* Desktop Menu- only appears on large screens */}
        <ul id='menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>

        {/* Hamburger icon - only show on small screens */}
        <div id='menu-container'>
          <div id='menu-button' className='show-mobile-menu-button' onClick={toggleMobileMenu}>
            <List id='hamburger-icon'/>
          </div>
        </div>

      </div>

      {/* If menuIsOpen, show the mobile menu */}
      {/* give the mobile menu our close method (toggleMobileMenu), as a prop, so you can close the mobile by clicking on either the 'X' icon or on a link */}
      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}
      {/* If menuIsOpen, show the close button */}


    </>
  )
}

export default Header