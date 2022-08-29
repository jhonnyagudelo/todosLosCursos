import React, { useEffect } from "react";
import { useForm } from "./hooks/useForm";
import { TextField, Button } from "@mui/material";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("email cambio");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <h1>FormWithCustomHook</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="name"
          value={name}
          onChange={handleInputChange}
          variant="standard"
        />
        <TextField
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          variant="standard"
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
          variant="standard"
        />
        <Button variant="contained" type="submit">
          Guardar
        </Button>
      </form>
    </>
  );
};
export { FormWithCustomHook };
