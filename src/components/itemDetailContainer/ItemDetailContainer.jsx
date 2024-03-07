import { useState, useEffect } from "react";
import { getProductos } from '../productos';
import { getProductosPorId } from '../productos';
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import ItemDetail from "../itemDetail/ItemDetail";
import classes from './ItemDetailContainer.module.css'



const ItemDetailContainer = () => {

    const [prod, setProd]= useState([])
    const {itemId}=useParams()

    useEffect (()=>{
        getProductosPorId(itemId)
            .then (resp =>{setProd(resp)})
    },[itemId])

    return (
        <div className={classes.detailContainer}>
            <section className={classes.detailContainer__card}>
                {prod =='' ? <Loader className={classes.loader}/> : <ItemDetail {...prod}/>}
            </section>
        </div>
    );
};

export default ItemDetailContainer;