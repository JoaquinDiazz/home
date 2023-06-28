import React, { useEffect, useState } from 'react'
import "./itemListContainer.css"
import data from "../../products.json"
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
  
  let [productos, setProductos] = useState([])

  const [titulo, setTitulo] = useState("Nuestros Productos")

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }

  const categoria = useParams().categoria

  useEffect(() => {
    pedirProductos()
      .then(res => {

        if(categoria) {
          setProductos(res.filter(res => categoria === res.categoria))
          setTitulo(categoria)
        } else {
          setProductos(res)
          setTitulo("Nuestros Productos")
        }

      })
  }, [categoria])
  


  return (
    <div>
        <ItemList productos={productos} titulo={titulo}/>
    </div>
  )
}

export default ItemListContainer