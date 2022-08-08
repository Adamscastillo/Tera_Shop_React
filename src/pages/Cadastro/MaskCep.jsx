import React from "react";
import { useEffect, useState, } from 'react'
import InputMask from "react-input-mask";
import Form from "react-bootstrap/Form";
import '../Cadastro/cadastro.css'
import axios from "axios";
/* import {useForm} from 'react-hook-form' */


 const api = 'viacep.com.br/ws/01001000/json/'
  console.log(api)
function CepApi () {

  const [Cep, setCep] = useState([])

  useEffect(() => {
    axios
      .get(api)
      .then(response => {
        setCep(response.Cep)
      })
      .catch(error => console.log(error))
  }, [])
  }

       
const MaskCep = (props) => (
  

      <Form.Group className="mb-3 form-group">
        <Form.Label>CEP</Form.Label>
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

export default MaskCep;