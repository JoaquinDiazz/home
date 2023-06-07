import "./navBar.css"
import { CartWidget } from "../cartWidget/CartWidget"


export const NavBar = () => {

    return  (
        <header>
          <h1>HOME.</h1>
          <nav>
            <ul>
              <li>Muebles</li>
              <li>Electrodomesticos</li>
              <li>Plantas</li>
              <li>Lamparas</li>
            </ul>
          </nav>
          <CartWidget />
        </header>
)}