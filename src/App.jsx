import React from 'react'
import './App.css'
import Navbar from './components/navBar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'


function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer introduccion="Bienvenidos a nuestro eComerce especializado en insumos para los servicios de diagnóstico por imágenes"/>
      <ItemDetailContainer/>
    </>
  )
}

export default App
