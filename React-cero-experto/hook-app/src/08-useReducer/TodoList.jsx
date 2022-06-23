import React from "react"
import TodoItem from './TodoItem';
import { ListItem } from '@mui/material'
const TodoList = ({ todos = [] }) => {
  return (
    <>
      <ListItem>
        {
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
          ))
        }
      </ListItem>
    </>
  )
}

export default TodoList
