import React from 'react';
import Item from '../item/Item';
import classes from './itemList.module.css'
import 'bootstrap/dist/css/bootstrap.css';

const itemList = ({productos}) => {

    return (
        <div className={classes.container}>
            {productos.map((producto)=> (
                <Item 
                    key = {producto.id}
                    {...producto}
                />
            ))}
            
        </div>
    );
};

export default itemList;