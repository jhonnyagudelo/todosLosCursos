import { Input,Button } from '@mui/material';
import React from 'react';
const TodoAdd = () => {
  return (
    <>
      <form>
       <Input 
          type="text" 
          placeholder="Que hay que hacer" 
          variant="standar"
        />
        <Button 
          type="submit" 
          variant="outlined"
        >
          Agregar
        </Button>
      </form>
  
    </>
  )
}

export default TodoAdd
