import { ACTION_TYPE } from "../action/actionType";

export const reducerObject = (state, payload) => ({
  [ACTION_TYPE.SUMAR]: {
    ...state,
    item: payload,
  },

  [ACTION_TYPE.RESTAR]: {
    ...state,
    item: payload,
  },

  [ACTION_TYPE.DECREMENTAR_5]: {
    ...state,
    item: payload,
  },
  [ACTION_TYPE.INCREMENTAR_5]: {
    ...state,
    item: payload,
  },
  [ACTION_TYPE.RESTAR]: {
    ...state,
    item: payload,
  },
});
