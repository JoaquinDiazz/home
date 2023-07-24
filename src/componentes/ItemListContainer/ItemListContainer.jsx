import React, { useEffect, useState } from 'react'
import "./itemListContainer.css"
import data from "../../products.json"
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { database } from '../../firebase/config'

const ItemListContainer = (props) => {
  
  let [productos, setProductos] = useState([])

  const [titulo, setTitulo] = useState("Nuestros Productos")

  // const pedirProductos = () => {
  //   return new Promise((resolve, reject) => {
  //     resolve(data)
  //   })
  // }

  const categoria = useParams().categoria

  
  useEffect(() => {
    
    const productosRef = collection(database, "productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(q)
      .then((res) => {

        setProductos(
          res.docs.map((doc) => {
            return {... doc.data(), id: doc.id}
          })
        )

        setTitulo(categoria || "Nuestros Productos")
      })

  }, [categoria])

  return (
    <div className='itemListContainer'>
        <ItemList productos={productos} titulo={titulo}/>
    </div>
  )
}

export default ItemListContainer