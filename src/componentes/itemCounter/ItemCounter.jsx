import React, { useEffect, useState } from 'react'
import "./itenCounter.css"

const ItemCounter = ( {item} ) => {

    const [cantidad, setCantidad] = useState(1) 

    const restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const sumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1) 
    }

  return (
    <div className='cantidadContainer'>
        <p className='cantidad'>Cantidad</p>
        <div className='numeros'>
            <p onClick={restar}>-</p>
            <p>{cantidad}</p>
            <p onClick={sumar}>+</p>
        </div>
  </div>
  )
}

export default ItemCounter