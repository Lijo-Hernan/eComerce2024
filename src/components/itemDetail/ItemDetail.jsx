import React, { useState } from 'react';
import classes from './itemDetail.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({stock, imagen, nombre, marca, precio, descripcion} ) => {

    const [cantidad, setCantidad]= useState(0)

    const handleOnAdd =(cuenta) => {
        console.log ('cantidad seleccionada:'+ cuenta)
        setCantidad(cuenta)
    }

    return (
        <div className={classes.detail__body}>
            <div className={classes.card__producto}>
                {(stock) == 0 ? <img src='../src/assets/sinStock.gif' alt="Sin Stock" className={classes.sinStock}/> 
                : ''}
                <img src={imagen} className="card-img-top" alt={nombre}/>
                <div className={`${classes.body__cont} "card-body"`}>
                    <h5 className="card-title">{marca}</h5>
                    <p className="card-text">{nombre}</p>
                    <p className='card-text'>Precio: ${precio}</p>
                    <p className='card-text'>{descripcion}</p>
                    { cantidad === 0 ? (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/> 
                    ):(<Link to="./cart" className='btn btn-primary'>Ver Carrito</Link> )
}                                      
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;