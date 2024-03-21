import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; 
import classes from './cartWidget.module.css'
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CartWidget = () => {
const {cantidadTotal} = useContext(CartContext)

    return (
        <div className={classes.container}>
            <Link to='/cart' className={classes.carrito}>
                <BsCart3/>
                <p className={classes.carrito__p}>{cantidadTotal}</p>
                </Link>
        </div>
    );
};

export default CartWidget;