import React from "react";
import { Button } from "@mui/material";
import { useCounter } from "./hook/useCounter";
const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);
  return (
    <>
      <h1>Counter with hook:{state}</h1>
      <hr />
      <Button variant="contained" onClick={() => increment(2)}>
        +1
      </Button>
      <Button variant="contained" onClick={() => decrement(2)}>
        -1
      </Button>
      <Button variant="contained" onClick={reset}>
        reset
      </Button>
    </>
  );
};
export { CounterWithCustomHook };
