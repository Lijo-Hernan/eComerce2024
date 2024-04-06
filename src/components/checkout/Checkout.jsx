import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {  getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import Loader from "../loader/Loader";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./checkout.module.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [cargando, setCargando] = useState(false);
    const [ordenId, setOrdenId] = useState(null);
    const { cart, total, vaciarCarrito } = useContext(CartContext);
    const {register, handleSubmit } = useForm();
    const [controlMail, setControlMail]=useState(false)
    
    const [mail1, setMail1] = useState();
    const [mail2, setMail2] = useState();

    const handleMail = (event) => {
        const value= event.target.value;
        setMail1(value)
        };
    const handleMail2 = (event) => {
        const value= event.target.value;
        setMail2(value)
        };


    const crearOrden = async (data) => {

    if(mail1===mail2) { 
        try {
        setCargando(true);
        const orden = {
            comprador: data,
            items: cart,
            total,
            date: Timestamp.fromDate(new Date()),
        };

        const batch = writeBatch(db);
        const sinStock = [];
        const ids = cart.map((prod) => prod.id);

        const prodsEnCarrito = query(
            collection(db, "productos"),
            where(documentId(), "in", ids)
        );

        const querySnapshot = await getDocs(prodsEnCarrito);
        const { docs } = querySnapshot;

        docs.forEach((doc) => {
            const data = doc.data();
            const stockDb = data.stock;

            const prodAgregado = cart.find((prod) => prod.id === doc.id);
            const cuentaDeProducto = prodAgregado.cuenta;

            if (stockDb >= cuentaDeProducto) {
            batch.update(doc.ref, { stock: stockDb - cuentaDeProducto });
            } else {
            sinStock.push({ id: doc.id, ...data });
            }
        });

        if (sinStock.length === 0) {
            batch.commit();

            const traerColleccion = collection(db, "ordenes");
            const { id } = await addDoc(traerColleccion, orden);

            vaciarCarrito();
            setOrdenId(id);
        } else {
            console.error("hay productos que no tienen stock disponible");
        }

        } catch (error) {
        console.error("Hubo un error en la generacion de la orden");
        } finally {
        setCargando(false);
        }
    }else {
        toast.error('Los mails no coinciden', {theme:'colored'});
    }
    };

    if (cargando) {
        return (
        <div className={classes.container}>
            <span className={classes.loader}>
                <Loader />
            </span>
        </div>
        );
    }

    if (ordenId) {
        return (
        <div className={classes.compra__container}>
            <h1 className={classes.compra__titulo}>
                <u>¡Muchas gracias por su compra!</u>
            </h1>
            <h1 className={classes.compra__id}>
                Registre el id de su orden de compra: <b>{ordenId}</b>
            </h1>
        </div>
        );
    }

    return (
        <div className={classes.form__container}>
            <h1 className={classes.form__titulo}>
                <u>Complete sus datos para finalizar la compra</u>
            </h1>
            <h3 className={classes.form__monto}>Monto de compra: {total}</h3>
            {/* <Form onSubmit={crearOrden} /> */}
            <form onSubmit={handleSubmit(crearOrden)}>
                <article className={classes.form__data}>
                    <label htmlFor="nombre">Nombre:{" "}
                        <input type="text" id="nombre" required placeholder="Ingrese su Nombre" autoComplete="on"{...register("nombre")}/>
                    </label>
                    <label htmlFor="apellido">Apellido:{" "}
                        <input type="text" id="apellido" required placeholder="Ingrese su Apellido" autoComplete="on" {...register("apellido")} />
                    </label>
                    <label htmlFor="email" className={classes.form__email}> Email de contacto:{" "}
                        <input type="email" id="email" required placeholder="Ingrese su e-mail" autoComplete="on" {...register("email")}  onChange={handleMail} />
                    </label>
                    <label htmlFor="email2" className={classes.form__email}> Corrobore su email:{" "}
                        <input type="email" id="email2" required placeholder="Corrobore su e-mail" autoComplete="off" onChange={handleMail2} />
                    </label>
                </article>
                <article className={classes.form__btn}>
                    <button className="btn btn-success btn-lg">Generar orden de compra</button> 
                </article>
            </form>
            <ToastContainer autoClose={2000}/>
        </div>
    );
    };

    export default Checkout;
