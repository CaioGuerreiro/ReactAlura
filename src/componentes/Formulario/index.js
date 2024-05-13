
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Buttons from '../Buttons'
import './Formulario.css'
import { useState } from 'react'



const Formulario = (props) =>{

    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    
    const aoSalvar = (evento) =>{
        evento.preventDefault() // previnir o comportamento padrao
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }

    return(
    
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha o formulário de cadastro</h2>
            <CampoTexto
                obrigatorio = {true}
                label = "Nome" 
                placeholder = "Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
            <CampoTexto 
                obrigatorio = {true}  
                label = "Cargo" 
                placeholder = "Digite seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
            />
            <CampoTexto 
                label = "Imagem" 
                placeholder = "Coloque sua imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
            <ListaSuspensa 
                obrigatorio={true}
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
            <Buttons>Criar Card</Buttons>
        </form>
    </section>


    )

    
}
export default Formulario