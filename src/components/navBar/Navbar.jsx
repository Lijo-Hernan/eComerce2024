import React from 'react';
import logo from "/src/assets/logo.jpg"
import CartWidget from '../cartWidget/CartWidget';
import classes from './navBar.module.css'



const Navbar = () => {

    return (
        <header className={classes.header}>
            <a href="" className={classes.headerImg_cont} ><img src={logo} alt="Insumos React" className={classes.header__img} /></a>
            <span className={classes.header__cont}>
                <h1 className={classes.header__titulo}>Insumos React</h1>
                <nav className={classes.nav}>
                    <ul className={classes.navbar__list}>
                        <li><a href="../Contrastes" className='btn btn-secondary'>Contrastes</a></li>
                        <li><a href="../Descartables" className='btn btn-secondary'>Descartables</a></li>
                        <li><a href="../Consumibles" className='btn btn-secondary'>Consumibles</a></li>
                    </ul>
                    <CartWidget/>
                </nav>
            </span>
        </header>
    );
};

export default Navbar;