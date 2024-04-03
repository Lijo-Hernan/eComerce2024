import React, { useState, useContext } from 'react';
import classes from './itemDetail.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, stock, imagen, nombre, marca, precio, descripcion} ) => {

    const [cantidad, setCantidad]= useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd =(cuenta) => {
        setCantidad(cuenta)
        
        const prodACart = {
            cuenta, nombre, precio, marca, id, imagen
        }
        addItem(prodACart) 

    }
    
    return (
        <div className={classes.detail__body}>
            <div className={classes.card__producto}>
                {(stock) == 0 ? <img src='https://firebasestorage.googleapis.com/v0/b/ecomerce2024-7e06d.appspot.com/o/sinStock.gif?alt=media&token=aa57930b-8002-4e9b-b3b1-5c49aa52066e' 
                alt="Sin Stock" className={classes.sinStock}/> 
                : ''}
                <img src={imagen} className="card-img-top" alt={nombre}/>
                <div className={`${classes.body__cont} "card-body"`}>
                    <h5 className="card-title">{marca}</h5>
                    <p className="card-text">{nombre}</p>
                    <p className='card-text'>Precio: ${precio}</p>
                    <p className='card-text'>{descripcion}</p>
                    <p className='card-text'>Unidades Disponibles: {stock}</p>
                    { cantidad === 0 ? (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/> 
                    ):(
                    <div className={classes.detail__botones}>
                    <Link to="/cart" className='btn btn-primary'>Ver Carrito</Link> 
                    <Link to="/" className='btn btn-primary'>Volver al Inicio</Link> 
                    </div>
                    )}                 
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;