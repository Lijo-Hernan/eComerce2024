// import React from 'react';
import { useEffect, useState } from 'react';
import CartWidget from '../cartWidget/CartWidget';
import classes from './navBar.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'



const Navbar = () => {
    const [categorias, setCategorias] = useState([])

    const navegar = useNavigate()

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categorias'), orderBy('nombre'))
        
        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setCategorias(categoriesAdapted)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])


    return (
        <header className={classes.header}>
            <div className={classes.headerImg__cont}>
                <img src='https://firebasestorage.googleapis.com/v0/b/ecomerce2024-7e06d.appspot.com/o/logo.jpg?alt=media&token=a50ce506-f62b-466a-9f6f-ddaf205aa3d1'
                alt="Insumos React" className={classes.header__img} onClick={()=>navegar('/')}/>
            </div>
            <span className={classes.header__cont}>
                <h1 className={classes.header__titulo}>Insumos React</h1>
                <nav className={classes.nav}>
                    <div className={classes.navbar__list}>
                    {categorias.map(cat => {
                            return <Link key={cat.id} to={`/categoria/${cat.slug}`} className='btn btn-secondary btn-lg'>
                                    {cat.nombre}</Link>
                        })}
                    </div>

                    {/* <ul className={classes.navbar__list}>
                        <li><Link to='categoria/contrastes' className='btn btn-secondary btn-lg'>Contrastes</Link></li>
                        <li><Link to='categoria/descartables' className='btn btn-secondary btn-lg'>Descartables</Link></li>
                        <li><Link to='categoria/consumibles' className='btn btn-secondary btn-lg'>Consumibles</Link></li>
                    </ul> */}
                    <CartWidget/>
                </nav>
            </span>
        </header>
    );
};

export default Navbar;