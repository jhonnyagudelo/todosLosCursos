import { Box, Grid } from "@mui/material";
import React from "react";
import TodoList from './TodoList';
import TodoAdd from './TodoAdd'
import useTodo from './hook/useTodo'

const TodoApp = () => {

  const { todos,todosCount, pendingTodoCount,handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <>
      <h1>TodoApp {todosCount} <small>Pendientes:{pendingTodoCount}</small></h1>
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
