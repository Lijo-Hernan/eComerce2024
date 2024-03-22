import React, {createContext, useState} from 'react';


const NotificationContext= createContext()


const Notificacion = ({dataNotif})=>{

    const exito = {
        position: 'absolute',
        right: 0,
        top: '25%',
        backgroundColor: 'green',
        color: 'white',
        fontSize: '2rem',
        margin: '1rem',
        borderRadius: '10px',
        padding: '0.5rem'
    }
    const advrt = {
            position: 'absolute',
            right: 0,
            top: '25%',
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
        tipo:'exito',
        texto: 'El producto ya esta en el carrito'
    })

const notificacionParaMostrar= (tipo, texto)=> {
    setDataNotif({tipo, texto})
}

    return (
        <NotificationContext.Provider value={{notificacionParaMostrar}}>
            <Notificacion dataNotif={dataNotif}/>
            {children}                        
        </NotificationContext.Provider>
    );
}
