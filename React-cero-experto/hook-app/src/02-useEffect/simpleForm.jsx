import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Message } from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;

  useEffect(() => {
    //console.log("hey");
  }, []);

  useEffect(() => {
    //console.log("hey");
  }, [formState]);

  useEffect(() => {
    //console.log("hey");
  }, [email]);

  const handleInputChange = ({ target }) => {
    //console.log(target.name);
    //console.log(target.value);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <form>
        <TextField
          id="standard-basic"
          label="Nombre"
          name="name"
          value={name}
          onChange={handleInputChange}
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          variant="standard"
        />
      </form>
      {name === "123" && <Message />}
    </>
  );
};
export { SimpleForm };
