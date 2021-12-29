const createStore = (reducer, inicialState) => {
  let state = inicialState;
  let updater = () => {};
  const getState = () => state;

  const dispach = (action) => {
    state = reducer(state, action);
    updater();
  };

  const susbcribe = (listener) => {
    updater = listener;
  };

  return {
    //trae el objeto, todo lo que tenga la app
    getState,
    //invocamos los cambios del estado
    dispach,
    //todo los cambios
    susbcribe,
  };
};

export { createStore };
