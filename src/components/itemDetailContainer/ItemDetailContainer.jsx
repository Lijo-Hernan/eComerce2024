import { useState, useEffect } from "react";
// import { getProductosPorId } from '../productos';
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import ItemDetail from "../itemDetail/ItemDetail";
import classes from './itemDetailContainer.module.css'
import Error from "../error/Error";
import { getDoc, doc} from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";


const ItemDetailContainer = () => {

    const [prod, setProd]= useState(null)
    const {itemId}=useParams()

    const [error, setError]=useState(false)

    useEffect (()=>{
        const productDoc = doc(db, 'productos', itemId)

        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                if (queryDocumentSnapshot.exists && queryDocumentSnapshot.data()){
                const data = queryDocumentSnapshot.data()
                const adaptProd = {id: queryDocumentSnapshot.id, ...data}
                setProd(adaptProd)
            } else{setError(true)}
        })
            .catch(() => {
                console.log('error')
            })

        // getProductosPorId(itemId)
        //     .then (resp =>{setProd(resp)})
        //     .catch(() => {
        //         setError(true)
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