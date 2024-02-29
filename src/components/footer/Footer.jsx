import React from 'react';
import classes from './footer.module.css'


const header = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__title}>
                <h3 className={classes.footer__h3}>App creada por Hernán Lijó</h3>            
            </div>
        </footer>
    );
};

export default header;