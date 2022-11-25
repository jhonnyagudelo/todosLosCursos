import React from "react"
import TodoItem from './TodoItem';
import { ListItem } from '@mui/material'
const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ListItem>
        {
          todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onDeleteTodo={ onDeleteTodo }
              onToggleTodo={ onToggleTodo }
            />
          ))
        }
      </ListItem>
    </>
  )
}

export default TodoList
