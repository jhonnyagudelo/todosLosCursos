import React from "react";
import { Button } from "@mui/material";
const ShowIncrement = ({ increment}) => {
  return (
    <>
      <Button onClick={() => increment(5)}>Incrementar</Button>
    </>
  );
};
export { ShowIncrement };
