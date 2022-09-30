import React from "react";
import InputMask from "react-input-mask";
import Form from "react-bootstrap/Form";
import '../Cadastro/cadastro.css'

const MaskName = (props) => (

  
      <Form.Group className="mb-3 form-group">
        <Form.Label>Nome</Form.Label>
        <InputMask
          mask=""
          maxLength={40}
          value={props.value}
          onChange={props.onChange}
        >
          {(inputProps) => (
            <Form.Control {...inputProps} placeholder="Digite seu Nome" required />
          )}
        </InputMask>
      </Form.Group>

);

export default MaskName;