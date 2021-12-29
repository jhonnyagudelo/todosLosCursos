import { combineReducers } from "redux";
import { makeFetchingReducer, makeSetReducer } from "./utils";

const setPending = () => {
  return {
    type: "todo/pending",
  };
};

export const setFullfilled = (payload) => ({
  type: "todos/fulfilled",
  payload,
});
export const setError = (e) => ({ type: "todos/error", error: e.message });
export const setComplete = (payload) => ({ type: "todos/completed", payload });
export const setFilter = (payload) => ({ type: "filter/set", payload });
export const fetchTunck = () => async (dispatch) => {
  dispatch(setPending());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const todos = data.slice(0, 10);
    dispatch(setFullfilled(todos));
  } catch (e) {
    dispatch(setError());
  }
};

export const filterReducer = makeSetReducer(["filter/set"]);

export const fetchingReducer = makeFetchingReducer([
  "todos/pending",
  "todos/fulfilled",
  "todos/rejected",
]);

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "todos/fulfilled": {
      return action.payload;
    }
    case "todo/add": {
      return state.concat({ ...action.payload });
    }
    case "todo/completed": {
      const newTodo = state.map((todo) => {
        if (todo.id === action.payload.id)
          return {
            ...todo,
            completed: !todo.completed,
          };
        return todo;
      });
      return newTodo;
    }
    default:
      return state;
  }
};

export const reducer = combineReducers({
  todos: combineReducers({
    entities: todoReducer,
    status: fetchingReducer,
  }),
  filter: filterReducer,
});

export const selectTodos = (state) => {
  const {
    todos: { entities },
    filter,
  } = state;
  if (filter === "completed") {
    return entities.filter((todo) => todo.completed);
  }
  if (filter === "incompleted") {
    return entities.filter((todo) => !todo.completed);
  }
  return entities;
};

export const selectStatus = (state) => state.todos.status;
