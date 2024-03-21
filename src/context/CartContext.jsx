import React, { useState, createContext } from 'react'

export const CartContext= createContext(1)

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (prodACart) => {
    if (!isInCart(prodACart.id)) {
        setCart((prev) => [...prev, prodACart]);
    } else {
        console.error("El producto ya fue agregado");
    }
    };

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
