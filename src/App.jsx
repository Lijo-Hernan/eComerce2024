import React from 'react'
import './App.css'
import Navbar from './components/navBar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'


function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer introduccion="Bienvenidos a nuestro eComerce especializado en insumos para los servicios de diagnostico por imagenes"/>
    </>
  )
}

export default App
