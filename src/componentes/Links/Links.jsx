import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./links.css"

const NavLinks = ( {setMenu} ) => {

  const closeMenu = () => {
    setMenu && setMenu(false)
    window.scrollTo({ top: 0 });
  }

  return (
    <ul>
      <li><Link to="/productos" onClick={closeMenu}>Productos</Link></li>
      <li><Link to="/productos/mesas" onClick={closeMenu}>Mesas</Link></li>
      <li><Link to="/productos/sillas" onClick={closeMenu}>Sillas</Link></li>
      <li><Link to="/productos/sofas" onClick={closeMenu}>Sofas</Link></li>
      <li><Link to="/productos/lamparas" onClick={closeMenu}>Lamparas</Link></li>
    </ul>
  )
}

export default NavLinks