import "@testing-library/react";
import React from "react";
import { render } from "@testing-library/react";
import { PrimeraApp } from "../PrimeraApp";

describe("Prueba en <PrimeraApp/>", () => {
  test('Debe mostrar el mensaje de "Hola, soy goku"', () => {
    const saludo = "Hola soy goku";
    const { getByText } = render(<PrimeraApp saludo="hola soy goku" />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});
