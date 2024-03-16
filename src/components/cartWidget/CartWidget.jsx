import React from 'react';
import classes from './cartWidget.module.css'
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className={classes.container}>
            <Link to='/cart' className={classes.carrito}>
                <BsCart3/>
                <p className={classes.carrito__p}>0</p>
                </Link>
        </div>
    );
};

export default CartWidget;