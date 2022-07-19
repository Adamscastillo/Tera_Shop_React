import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide from './imgs/slide.webp'
import slide1 from './imgs/slide1.webp'
import slide2 from './imgs/slide2.webp'
import './style.css'


function CarouselImagens() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='carouselImg'>
        <img className="d-block w-100" src={slide} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselImg'>
        <img className="d-block w-100" src={slide1} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselImg' >
        <img className="d-block w-100" src={slide2} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselImagens
