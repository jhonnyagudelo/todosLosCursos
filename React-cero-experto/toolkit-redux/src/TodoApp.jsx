import { useState } from 'react';
import { useGetTodosQuery,useGetTodoByIdQuery } from './store/apis';

const TodoApp = () => {
  // const {data:todos = [], isLoading} = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1)
  const {data:todo, isLoading} = useGetTodoByIdQuery(todoId);
  
  const nexTodo = () => setTodoId(todoId + 1);
  const prevTodo = () => setTodoId(todoId - 1);

  return (
    <div>
      <h1>Todos - RKT Query</h1>
      <hr/>
      <h4>isLoading: {isLoading ? 'true' : 'False'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>Prev</button>
      <button onClick={nexTodo} >Next</button>
    </div>
  )
}

export default TodoApp


    {/* <ul> */}
      {/* {todos.map((item) => ( */}
      {/*   <li key={item.id}> */}
      {/*     <strong>{ item.completed ? 'Done' : 'Pending' }</strong> {item.title} */}
      {/*   </li> */}
      {/* ))} */}
    {/* </ul> */}
