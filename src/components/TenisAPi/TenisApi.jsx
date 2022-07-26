import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import './TenisApi.css'

const url = 'http://localhost:3000/static/shoes.json'

function TenisApi() {
  const [data, setData] = useState([])
  const carousel = useRef(null)

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  const handleLeftClick = event => {
    event.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = event => {
    event.preventDefault()

    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  if (!data || !data.length) return null

  return (
    <div className="container">
      <h1 className='api-title'>ℙℝ𝕆𝕄𝕆ℂÕ𝔼𝕊 𝔻𝔸 𝕊𝔼𝕄𝔸ℕ𝔸</h1>
      <div className="carousel" ref={carousel}>
        {data.map(item => {
          const { id, name, price, oldPrice, image } = item
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">R$ {oldPrice}</span>
                <span className="price">R$ {price}</span>
                <li className="buttons-add-remover">
                  <button className=" carousel-button"> Adicionar</button>
                  <button className=" carousel-button"> Remover</button>
                </li>
              </div>
            </div>
          )
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img
            src="/static/images/216151_right_chevron_icon.png"
            alt="Scroll Left"
          />
        </button>
        <button onClick={handleRightClick}>
          <img
            src="/static/images/216151_right_chevron_icon.png"
            alt="Scroll Right"
          />
        </button>
      </div>
    </div>
  )
}

export default TenisApi
