import { createContext, useContext, useState } from "react";



export const CarritoContext = createContext()

export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarProducto = (item, cantidad) => {

        const productoAgregado = carrito.find(prod => prod.id === item.id)
        
        if (!productoAgregado) {
            setCarrito(prev => [...prev, {...item, cantidad}])
        } else {
            const carritoActualizado = carrito.map( prod => {
                if(prod.id === item.id) {
                    return {...prod, cantidad:prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
        }
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }
    
    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.id !== id)
        setCarrito(carritoActualizado)
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioSubTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const costoEnvio = () => {
        return precioSubTotal() >  39999 ? 0 : 1999 
    }

    const precioFinal = () => {
        return precioSubTotal() + costoEnvio()
    }

    return (
       <CarritoContext.Provider value={ {precioFinal, precioSubTotal, costoEnvio, cantidadEnCarrito, carrito, vaciarCarrito, eliminarProducto, agregarProducto} }>
            {children}
       </CarritoContext.Provider>
    )

}