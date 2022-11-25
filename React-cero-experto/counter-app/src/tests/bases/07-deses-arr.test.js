import "@testing-library/jest-dom";
import { retornaArreglo } from "../../bases/07-deses-arr";

describe("pruebas de desestructuracion", () => {
  test("debe retirnar un strin y un numero", () => {
    //const arr = retornaArreglo();
    const [letras, numero] = retornaArreglo();
    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");
    expect(numero).toBe(123);
    expect(typeof numero).toBe("number");
  });
});
