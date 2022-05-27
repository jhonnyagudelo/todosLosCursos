import "@testing-library/jest-dom";
import { getImagen } from "../../bases/11-async-await";

describe("pruebas async await", () => {
  test("debe de retornar la url de la imagen", async () => {
    const url = await getImagen();
    expect(url.include("https://")).toBe(true);
  });
});
