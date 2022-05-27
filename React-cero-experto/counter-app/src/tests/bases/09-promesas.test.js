import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
  test("debe de retonar un heroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("debe obtener un error si el heroe por Id no existe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((e) => {
      expect(e).toBe("No se encontro el heroe");
      done();
    });
  });
});
