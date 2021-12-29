import { createStore } from "./redux/index.js";
import reducer from "./reducers/index.js";

export const inicialState = {
  faltante: 1360536,
  presente: 0,
  burnComienzo: 1931999.46,
  burn: 0,
};

const store = createStore(reducer, inicialState);

export default store;
