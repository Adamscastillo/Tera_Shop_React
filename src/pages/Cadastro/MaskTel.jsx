import React from "react";
import InputMask from "react-input-mask";
import Form from "react-bootstrap/Form";
import '../Cadastro/cadastro.css'

const MaskTel = (props) => (

  
      <Form.Group className="mb-3 form-group">
        <Form.Label>Telefone</Form.Label>
        <InputMask
          mask="(99)99999-9999"
          value={props.value}
          onChange={props.onChange}
        >
          {(inputProps) => (
            <Form.Control {...inputProps} placeholder="Digite seu Telefone" required />
          )}
        </InputMask>
      </Form.Group>

);

export default MaskTel;