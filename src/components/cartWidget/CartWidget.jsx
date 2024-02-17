import React from 'react';
import classes from './cartWidget.module.css'
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div className= {classes.carrito}>
            <BsCart3 />
            <p className='cartWidget__p'>0</p>
        </div>
    );
};

export default CartWidget;