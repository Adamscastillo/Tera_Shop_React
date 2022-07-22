import React from 'react'

import NavBar from './components/header/index'
import CarouselImagens from './components/carroussel'
import CardProdutos from './components/cardsProducts'
import './App.css'
import CarouselProdutos from './components/produtosC/carouselProdutos'

function App() {
  return (
    <div>
      <NavBar />
      <CarouselImagens />
      <CardProdutos />
      <CarouselProdutos />
    </div>
  )
}

export default App
