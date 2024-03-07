import React from 'react';
import logo from "/src/assets/logo.jpg"
import CartWidget from '../cartWidget/CartWidget';
import classes from './navBar.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {

    const navegar = useNavigate()

    return (
        <header className={classes.header}>
            <div className={classes.headerImg__cont}>
                <img src={logo} alt="Insumos React" className={classes.header__img} onClick={()=>navegar('/')}/>
            </div>
            <span className={classes.header__cont}>
                <h1 className={classes.header__titulo}>Insumos React</h1>
                <nav className={classes.nav}>
                    <ul className={classes.navbar__list}>
                        <li><Link to='categoria/contrastes' className='btn btn-secondary btn-lg'>Contrastes</Link></li>
                        <li><Link to='categoria/descartables' className='btn btn-secondary btn-lg'>Descartables</Link></li>
                        <li><Link to='categoria/consumibles' className='btn btn-secondary btn-lg'>Consumibles</Link></li>
                    </ul>
                    <CartWidget/>
                </nav>
            </span>
        </header>
    );
};

export default Navbar;