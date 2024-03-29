import React, { useContext, useEffect, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import ItemCounter from '../itemCounter/ItemCounter'
import "./itemDetail.css"

const ItemDetails = ( {item} ) => {  

  const [imagen, setImagen] = useState(item.img)
    
  function imagenHandle(img) {
    setImagen(img)
  }

const consologear = () => {
  console.log(item)
}
  return (
    <div className='itemDetail'>

        <div className='nombreYPrecioMobile'>
          <div className="container">
            <div className="nombre">
              <h2>{item.nombre}</h2>
              <div className="reviews">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <p>{item.reviews}k</p>
              </div>
              <p></p>
            </div>
            <p className='precio'>${item.precio}</p>
          </div>
        </div>

        <div className='imgContainer'>
          <img src={imagen} alt={item.nombre} />
          <div className='secondaryImg'>
            <img src={item.img} alt={item.nombre} onClick={() => imagenHandle(item.img)} />
            <img src={item.img2} alt={item.nombre} onClick={() => imagenHandle(item.img2)} />
            <img src={item.img3} alt={item.nombre} onClick={() => imagenHandle(item.img3)} />
            <img src={item.img4} alt={item.nombre} onClick={() => imagenHandle(item.img4)} />
          </div>
        </div> 
        
        <div className='detalles'>
            <div className='nombreYPrecio'>
              <div className="nombre">
                <h2>{item.nombre}</h2>
                <div className="reviews">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <p>{item.reviews}k</p>
                </div>
                <p></p>
              </div>
              <p className='precio'>${item.precio}</p>
            </div>
            <div  className='descripcion'>
              <h4>Descripcion</h4>
              <p>{item.descripcion}</p>
            </div>
            <ItemCounter item={item}/>
        </div>

    </div>
  )
}

export default ItemDetails