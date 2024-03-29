import React from 'react';
import classes from './footer.module.css'


const header = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__title}>
                <h3 className={classes.footer__h3}>App creada por Hernán Lijó</h3>            
                <h4 className={classes.footer__h2}>Los productos son de muestra, no es una venta real</h4>            
            </div>
        </footer>
    );
};

export default header;