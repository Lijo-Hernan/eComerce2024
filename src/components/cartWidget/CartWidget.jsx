import React from 'react';
import classes from './cartWidget.module.css'
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div className={classes.container}>
            <a href="" className={classes.carrito}>
                <BsCart3/>
                <p className={classes.carrito__p}>0</p>
                </a>
        </div>
    );
};

export default CartWidget;