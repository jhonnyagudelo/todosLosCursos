import { useGetTodosQuery,useGetTodoByIdQuery } from './store/apis';

const TodoApp = () => {
  // const {data:todos = [], isLoading} = useGetTodosQuery();
  const {data:todo, isLoading} = useGetTodoByIdQuery(1);

  return (
    <div>
      <h1>Todos - RKT Query</h1>
      <hr/>
    <h4>isLoading: {isLoading ? 'true' : 'False'}</h4>
    <pre>...</pre>
    {/* <ul> */}
      {/* {todos.map((item) => ( */}
      {/*   <li key={item.id}> */}
      {/*     <strong>{ item.completed ? 'Done' : 'Pending' }</strong> {item.title} */}
      {/*   </li> */}
      {/* ))} */}
    {/* </ul> */}
    <button>Next</button>
    </div>
  )
}

export default TodoApp
