import React from "react";
import { useStorageListener } from "./useStorageListener";

const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div>
        <p> hubo un cambio </p>
        <button onClick={toggleShow}>Refrescar</button>
      </div>
    );
  } else {
    return null;
  }
};

export { ChangeAlert };
