import React from 'react'
import { useState } from 'react'
import './nota.css'

const Nota  = ({task, deleteTask}) =>{
    const {title, description, createdAt, id} = task

    return (
        <div className='nota'>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{createdAt}</span>
            <button onClick={() => deleteTask(task.id)}> Terminar</button>
            <hr />
        </div>
    )
}

export default Nota