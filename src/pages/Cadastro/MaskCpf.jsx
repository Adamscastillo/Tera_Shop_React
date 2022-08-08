import React from "react";
import InputMask from "react-input-mask";
import Form from "react-bootstrap/Form";
import '../Cadastro/cadastro.css'

const MaskCpf = (props) => (

  
      <Form.Group className="mb-3 form-group">
        <Form.Label>CPF</Form.Label>
        <InputMask
          mask="999-999-999-99"
          value={props.value}
          onChange={props.onChange}
        >
          {(inputProps) => (
            <Form.Control {...inputProps} placeholder="Digite seu CPF" />
          )}
        </InputMask>
      </Form.Group>

);

export default MaskCpf;