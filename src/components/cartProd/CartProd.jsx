import React from 'react';

const CartProd = ({nombre, marca, precio}) => {
    return (
        <div>
            <h5 className="card-title">{marca}</h5>
                    <p className="card-text">{nombre}</p>
                    <p className='card-text'>Precio: ${precio}</p>
        </div>
    );
};

export default CartProd;