import React from 'react';
import { useForm } from './hook/useForm';
import { Input,Button } from '@mui/material';

const TodoAdd = ({ onNewTodo }) => {
  const {description, onInputChange,onResetForm} =useForm({
    description:'' 
  })

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id:new Date().getTime(),
      done:false,
      description:description,
    }
    onNewTodo(newTodo)
    onResetForm()
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
       <Input 
          type="text" 
          placeholder="Que hay que hacer" 
          variant="standar"
          name="description"
          value={ description }
          onChange={onInputChange}
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
