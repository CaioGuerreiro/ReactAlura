import './Banner.css'
import React from 'react'

interface BannerProps{
    imagemPath: string
    textAlt?: string
}

export const Banner = ({imagemPath, textAlt}:BannerProps) => {
    return(
        <header className ="banner">
             {/* <img src ="/imagens/banner.png" alt="imagem banner"/> */}
             <img src ={imagemPath} alt={textAlt}/>
        </header>
       
    )
}

export default Banner
