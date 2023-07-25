import React, { useContext, useEffect, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import "./itenCounter.css"
import 'react-toastify/dist/ReactToastify.css';

const ItemCounter = ( {item} ) => {

  const { carrito, agregarProducto} = useContext(CarritoContext);


    const [cantidad, setCantidad] = useState(1) 

    const restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const sumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1) 
    }

  return (
    <div className='cantidadContainer'>
        <div className="cantidad">
            <p>Cantidad</p>
            <div className='numeros'>
                <p onClick={restar}>-</p>
                <p>{cantidad}</p>
                <p onClick={sumar}>+</p>
            </div>
        </div>
        <button 
        className='button'
          onClick={ () => {
            agregarProducto(item, cantidad); 
        }}>Agregar al carrito</button>
  </div>
  )
}

export default ItemCounter