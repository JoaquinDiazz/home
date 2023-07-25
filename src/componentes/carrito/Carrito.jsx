import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import "./carrito.css"
import 'react-toastify/dist/ReactToastify.css';

const Carrito = () => {

    const {carrito, precioFinal, costoEnvio, precioSubTotal, vaciarCarrito, eliminarProducto} = useContext(CarritoContext) 

  return (
    <div className='carrito'>
        {
            carrito.length > 0 
            ? 
            <div className="tituloo">
                <h2 className='tuCarrito'>Tu carrito</h2>
            </div>
            :
            <div className='carritoVacio'>
                <h3>Tu carrito esta vacio</h3>
                <Link to={"/"}> <button className='button'>Seguir comprando</button> </Link>
            </div>
        }        
        <div className='contenido'>
            <div className="productos">
                 {
                    carrito.map((prod) => {
                    return  <div className="producto" key={prod.id}>
                                <img src={prod.img} alt={prod.nombre} />
                                <div className="container">
                                    <div>
                                        <h3>{prod.nombre}</h3>
                                        <p className='precio'>${prod.precio}</p>
                                    </div>
                                    {
                                    prod.cantidad === 1 
                                    ? <p>{prod.cantidad} item</p> 
                                    : <p>{prod.cantidad} items</p>
                                    }
                                    <button className="button" onClick={() => {
                                        eliminarProducto(prod.id)
                                    }}>
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                    })
                }
                {
                carrito.length > 0 &&                 
                <Link to={"/"}> <button className='button'>Seguir comprando</button> </Link>
                }
            </div>
        {
            carrito.length > 0 &&
            <div className='precioTotal'>
                <h4>Resumen de Compra</h4>
                <p className='envios'>Envios gratis a partir de $39999</p>
                <div>
                    <p>Cantidad de items: </p>
                    <p>{carrito.length}</p>
                </div>
                <div>
                    <p>Subtotal: </p>
                    <p>${precioSubTotal()}</p>
                </div>
                <div>
                    <p>Costo de Envio: </p>
                    <p>${costoEnvio()}</p>
                </div>
                <div>
                    <p>Precio Final: </p>
                    <p>${precioFinal()}</p>
                </div>
                <Link to={"/checkout"}><button className="button">Finalizar compra</button></Link>
                <p onClick={vaciarCarrito} className="vaciar">Vaciar carrito</p>
            </div>
        
        }
        </div>
    </div>
  )
}

export default Carrito