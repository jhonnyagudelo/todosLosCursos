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

const reducer = (state, action) => {
  switch (action.type) {
    case "BURN":
      //return state + 1.42;
      //burn: state.burn
      return {
        faltante: state.faltante - 1,
        presente: state.presente + 1,
        burnComienzo: state.burnComienzo - action.payload,
        burn: state.burn + action.payload,
      };
    default:
      return state;
  }
};

const inicialState = {
  faltante: 1360536,
  presente: 0,
  burnComienzo: 1931999.46,
  burn: 0,
};

const store = createStore(reducer, inicialState);
//store.dispach
//store.getState
//store.subscribe

store.susbcribe(() => {
  console.log(store.getState().presente);
  window.clicksP.textContent = `Haz dado ${store.getState().presente} clics`;
  window.clicksL.textContent = `Te faltan ${store.getState().faltante} clics`;
  window.result.textContent = `Haz quemado ${store.getState().burn} y faltan 
  ${store.getState().burnComienzo} calorias`;
});

const burn = () => {
  store.dispach({
    type: "BURN",
    payload: 1.42,
  });
};

window.burn.addEventListener("click", burn);
