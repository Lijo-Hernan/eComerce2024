import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartProd from '../cartProd/CartProd';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './cart.module.css'

const Cart = () => {

const {cart} = useContext(CartContext)

if (!cart || cart.length === 0) {

    return  <article className='card'>
                    <div className={`${classes.cart__container} "card-body"`}>
                        <h2 className={classes.cart__h2}>El carrito está vacío.</h2>
                        <Link to='/' className='btn btn-primary'>Volver al inicio</Link>
                    </div>
            </article>;    
}

    return (
        <div>
            {cart.map((producto) => (
                <CartProd 
                    key={producto.id}
                    {...producto}
                />
            ))}
        </div>
    );
};

export default Cart;