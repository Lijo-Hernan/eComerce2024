import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartProd from '../cartProd/CartProd';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import classes from './cart.module.css'
import { BsCart3 } from "react-icons/bs";
import Loader from '../loader/Loader';

const Cart = () => {

const {cart, vaciarCarrito, total} = useContext(CartContext)

const [cargando, setCargando] = useState (true)


if (!cart || cart.length === 0) {
    
    setTimeout (() =>{
        setCargando(false)
    },500)
    
    return (  
            cargando ?
            <span className={classes.loader}><Loader/></span>
            : 
            <article>
                    <div className={classes.cart__container}>
                        <BsCart3/>
                        <h2 className={classes.cart__h2}>El carrito está vacío.</h2>
                        <Link to='/' className='btn btn-primary btn-lg'>Volver al inicio</Link>
                    </div>
            </article>
            )    
}

setTimeout (() =>{
    setCargando(false)
},500)

return ( 
        cargando ?
        <span className={classes.loader}><Loader/></span>
        :
        <div className={classes.cart__list}>
            {cart.map((producto) => (
                <CartProd key={producto.id} {...producto}/>
            ))}

            <article className={classes.botones}>
                <Link to='/cart' onClick={()=>{vaciarCarrito()}}><Button className={classes.boton} variant="warning">Vaciar Carrito</Button></Link>
                <Link to='/checkout'><Button className={classes.boton} variant="success">Finalizar Compra por: ${total}</Button></Link>
            </article>
        </div>
    ); 
};

export default Cart;