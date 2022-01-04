import React from "react";
import { useTodos } from "../Hooks/useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoHeader } from "../TodoHeader";
import { ChangeAlert } from "../ChangeAlert";

function App() {
  const { state, stateUpdaters } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
  } = state;

  const {
    addTodo,
    setSearchValue,
    completeTodo,
    deleteTodo,
    setOpenModal,
    sincronizeTodo,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch
          searchedTodos={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        // llamar UI
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={(searchText) => (
          <p>No hay resultador para {searchText} </p>
        )}
        //render={(todo) => (
        //<TodoItem
        //key={todo.text}
        //text={todo.text}
        //completed={todo.completed}
        //onComplete={() => completeTodo(todo.text)}
        //onDelete={() => deleteTodo(todo.text)}
        ///>
        //)}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlert sincronize={sincronizeTodo} />
    </React.Fragment>
  );
}

export default App;
