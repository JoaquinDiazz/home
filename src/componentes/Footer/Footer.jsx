import React from 'react'
import Links from '../Links/Links'
import Logo from '../logo/Logo'
import "./footer.css"

const Footer = () => {

  return (
    <footer>
        <Links/>
        <Logo />
        <p>© Copyright. Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer