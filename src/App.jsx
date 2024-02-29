import React from 'react'
import './App.css'
import Navbar from './components/navBar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Footer from './components/footer/Footer'


function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer introduccion="Bienvenidos a nuestro eComerce especializado en insumos para los servicios de diagnóstico por imágenes"/>
      <ItemDetailContainer/>
      <Footer/>
    </>
  )
}

export default App
