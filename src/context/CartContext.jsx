import React, { useState, createContext } from 'react'
// import { usarNotificacion } from './notification/Notification';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext= createContext()


export const CartProvider = ({ children }) => {
    
    // const {notificacionParaMostrar}=usarNotificacion()

    const [cart, setCart] = useState([]);

    const addItem = (prodACart) => {
    if (!isInCart(prodACart.id)) {

        setCart((prev) => [...prev, prodACart]);
        // notificacionParaMostrar('exito', 'Prducto agregado Correctamente')
        toast.success('Producto agregado correctamente' , {theme: "colored"});
    } else {
        // notificacionParaMostrar('otro', 'El producto ya fue agregado anteriormente al carrito');
        toast.error('El producto ya fue agregado anteriormente al carrito', {theme:'colored'});
        
    }    };

    const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
    };

    const getCantidadTotal = () => {
    let accu = 0;

    cart.forEach((prod) => {
        accu += prod.cuenta;
    });
    return accu;
    };
    const cantidadTotal = getCantidadTotal();

    const vaciarCarrito = () => {
        setCart([])
        toast.warning('Su carrito quedo vacio', {theme:'colored'});

    }

    const precioTotal = () => {
        let acumulador = 0
    
        cart.forEach(prod => {
          acumulador += prod.cuenta * prod.precio
        })
    
        return acumulador
    }
    
    const total = precioTotal()

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
        toast.info('Producto retirado de su carrito', {theme:'colored'});
    }

return (
    <CartContext.Provider value={{ cart, addItem, cantidadTotal, vaciarCarrito, total, removeItem }}>
        <ToastContainer autoClose={2000}/>
        {children}
    </CartContext.Provider>
);
};
