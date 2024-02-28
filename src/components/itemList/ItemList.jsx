import React from 'react';
import Item from '../item/Item';

const itemList = ({productos}) => {

    return (
        <div>
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