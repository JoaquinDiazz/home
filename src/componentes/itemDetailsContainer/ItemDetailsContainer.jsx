import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from '../itemDetails/ItemDetail'
import { useParams } from 'react-router-dom'
import { pedirItemDetail } from '../../helpers/pedirItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { database } from '../../firebase/config'
import "./itemDetailsContainer.css"

const ItemDetailsContainer = () => {



  const id = useParams().id;

  const [item, setItem ] = useState(null)
 
  useEffect(() => {
            
    const docRef = doc(database, "productos", id)

    getDoc(docRef)
      .then((res) => {
        setItem(
          {...res.data(), id: res.id}
        )
      })

  }, [id])


  return (
    <div className='itemDetailsContainer'>
      { item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailsContainer