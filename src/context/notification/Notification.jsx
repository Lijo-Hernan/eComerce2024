import React, {createContext, useState, useContext} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const NotificationContext= createContext()


const Notificacion = ({dataNotif})=>{

    const exito = {
        position: 'sticky',
        top: '1%',
        width:'40%',
        backgroundColor: 'green',
        color: 'white',
        fontSize: '2rem',
        margin: '1rem',
        borderRadius: '10px',
        padding: '0.5rem'
    }
    const advrt = {
            position: 'sticky',
            top: '1%',
            width:'40%',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '2rem',
            margin: '1rem',
            borderRadius: '10px',
            padding: '0.5rem'
        }
        
        return (
            <article style={dataNotif.tipo === 'exito' ? exito : advrt} >
                {dataNotif.texto}
            </article>
    )
}


export const NotificationProvider = ({children}) => {

    const [dataNotif, setDataNotif]= useState({
        tipo:'',
        texto: ''
    })

const notificacionParaMostrar= (tipo, texto)=> {
    setDataNotif({tipo, texto})
    toast[dataNotif.tipo]({ message: dataNotif.texto, theme: 'colored' });
}

setTimeout (()=>{
    setDataNotif('','')

},3000)


    return (
        <NotificationContext.Provider value={{notificacionParaMostrar}}>
            {!dataNotif.texto==''&& <Notificacion dataNotif={dataNotif}/>}
            <ToastContainer dataNotif={dataNotif}/>
            {children}                        
        </NotificationContext.Provider>
    );
}

export const usarNotificacion =()=>  {
    return useContext(NotificationContext)

} 
