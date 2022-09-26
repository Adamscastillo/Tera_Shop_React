import React from 'react'
import CarouselImagens from '../../components/carroussel/index'
import CardProdutos from '../../components/cardsProducts/CardsProducts'
import '../../../src/App.css'
import ListTenis from '../../components/TenisAPi/TenisApi'
import ImagePromo from '../../components/promoção/promo'


function Home() {
  return (
    <div>
      <CarouselImagens />
      <CardProdutos />
      <ListTenis />
      <ImagePromo />
      <ListTenis />
      
    </div>
  )
}

export default Home
