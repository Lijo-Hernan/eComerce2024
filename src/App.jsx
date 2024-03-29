import React from 'react'
import './App.css'
import Navbar from './components/navBar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/error/Error'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './context/notification/Notification'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/checkout'
// import { useEffect } from 'react'
// import { addDoc, collection } from 'firebase/firestore'
// import { db } from './services/firebase/firebaseConfig'



function App() {

   // useEffect(() => {
  //   const productos = []
  
  //   const productsCollection = collection(db, 'productos')
    
  //   products.forEach(async prod => {
  //       console.log('addDoc')
  //       await addDoc(productsCollection, prod)
  //   })
  // }, [])


  return (
    <>
    <BrowserRouter>
      <NotificationProvider>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer introduccion="Bienvenidos a nuestro eComerce especializado en insumos para los servicios de diagnóstico por imágenes"/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/categoria/:categoria' element={<ItemListContainer introduccion={`Listado de productos por categoria` }/>}/>       
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>       
            <Route path='*' element={<Error/>}/>        
          </Routes>
        </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
