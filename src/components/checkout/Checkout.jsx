import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import Loader from '../loader/Loader';
import classes from './checkout.module.css'

const Checkout = () => {
    const [cargando, setCargando] = useState(false)
    const [ordenId, setOrdenId] = useState(null)
    const { cart, total, vaciarCarrito } = useContext(CartContext)


    const crearOrder = async (userData) => {
        try {
            setCargando(true)
            const orden = {
                cliente: {
                    nombre: 'Hernan',
                    Apellido: 'Lijo'
                },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            }
    
            const batch = writeBatch(db)
            const sinStock = []
            const ids = cart.map(prod => prod.id)
    
            const prodsEnCarrito = query(collection(db, 'productos'), where(documentId(), 'in', ids))

            // getDocs(productsCollection)
            //     .then(querySnapshot => console.log(querySnapshot.docs))
            const querySnapshot = await getDocs(prodsEnCarrito)
            const { docs } = querySnapshot
            
            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
                
                const prodAgregado = cart.find(prod => prod.id === doc.id)
                const cuentaDeProducto = prodAgregado.cuenta
                
                
                if(stockDb >= cuentaDeProducto) {
                    batch.update(doc.ref, { stock: stockDb - cuentaDeProducto })
                } else {
                    sinStock.push({ id: doc.id, ...data})
                }
            }) 

                if(sinStock.length === 0) {
                    batch.commit()
                
                    const traerColleccion = collection(db, 'ordenes')
                    const { id } = await addDoc(traerColleccion, orden)
                
                    vaciarCarrito()
                    setOrdenId(id)
                    } else {
                        console.error('hay productos que no tienen stock disponible')
                    }
            } catch (error) {
                console.error('Hubo un error en la generacion de la orden')
            } finally {
                setCargando(false)
            }
    }
    if(cargando) {
        return <div className={classes.container}><span className={classes.loader}><Loader/></span></div>
    }

    if(ordenId) {
        return <h1>El id de su orden es: {ordenId}</h1>
    }

    return  (
        <div>
            <h1>Checkout</h1>
            <h3>crear formulario para el ingreso de datos</h3>
            <button onClick={crearOrder}>Generar orden de compras</button>
        </div>
    )
}

export default Checkout