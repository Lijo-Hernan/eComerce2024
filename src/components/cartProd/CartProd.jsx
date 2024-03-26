import React from 'react';
import classes from './cartProd.module.css'
import Button from 'react-bootstrap/Button';


const CartProd = ({nombre, marca, precio, cuenta}) => {
    return (
        <div className={classes.card__container}>
                <span className={classes.card__prod}>
                    <p className={classes.card__p}>{marca}</p>
                    <p className={classes.card__p}>{nombre}</p>
                    <p className={classes.card__p}>Precio: ${precio}</p>
                </span>
                <article className={classes.card__article}>
                    <p className={classes.card__cant}>Cantidad solicitada: {cuenta}</p>
                    <Button className={classes.card__boton} variant="warning" >Retirar el producto del carrito</Button>
                </article>
        </div>
    );
};

export default CartProd;