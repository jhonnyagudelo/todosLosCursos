import React from "react";
import PropTypes from "prop-types";
const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>Hola mundooo !!!</h1>
      <p>{subtitulo}</p>
      {saludo}
    </>
  );
};

PrimeraApp.propTypes = {
  saludo:
    PropTypes.string /*Que sea tipo string si lo quiere requerido   '.isRequired' */,
};

PrimeraApp.defaultProps = {
  subtitulo: "soy un subti",
};

export { PrimeraApp };
