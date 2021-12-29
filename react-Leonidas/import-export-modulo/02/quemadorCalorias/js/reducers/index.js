import { BURN } from "../actions/index.js";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case BURN:
      //return state + 1.42;
      //burn: state.burn
      return {
        faltante: state.faltante - 1,
        presente: state.presente + 1,
        burnComienzo: state.burnComienzo - payload,
        burn: state.burn + payload,
      };
    default:
      return state;
  }
};

export default reducer;
