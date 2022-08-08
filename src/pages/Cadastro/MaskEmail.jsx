import React from "react";
import InputMask from "react-input-mask";
import Form from "react-bootstrap/Form";
import '../Cadastro/cadastro.css'

const MaskEmail = (props) => (

  
      <Form.Group className="mb-3 form-group">
        <Form.Label>E-mail</Form.Label>
        <InputMask
          mask=""
          maxLength={50}
          value={props.value}
          onChange={props.onChange}
        >
          {(inputProps) => (
            <Form.Control {...inputProps} placeholder="Digite seu E-mail" />
          )}
        </InputMask>
      </Form.Group>

);

export default MaskEmail;