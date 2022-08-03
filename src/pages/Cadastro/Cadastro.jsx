import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Cadastro/cadastro.css";


function Cadastro() {
  return (
    <div className="main-cadastro">
      <Form className="form">
      <Form.Group className="mb-3 form-group"  >
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="000-000-000-00" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"/>         
        </Form.Group>

        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
          <Form.Label>Digite seu E-mail</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted bg-dark">
            Digite seu melhor E-mail  
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 form-group">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="cpf" autoComplete="tel" placeholder="000-000-000-00" maxLength={'11'} pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"/>         
        </Form.Group>

        <Form.Group className="mb-3 form-group" >
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="tel" placeholder="(00)00000-0000" />          
        </Form.Group>

        <Form.Group className="mb-3 form-group" >
          <Form.Label>CEP</Form.Label>
          <Form.Control type="cep" placeholder="00000-000" />          
        </Form.Group>

        <Form.Group className="mb-3 form-group">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default Cadastro;
