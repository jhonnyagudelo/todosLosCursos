import React, { useState, useMemo } from "react";
import { useCounter } from "../01-useState/hook/useCounter";
import { procesoPesado } from "./helper/procesoPesado";
import { Button } from "@mui/material";

const MemoHook = () => {
  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(true);

  const memoProceso = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <p>{memoProceso}</p>
      <Button onClick={increment}>+1</Button>
      <Button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </Button>
    </>
  );
};
export { MemoHook };
