import React from 'react'
import { useState } from 'react'
import './nota.css'

const Nota  = ({nombre}) =>{
    const [cumplido, setCumplido] = useState(false)

    const handleSetCumplido = () =>{
        setCumplido(!cumplido)
    }
    nombre = nombre  ? nombre : 'Error 404'
    return (
        <div className='nota'>
            <input type="checkbox" onClick={handleSetCumplido}/>
            {
                cumplido
                ? <strike>{nombre}</strike>
                : <span>{nombre}</span>
            }
            <button>eliminar</button>
            
        </div>
    )
}

export default Nota