import React, { useEffect, useState} from 'react';
import ItemList from '../itemList/ItemList';
import classes from './itemListContainer.module.css'
import Loader from '../loader/Loader'
import { useParams } from 'react-router-dom'; 
import { getProductos } from '../../services/firebase/firestore/productos';

const ItemListContainer = ({introduccion}) => {

    const [productos, setProductos]= useState([])
    const [cargando, setCargando] = useState (true)
    const [error, setError]= useState()

    const { categoria } = useParams()

    useEffect(() => {
        
        getProductos(categoria)
            .then (productos => {
                setProductos(productos)
            })
            .catch(error => {
                setError(error)
            })

            .finally(()=> {
                setCargando(false)
            })     

    }, [categoria])

    if(error) {
        return <h1>Hubo un error al cargar los productos</h1>
    }
    
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