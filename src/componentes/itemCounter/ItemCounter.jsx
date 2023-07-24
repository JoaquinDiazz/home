import React, { useContext, useEffect, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import "./itenCounter.css"
import { toast } from 'react-toastify';
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

    const toastify = () => {
      toast.success('Producto agregado', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
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
            toastify();
            agregarProducto(item, cantidad); 
        }}>Agregar al carrito</button>
  </div>
  )
}

export default ItemCounter