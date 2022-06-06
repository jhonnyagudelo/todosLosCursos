import React, { useState } from "react";
import { Button } from "@mui/material";

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
  });

  const { counter1, counter2 } = state;

  return (
    <>
      <h1>Counter {counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <hr />
      <Button
        variant="contained"
        onClick={() => {
          setState({ ...state, counter1: counter1 + 1 });
        }}
      >
        +1
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setState({ ...state, counter2: counter2 + 1 });
        }}
      >
        +1
      </Button>
    </>
  );
};
export { CounterApp };
