import React from "react"
import { ListItemButton, Button, ListItemText } from "@mui/material"
const TodoItem = ({ todo = []}) => {
  return (
    <>
      <ListItemButton>
        <ListItemText>{todo.description}</ListItemText>
      </ListItemButton>
      <Button variant="outlined" color="error">
        Borrar
      </Button>
    </>
  )
}

export default TodoItem
