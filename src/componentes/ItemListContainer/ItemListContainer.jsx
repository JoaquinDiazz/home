import React from 'react'
import "./itemListContainer.css"

const ItemListContainer = (props) => {
  return (
    <div className='greeting'>
        <h2> {props.greetings} </h2>
    </div>
  )
}

export default ItemListContainer