import React from 'react'
import "./checkout.css"
import { database } from '../../firebase/config'
import { useState, useContext } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import {CarritoContext} from "../../context/CarritoContext"


const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, precioFinal, cantidadEnCarrito, vaciarCarrito} = useContext(CarritoContext)
 
    const handleForm = (e) => {

        e.preventDefault();
        
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Complete todos los campos")
            return;
        }
        
        if(email !== emailConfirmacion) {
            setError("Los email no coinciden")
            return;
        }

        const orden = {
            item: carrito.map(prod => ({
                id: prod.id,
                nombre: prod.nombre,
                cantidad: prod.cantidad,
            })),
            total: precioFinal(),
            fecha: new Date(),
            nombre, 
            apellido, 
            telefono,
            email
        }

        addDoc( collection(database, "ordenes"), orden )
            .then(docRef => {
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch(err => {
                console.log(err)
                setError("Ocurrio un error al crear la orden")
            })
    }
    
  return (
    <div className='checkout'>
        {
            !ordenId && <>
        <h2 className='titulo'>Checkout</h2>

        <form onSubmit={handleForm}>

            <div className="tuCompra">
                <div className='itemContainer'>
                {
                    carrito.map(prod => {
                        return  <div className='item' key={prod.id}>
                                    <img src={prod.img} alt={prod.nombre} />
                                    <div className="container">
                                            <p>{prod.nombre}</p>
                                            <p className='precio'>${prod.precio}</p>
                                            {
                                                prod.cantidad === 1 
                                            ? <p>{prod.cantidad} item</p> 
                                            : <p>{prod.cantidad} items</p>
                                            }
                                    </div>
                                </div>  
                               
                            })
                }
                </div>
            </div>

            <div className="forms">
                <h3>Ingrese sus datos para terminar su compra</h3>
                <input type="text" placeholder='Nombre' value={nombre} onChange={(e) =>{setNombre(e.target.value)}}/>
                <input type="text" placeholder='Apellido' value={apellido} onChange={(e) =>{setApellido(e.target.value)}}/>
                <input type="text" placeholder='Telefono' value={telefono} onChange={(e) =>{setTelefono(e.target.value)}}/>
                <input type="email" placeholder='Email' value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
                <input type="email" placeholder='Email Confirmacion' value={emailConfirmacion} onChange={(e) =>{setEmailConfirmacion(e.target.value)}}/>

                {
                    error && <p className='error'> {error} </p>
                }

                <button className="button" type='submit'>Finalizar compra</button>
            </div>
        </form>
        </>
        }
        {
            ordenId && 
            <div className='compraFinalizada'>
                <h3>Gracias por confiar en <span>HOME.</span></h3>
                <p>Tu numero de orden es <span>{ordenId}</span></p>
            </div>
        }
    </div>
  )
}

export default Checkout