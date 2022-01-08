import React, { useReducer } from "react";
import { ACTION_TYPE } from "../action/actionType";
import { reducerObject } from "../reducer/reducer";

const Contador = () => {
  const initialState = { item: 0 };

  //ACTION CREATE
  const onSumar = (item) => {
    dispatch({
      type: ACTION_TYPE.SUMAR,
      payload: item + 1,
    });
  };

  const onRestar = (item) => {
    dispatch({
      type: ACTION_TYPE.RESTAR,
      payload: item - 1,
    });
  };

  const onDecre_5 = (item) => {
    dispatch({
      type: ACTION_TYPE.DECREMENTAR_5,
      payload: item - 5,
    });
  };

  const onIncre_5 = (item) => {
    dispatch({
      type: ACTION_TYPE.DECREMENTAR_5,
      payload: item + 5,
    });
  };

  const onReset = (item) => {
    dispatch({
      type: ACTION_TYPE.DECREMENTAR_5,
      payload: (item = 0),
    });
  };

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //iniciacion
  const { item } = state;

  //funciones
  const sumar = () => {
    onSumar(item);
  };
  const restar = () => {
    onRestar(item);
  };

  const decrementar = () => {
    onDecre_5(item);
  };

  const incrementar = () => {
    onIncre_5(item);
  };

  const reset = () => {
    onReset(item);
  };

  return (
    <>
      <h2>Contador</h2>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
      <button onClick={reset}>0</button>
      <p>{item}</p>
    </>
  );
};
export { Contador };
