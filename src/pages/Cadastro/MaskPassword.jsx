import React from "react";
import InputMask from "react-input-mask";
import Form from "react-bootstrap/Form";
import '../Cadastro/cadastro.css'

const MaskSenha = (props) => (

  
      <Form.Group className="mb-3 form-group">
        <Form.Label>Senha</Form.Label>
        <InputMask
          type={"password"}
          mask=""
          minLength={8}
          value={props.value}
          onChange={props.onChange}
        >
          {(inputProps) => (
            <Form.Control {...inputProps} placeholder="Digite sua senha" />
          )}
        </InputMask>
      </Form.Group>

);

export default MaskSenha;