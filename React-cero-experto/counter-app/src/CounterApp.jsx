import React, { useState } from "react";
import PropTypes from "prop-types";
const CounterApp = ({ numero }) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(counter === 0);
  };

  const handleRemove = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <p>{counter}</p>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRemove}>-1</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

CounterApp.propTypes = {
  numero: PropTypes.number,
};

export { CounterApp };
