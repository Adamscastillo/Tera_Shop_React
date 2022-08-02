import React from 'react'
import NavBar from '../../components/header/index'
import CarouselImagens from '../../components/carroussel/index'
import CardProdutos from '../../components/cardsProducts/index'
import '../../../src/App.css'
import ListTenis from '../../components/TenisAPi/TenisApi'
import Footer from '../../components/footer/Footer'
import ImagePromo from '../../components/promoção/promo'
import TenisPromo from '../../components/TenisPromo/TenisPromo'

function Home() {
  return (
    <div>
      <CarouselImagens />
      <CardProdutos />
      <ListTenis />
      <ImagePromo />
      <TenisPromo />
    </div>
  )
}

export default Home
