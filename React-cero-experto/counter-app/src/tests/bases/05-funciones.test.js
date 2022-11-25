import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe("Pruebas de funciones", () => {
  test("getUSer debe de retirnar un objero", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    console.log(user);
    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe retornar un obejeto", () => {
    const nombre = "Juan";
    const user = getUsuarioActivo(nombre);
    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
