import React, { useState } from "react";
import { MultipleCustomHoosk } from "../03-examples/MultipleCustomHooks";
import { Button } from "@mui/material";
const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Real Ref</h1>
      <hr />
      {show && <MultipleCustomHoosk />}
      <Button onClick={() => setShow(!show)}>
        {!show ? "Mostrar" : "Ocultar"}
      </Button>
    </>
  );
};
export { RealExampleRef };
