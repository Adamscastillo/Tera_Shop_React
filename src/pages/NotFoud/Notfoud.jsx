import React from 'react'
import Gnomo from './img/gnomo.jpg'
import './Notfoud.css'
function Notfoud() {
  return (
    <div className="Itens-NotFoud">
      <h1>Pagina não Encontrada !!!!!</h1>
      <h1 className="title-NotFoud">Deu Ruim !!!!!</h1>
      <img className="NotFoud" src={Gnomo} alt="gnomo" />
      <br />
      <br />
    </div>
  )
}

export default Notfoud
