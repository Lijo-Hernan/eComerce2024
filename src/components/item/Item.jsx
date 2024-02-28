import React from 'react';
import classes from './item.module.css'
import 'bootstrap/dist/css/bootstrap.css';

const Item = ({id, nombre, imagen, precio, marca, stock}) => {


    return (
        <div className={classes.card__producto}>
                <img src={imagen} className="card-img-top" alt={nombre}/>
                <div className={`${classes.body__cont} "card-body"`}>
                    <h5 className="card-title">{marca}</h5>
                    <p className="card-text">{nombre}.</p>
                    <a href="#" className="btn btn-primary">Detalle</a>
                </div>
            </div>
    )
    
};

export default Item;