import React from 'react'

import NavBar from './components/header/index'
import CarouselImagens from './components/carroussel'
import CardProdutos from './components/cardsProducts'
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <CarouselImagens />
      <CardProdutos />
    </div>
  )
}

export default App
