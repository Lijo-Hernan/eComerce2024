import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import classes from './cartProd.module.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const CartProd = ({id, nombre, marca, precio, cuenta, imagen}) => {

    const {removeItem} = useContext(CartContext)

    return (
        <div className={classes.card__container}>
                <img src={imagen} className={classes.card__img} alt={nombre}/>
                <span className={classes.card__prod}>
                    <p className={classes.card__p}>{marca}</p>
                    <p className={classes.card__p}>{nombre}</p>
                    <p className={classes.card__p}>Precio: ${precio}</p>
                </span>
                <article className={classes.card__article}>
                    <p className={classes.card__cant}>Cantidad solicitada: {cuenta}</p>
                    <Link to='/cart'>
                        <Button className={classes.card__boton} variant="warning" onClick={()=>{removeItem(id)}} >
                        Retirar el producto del carrito</Button>
                    </Link>
                </article>
        </div>
    );
};

export default CartProd;