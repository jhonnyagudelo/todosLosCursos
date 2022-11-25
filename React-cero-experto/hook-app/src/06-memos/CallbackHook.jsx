import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((value) =>{ setCounter((counter) => counter + value) },[])

  return (
    <>
      <h1>UseCallbackHooh: { counter }</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
export { CallbackHook };
