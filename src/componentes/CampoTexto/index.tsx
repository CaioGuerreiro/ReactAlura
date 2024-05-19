import { useState } from 'react'
import './Campo-texto.css'

interface CampoTexto{
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
}

const CampoTexto = ({aoAlterado, label, placeholder, valor, obrigatorio = false}: CampoTexto) =>{

    

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {       
        aoAlterado(evento.target.value)
        
    }
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input 
            value={valor} 
            onChange={aoDigitado} 
            required={obrigatorio} 
            placeholder={placeholder}/>
        </div>
    )
}
export default CampoTexto