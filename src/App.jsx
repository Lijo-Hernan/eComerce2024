import React from 'react'
import './App.css'
import Navbar from './components/navBar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/error/Error'


function App() {


  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer introduccion="Bienvenidos a nuestro eComerce especializado en insumos para los servicios de diagnóstico por imágenes"/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/categoria/:categoria' element={<ItemListContainer introduccion={`Listado de productos por categoria` }/>}/>       
          <Route path='*' element={<Error/>}/>        
        </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
