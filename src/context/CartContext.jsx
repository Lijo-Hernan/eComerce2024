import React, { useState, createContext, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext= createContext()

const cartLocal = JSON.parse(localStorage.getItem('cart'))|| [];


export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState(cartLocal);

    const addItem = (prodACart) => {
    if (!isInCart(prodACart.id)) {

        setCart((prev) => [...prev, prodACart]);
        toast.success('Producto agregado correctamente' , {theme: "colored"});
    } else {
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
        return Number(acumulador.toFixed(2))
    }
    
    const total = precioTotal()

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
        toast.info('Producto retirado de su carrito', {theme:'colored'});
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

return (
    <CartContext.Provider value={{ cart, addItem, cantidadTotal, vaciarCarrito, total, removeItem }}>
        <ToastContainer autoClose={2000}/>
        {children}
    </CartContext.Provider>
);
};
