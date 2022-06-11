import React, { useRef } from "react";
import { TextField, Button } from "@mui/material";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    //document.querySelector("input").select();
    inputRef.current.select();
    console.log(inputRef);
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <TextField
        inputRef={inputRef}
        id="outlined-basic"
        fullWidth
        label="Nombre"
        variant="outlined"
      />
      <Button onClick={handleClick}>Focus</Button>
    </>
  );
};
export { FocusScreen };
