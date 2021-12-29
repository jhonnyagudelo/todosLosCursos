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
    getState,
    dispach,
    susbcribe,
  };
};
const reducer = (state, action) => {
  return action;
};
const store = createStore(reducer, "estado inicial de la aplicacion");
//store.dispach
//store.getState
//store.subscribe

store.susbcribe(() => {
  console.log("ha cambiado algo en el store", store.getState());
});
store.dispach("voy a cambiar algo");
