import React from 'react'
import './nota.css'

const Nota  = ({nombre}) =>{
    
    nombre = nombre  ? nombre : 'Error 404'
    return (
        <div className='nota'>
            <input type="checkbox" />
            <span>{nombre}</span>
        </div>
    )
}

export default Nota