import React from 'react'
import Nota from '../Notas/Nota'
import { FaRegSadCry } from "react-icons/fa";

const NotaList  = ({tasks, deleteTask, searchString, currentTasks}) =>{
    return (
        <div>
            {tasks.length == 0 && <h2>No tenes tareas <FaRegSadCry /></h2>}
            
            {tasks.length != 0 && searchString != '' && currentTasks.length == 0 && <h2>No se encontraron tareas</h2> }

            {currentTasks.map(task =>(
          <Nota task={task} key={task.id} deleteTask={deleteTask}/>
        ) ) }
        </div>
    )
}

export default NotaList