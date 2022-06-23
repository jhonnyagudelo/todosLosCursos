import { Box } from "@mui/material";
import React, { useReducer } from "react";
import { todoReducer} from './todoReducer';
import TodoList from './TodoList';


const initialState =[
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done:false
  },
  {
    id: new Date().getTime() * 3 ,
    description: 'Recolectar la piedra del alma',
    done:false
  },
]

const TodoApp = () => {
  const [todos,dispatch] = useReducer(todoReducer, initialState)
  return (
    <>
      <h1>TodoApp (10) <small>Pendientes:2</small></h1>
      <hr/>
    <section>
      <Box sx={{ width:'70%', height:80 }}>
        <TodoList todos={todos} />
      </Box>
      <article>
        <h4>Agregar Todo</h4>
        <hr/>
      </article>
    </section>
     
    </>
  )
}

export default TodoApp
