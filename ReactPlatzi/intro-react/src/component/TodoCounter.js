import React from "react";
import "../css/TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has Completado {completedTodos} de {totalTodos} ToDo
    </h2>
  );
}

export { TodoCounter };
