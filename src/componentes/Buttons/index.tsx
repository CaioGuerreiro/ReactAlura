import { ReactElement } from 'react'
import './Buttons.css'
import React from 'react'

interface ButtonsProps{
    children: ReactElement | string
}

const Buttons = (props: ButtonsProps) => {
    return(
        <button className='button'>{props.children}</button>
    )
}
export default Buttons