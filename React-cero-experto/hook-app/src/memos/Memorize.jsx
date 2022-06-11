import React, { useState, memo } from "react";
import { useCounter } from "../01-useState/hook/useCounter";
import { Button } from "@mui/material";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <Button onClick={increment}>+1</Button>
      <Button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </Button>
    </>
  );
};
export { Memorize };
