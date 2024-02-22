import React from 'react';
import classes from './itemListContainer.module.css'

const ItemListContainer = ({introduccion}) => {
    return (
        <div className={classes.container}>
            <h3 className={classes.intro}>{introduccion}</h3>
        </div>
    );
};

export default ItemListContainer;