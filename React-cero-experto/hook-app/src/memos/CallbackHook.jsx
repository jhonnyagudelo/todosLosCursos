import React, { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = () => setCounter(counter + 1);

  return (
    <>
      <h1>UseCallbackHooh</h1>
      <hr />
      <ShowIncrement />
    </>
  );
};
export { CallbackHook };
