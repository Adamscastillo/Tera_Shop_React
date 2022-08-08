import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../Cadastro/cadastro.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MaskCpf from './MaskCpf'
import MaskName from './MaskName'
import MaskEmail from './MaskEmail'
import MaskTel from './MaskTel'
import MaskCep from './MaskCep'
import MaskSenha from './MaskPassword'

const url = 'http://localhost:3030/users/create'

function PostApi() {
  const [data, setData] = useState([])
  


  useEffect(() => {
    axios
      .post(url, {
        name: 'adams',
        email: 'adams@gmail.com',
        cep: 68950000,
        cpf: 76681793215,
        password: '123456'
      })
      .then(response => {
        console.log(response)
        setData(response.data)
      })
      .catch(error => console.log(error))
  }, [])
}

function Cadastro() {

  

  return (
    <div className="main-cadastro">
      <Form className="form">
        <MaskName />

        <MaskEmail />

        <MaskCpf />

        <MaskTel />

        <MaskCep />

        <MaskSenha />
        
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  )
}

export default Cadastro
