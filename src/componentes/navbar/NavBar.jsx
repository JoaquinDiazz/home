import "./navBar.css"
import { CartWidget } from "../cartWidget/CartWidget"
import Links from "../Links/Links"
import Logo from "../logo/Logo"
import { useState } from "react"
import { Link } from "react-router-dom" 



export const NavBar = () => {

  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

    return  (
        <header>
          <button className="menu" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"viewBox="0 0 16 16">
              <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
          <Logo />
          <nav className={menu ? "active" : ""}>
              <Links setMenu={setMenu}/>
          </nav>
          <CartWidget />
        </header>
)}