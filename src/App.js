import React from 'react'
import NavBar from './components/header/index'
import CarouselImagens from './components/carroussel'
import CardProdutos from './components/cardsProducts'
import './App.css'
import ListTenis from './components/TenisAPi/TenisApi'
import Footer from './components/footer/Footer'
import ImagePromo from './components/promoção/promo'

function App() {
  return (
    <div>
      <NavBar />
      <CarouselImagens />
      <CardProdutos />
      <ListTenis />
      <ImagePromo />
      <Footer />
     
    </div>
  )
}

export default App
