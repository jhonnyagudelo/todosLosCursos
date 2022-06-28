import React from "react"
import { ListItemButton, Button, ListItemText, Box, Grid } from "@mui/material"
const TodoItem = ({ todo = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
    <Box>
      <Grid 
        container 
        item
        md={8} 
        justifyContent='center' 
        alignItems="center"  
      >

        <ListItemButton>
              <ListItemText
                onClick={() => onToggleTodo(todo.id)} 
              >
                {todo.description}--{todo.done ? 'True' : 'False'}
              </ListItemText>
        </ListItemButton>

        <Button 
          variant="outlined" 
          color="error"
          onClick={() => onDeleteTodo(todo.id)}
        >
           Borrar
        </Button>
      </Grid>
    </Box>
     
    </>
  )
}

export default TodoItem
