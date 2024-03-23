import React, { useEffect, useState} from 'react';
// import { getProductos, getProductosPorCat } from '../productos';
import ItemList from '../itemList/ItemList';
import classes from './itemListContainer.module.css'
import Loader from '../loader/Loader'
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig' 



const ItemListContainer = ({introduccion}) => {

    const [productos, setProductos]= useState([])
    const [cargando, setCargando] = useState (true)

    const { categoria } = useParams()

    useEffect(() => {
        
        setCargando(true)

        const prodColection = categoria ?
        query(collection(db, 'productos'), where('categoria', '==', categoria))
        : collection(db, 'productos')

        getDocs(prodColection)
            .then(querySnapshot=> {
                const adaptData = querySnapshot.docs.map(doc => {
                    const data = doc.data()  
                    return { id: doc.id, ...data}
                })
                setProductos(adaptData)
            })
            .catch(error => {
                console.log(error)
                })
            .finally(()=> {
                setCargando(false)
                })     
    // const asyncFunction = categoria ? getProductosPorCat : getProductos            
    // asyncFunction(categoria)
    //         .then(result => {
    //             setProductos(result)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })  
    //         .finally (()=> {
    //             setCargando(false)
    //         })     
    }, [categoria])

    // if (cargando) {
    //     return <div className={classes.container}><span className={classes.loader}><Loader/></span></div>
    // }
    
    return (
        <div className={classes.container}>
            <h3 className={classes.intro}>{introduccion}</h3>
            {cargando ? 
            <div className={classes.container}><span className={classes.loader}><Loader/></span></div> 
            :
            <ItemList productos={productos}/>}
        </div>
    );
};

export default ItemListContainer;