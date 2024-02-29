import { useState, useEffect } from "react";
import { getProductos } from '../productos';
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import ItemDetail from "../itemDetail/ItemDetail";



const ItemDetailContainer = () => {

    const [prod, setProd]= useState([])
    const {idProducto}=useParams()

    useEffect (()=>{
        setTimeout (()=>{
        getProductos()
            .then ((data)=>{ 
                    const prodEncontrado = data.find ((item) => item.id == 2)
                    setProd (prodEncontrado)
                })
            .catch (error => {
                console.log(error)
            })
        },1000)
    },[idProducto])

    return (
        <div className='detailContainer'>
            <section className='detailContainer__card'>
                {prod =='' ? <Loader/> : <ItemDetail {...prod}/>}
            </section>
        </div>
    );
};

export default ItemDetailContainer;