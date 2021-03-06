import { TYPE } from "../action/crudAction";

export const initialState = {
  db: null,
};

export const crudReducer = (state, action) => {
  switch (action.type) {
    case TYPE.READ_ALL_DATA: {
      //console.log(action.payload);
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case TYPE.CREATE_DATA: {
      //console.log(action.payload);
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case TYPE.UPDATE_DATA: {
      //console.log(action.payload);
      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return {
        ...state,
        db: newData,
      };
    }
    case TYPE.DELETE_DATA: {
      console.log(action.payload);
      let newData = state.db.filter((el) => el.id !== action.payload);
      return {
        ...state,
        db: newData,
      };
    }
    case TYPE.NO_DATA: {
      return initialState;
    }
    default:
      return state;
  }
};
