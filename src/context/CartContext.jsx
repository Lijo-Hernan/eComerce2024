import React, { useState, createContext } from 'react'
import { usarNotificacion } from './notification/Notification';
import { Link } from 'react-router-dom';

export const CartContext= createContext()


export const CartProvider = ({ children }) => {
    
    const {notificacionParaMostrar}=usarNotificacion()

    const [cart, setCart] = useState([]);

    const addItem = (prodACart) => {
    if (!isInCart(prodACart.id)) {

        setCart((prev) => [...prev, prodACart]);
        notificacionParaMostrar('exito', 'Prducto agregado Correctamente')
    } else {

        notificacionParaMostrar('otro', 'El Producto ya esta en el carrito');
        
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

return (
    <CartContext.Provider value={{ cart, addItem, cantidadTotal }}>
        {children}
    </CartContext.Provider>
);
};
