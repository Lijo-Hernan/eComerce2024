import React, { useEffect, useState } from 'react';
import { getProductos } from '../productos';
import ItemList from '../itemList/ItemList';
import classes from './itemListContainer.module.css'



const ItemListContainer = ({introduccion}) => {

    const [productos, setProductos]= useState([])

    useEffect (()=>{
        getProductos()
            .then (result =>{
                setProductos(result)
            })
            .catch (error => {
                console.log(error)
            })
    },[])

    return (
        <div className={classes.container}>
            <h3 className={classes.intro}>{introduccion}</h3>
            {productos.length == 0 ? <h3>Cargando...</h3> 
                : 
                <ItemList productos={productos}/>}
        </div>
    );
};

export default ItemListContainer;