import React from 'react';

const Item = ({id, nombre, imagen, precio, marca, stock}) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <h2>{marca}</h2>
            <img src={imagen} alt="" style={{width:150}} />
            <h3>{precio}</h3>
            
        </div>
    );
};

export default Item;