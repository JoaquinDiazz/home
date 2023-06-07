import "./navBar.css"
import { CartWidget } from "../cartWidget/CartWidget"


export const NavBar = () => {

    return  (
        <header>
          <h1>HOME.</h1>
          <nav>
            <ul>
              <li>Mesas</li>
              <li>Silllas</li>
              <li>Sofas</li>
              <li>Lamparas</li>
            </ul>
          </nav>
          <CartWidget />
        </header>
)}