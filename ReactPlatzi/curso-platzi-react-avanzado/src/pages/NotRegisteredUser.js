import React, { useContext } from "react";
import { AppContext } from "../contex/AppContenx";
import UseForm from "../components/UseForm";

const NotRegisteredUser = () => {
  const { login } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(e);
  };
  return (
    <>
      <UseForm onSubmit={handleSubmit} title="Registrar" />
      <UseForm onSubmit={handleSubmit} title="Iniciar sesion" />
    </>
  );
};
export default NotRegisteredUser;
