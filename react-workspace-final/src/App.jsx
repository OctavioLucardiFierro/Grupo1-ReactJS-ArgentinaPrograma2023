import { useState } from 'react'
import React from 'react'
import './App.css'
import { Nota } from './Componentes'

function App() {
  const [formActivo, setForm] = useState(false)

  const handleSetForm = () => {
    setForm(!formActivo)
  }

  return (
    <>
      <h1>TO DO LIST</h1>
      
      <Nota nombre = 'estudiar'/>

      <button onClick={handleSetForm}>+</button>

      {
        formActivo
        ?<form className='formulario'>
              <input type="text" placeholder='nombre de la tarea'/>
              <button onClick={handleSetForm}>Confitmar</button>
              <button onClick={handleSetForm}>Cancelar</button>
          </form>
        : <div></div>
      }

    </>
  )
}

export default App
