import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import "./cartWidget.css"

export const CartWidget = () => {

  const {cantidadEnCarrito} = useContext(CarritoContext)

  return (
    <div className='cartWidget'>
      <li><NavLink to="/carrito">
        <i className="bi bi-cart2">
          {
            cantidadEnCarrito() > 0 &&
            <span>{cantidadEnCarrito()}</span>

          }
        </i>
      </NavLink></li> 
    </div>

  )
}

