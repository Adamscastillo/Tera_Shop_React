import React from 'react';
import { useForm } from 'react-hook-form';
import '../Cadastro/cadastro.css';


function App() {

  const {register, handleSubmit, setValue, setFocus} = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep)
    
    if(cep !== ''){
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        console.log(data);
        // register({ name: 'address', value: data.logradouro });
        setValue('city', data.localidade);
        setValue('uf', data.uf);      
    }
    )};
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-group">
      <label className='form-input '>
        CEP:
        <input type="text" className='' {...register("cep")} onBlur={checkCEP} />
      </label>  
      <label className='form-input aparecer'>
        Cidade:
        <input type="text" {...register("city" )}/>
      </label>
      <label className='form-input aparecer'>
        Estado:
        <input type="text" {...register("uf" )}/>
      </label>
    </form>
  );
}

export default App;