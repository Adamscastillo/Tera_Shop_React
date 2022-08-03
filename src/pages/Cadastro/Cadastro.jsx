import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../Cadastro/cadastro.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
          <Form.Label>Digite seu E-mail</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted bg-dark">
            Digite seu melhor E-mail
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 form-group">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            placeholder="000-000-000-00"
            pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
          />
        </Form.Group>

        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="tel" placeholder="(00)00000-0000" />
        </Form.Group>

        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="cep" placeholder="00000-000" />
        </Form.Group>

        <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  )
}

export default Cadastro
