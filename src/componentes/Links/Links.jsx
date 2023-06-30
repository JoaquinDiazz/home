import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./links.css"

const NavLinks = ( {setMenu} ) => {

  const closeMenu = () => {
    setMenu && setMenu(false)
    window.scrollTo({ top: 0 });
  }

  return (
    <ul>
      <li><NavLink to="/productos" onClick={closeMenu}>Productos</NavLink></li>
      <li><NavLink to="/productos/mesas" onClick={closeMenu}>Mesas</NavLink></li>
      <li><NavLink to="/productos/sillas" onClick={closeMenu}>Sillas</NavLink></li>
      <li><NavLink to="/productos/sofas" onClick={closeMenu}>Sofas</NavLink></li>
      <li><NavLink to="/productos/lamparas" onClick={closeMenu}>Lamparas</NavLink></li>
    </ul>
  )
}

export default NavLinks