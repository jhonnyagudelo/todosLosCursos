import { Box, Grid } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { todoReducer} from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd'


const initialState =[
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done:false
  // },
  // {
  //   id: new Date().getTime() * 3 ,
  //   description: 'Recolectar la piedra del alma',
  //   done:false
  // },
]

const init = () =>{
  return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {
  const [todos,dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
   localStorage.setItem('todos', JSON.stringify(todos) || []) 
  },[todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type:'[TODO] Remove Todo',
      payload: id
    })
  }

  const handleToggleTodo = (id) =>{
    dispatch({
      type:'[TODO] Toggle Todo',
      payload:id
    })
  }



  return (
    <>
      <h1>TodoApp (10) <small>Pendientes:2</small></h1>
      <hr/>

    <Grid container direction="row" justifyContent="space-around" >
      <Box sx={{ width:'50%', height:161 }}>
        <TodoList 
          todos={todos} 
          onDeleteTodo ={ handleDeleteTodo} 
          onToggleTodo ={ handleToggleTodo }
        />
      </Box>
      <article>
        <h4>Agregar Todo</h4>
        <TodoAdd onNewTodo = {handleNewTodo}/>
      </article>
    </Grid>
     
    </>
  )
}

export default TodoApp
