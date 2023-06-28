import React, { useState, useEffect } from 'react'
import ItemDetail from '../itemDetails/ItemDetail'
import { useParams } from 'react-router-dom'
import { pedirItemDetail } from '../../helpers/pedirItemDetail'

const ItemDetailsContainer = () => {

        const id = useParams().id;

        const [itemId, setItemId ] = useState(null)
 
        useEffect(() => {
            
            pedirItemDetail(Number(id))
                .then(resolve => {
                    setItemId(resolve)
                })
                .catch((error) => {
                    console.error(error);
                  });
        }, [id])


  return (
    <div>
      { itemId && <ItemDetail item={itemId}/>}
    </div>
  )
}

export default ItemDetailsContainer