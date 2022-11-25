import "@testing-library/jest-dom";
import { getSaludo } from "../../bases/02-template-string";

describe("pruebas en 02-tempalte-string", () => {
  test("getSaludo debe de retornar espacio + nombre", () => {
    const nombre = "jhonny";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  //getSaludo debe retornar Hola stiven si no tiene argumentos
  test("getSaludo debe de retornar Hola stiven", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Stiven");
  });
});
