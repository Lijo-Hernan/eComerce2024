import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import ItemDetail from "../itemDetail/ItemDetail";
import classes from './itemDetailContainer.module.css'
import Error from "../error/Error";
import { getProductoPorId } from "../../services/firebase/firestore/productos";


const ItemDetailContainer = () => {

    const [prod, setProd]= useState(null)
    const {itemId}=useParams()

    const [error, setError]=useState(false)

    useEffect (()=>{


        getProductoPorId(itemId)
            .then (producto => {
                setProd(producto)
            })
            .catch(error => {
                setError(error)
            })
        },[itemId])

    return (
        <div className={classes.detailContainer}>
            <section className={classes.detailContainer__card}>
            {prod === null && !error ? <Loader className={classes.loader}/> : (error ? <Error/> : <ItemDetail {...prod}/>)}
            </section>
        </div>
    );
};

export default ItemDetailContainer;