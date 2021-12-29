import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  setComplete,
  fetchTunck,
  selectTodos,
  selectStatus,
} from "./features/todo";

//componente
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => dispatch(setComplete())}
    >
      {todo.title}
    </li>
  );
};

const App = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus);

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    const id = Math.random().toString(36);
    const todo = { title: value, completed: false, id };
    dispatch({ type: "todo/add", payload: todo });
    setValue("");
  };

  if (status.loading === "pending") {
    return <p>Cargando...</p>;
  }

  if (status.loading === "rejected") {
    return <p>status.error...</p>;
  }
  return (
    <>
      <form onSubmit={submit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <button onClick={() => dispatch(setFilter("all"))}>Mostrar</button>
      <button onClick={() => dispatch(setFilter("completed"))}>
        Completador
      </button>
      <button onClick={() => dispatch(setFilter("incompleted"))}>
        Incompletos
      </button>
      <button onClick={() => dispatch(fetchTunck())}>Fetch</button>
      <ul>
        <li>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </li>
      </ul>
    </>
  );
};
export default App;
