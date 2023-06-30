import React, { useState } from 'react'
import "./itemList.css"
import { Link } from "react-router-dom"

const ItemList = ( {productos, titulo} ) => {

  function mayus(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  return (
    <div>
        <div>
            <h2 className='titulo'>{mayus(titulo)}</h2>
        </div>
        <div   className='productos'>
            {productos.length > 0  && 
            
            productos.map((prod) => {
            
            return <div key={prod.id} className="card">
                        <img src={prod.img} alt={prod.nombre}/>
                        <h3>{prod.nombre}</h3>
                        <p>Precio: ${prod.precio}</p>
                        <Link to={`/item/${prod.id}`} className='verMas'>Ver mas</Link>
                    </div>
            })}
        </div>
    </div>
  )
}

export default ItemList