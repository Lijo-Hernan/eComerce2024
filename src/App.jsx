import React from 'react'
import './App.css'
import Navbar from './components/navBar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/error/Error'
import { CartProvider } from './context/CartContext'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'

function App() {

  return (
    <>
    <BrowserRouter>
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
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
