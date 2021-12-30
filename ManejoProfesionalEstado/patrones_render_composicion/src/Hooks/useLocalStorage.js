import React, { useReducer, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(
    reducer,
    (initialState = { initialValue })
  );
  const { sincronizedItem, error, loading, item } = state;

  //ACTION CREATORS
  const onError = () => {
    dispatch({
      type: actionTypes.error,
      payload: error,
    });
  };

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        onError();
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      dispatch({
        type: actionTypes.error,
        payload: error,
      });
    }
  };

  const sincronize = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronize,
  };
}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
});

const reducer = (state, action) => {
  reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
