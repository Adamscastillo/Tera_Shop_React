import { useEffect, useState } from "react";
import '../TenisPromo/TenisPromo.css'
import axios from 'axios'


const url =  'https://pokeapi.co/api/v2/pokemon'

function TenisPromo () {
    const [data, setData] = useState([])

    useEffect (() => {
        
        axios.get(url)
        .then((response) =>{
            console.log(response)
            setData(response.data)
        })
        .catch(error => console.log(error)) 

    },[])
    if (!data || !data.length) return null
    
    const dados = data.data.results
    console.log(dados)
    
    return (
        <>
         {dados.map(({item}) =>{
            
            const {id, name, url} = item
            return (
                <div key={id}>
                    <div>
                        {name}
                    </div>
                    <img className="image" src={url} alt="" />                    
                </div>
            )
         })}
         
        </>
    )


}

export default TenisPromo