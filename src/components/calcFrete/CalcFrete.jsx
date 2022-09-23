import React from "react";
import { useEffect, useState, } from 'react'
import InputMask from "react-input-mask";
import Form from "react-bootstrap/Form";
import '../../pages/Cadastro/cadastro.css'
import axios from "axios";



const api = 'viacep.com.br/ws/01001000/json/'
  console.log(api)
function FreteApi () {

  const [frete, setCep] = useState([])

  useEffect(() => {
    axios
      .get(api)
      .then(response => {
        setCep(response.Cep)
      })
      .catch(error => console.log(error))
  }, [])
  }

       
const CalcFrete = (props) => (
  

      <Form.Group className="mb-3 form-group">
        <Form.Label>Calcular Frete</Form.Label>
        <InputMask
          mask="99999-999"
          maxLength={50}
          value={props.value}
          onChange={props.onChange}
        >
          {(inputProps) => (
            <Form.Control {...inputProps} placeholder="Digite seu CEP" />
          )}
        </InputMask>
      </Form.Group>           

);

export default CalcFrete;