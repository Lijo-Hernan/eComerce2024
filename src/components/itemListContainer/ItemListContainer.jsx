import React, { useEffect, useState} from 'react';
import { getProductos, getProductosPorCat } from '../productos';
import ItemList from '../itemList/ItemList';
import classes from './itemListContainer.module.css'
import Loader from '../loader/Loader'
import { useParams } from 'react-router-dom';



const ItemListContainer = ({introduccion}) => {

    const [productos, setProductos]= useState([])

    const { categoria } = useParams()

    useEffect(() => {
        
        const asyncFunction = categoria ? getProductosPorCat : getProductos
        
        asyncFunction(categoria)
                .then(result => {
                    setProductos(result)
                })
                .catch(error => {
                    console.log(error)
                })            
    }, [categoria])
    
    return (
        <div className={classes.container}>
            <h3 className={classes.intro}>{introduccion}</h3>
            {productos.length == 0 ? <span className={classes.loader}><Loader/></span> 
                : 
                <ItemList productos={productos}/>}
        </div>
    );
};

export default ItemListContainer;