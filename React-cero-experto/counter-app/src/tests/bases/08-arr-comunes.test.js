import { getHeroeById, getHeroeByOwner } from "../../bases/08-arr-comunes";
import { heroes } from "../../data/heroes";

describe("Prueba en funciones de heroes", () => {
  test("debe de retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test("debe de retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("Debe resportar un arreglo con los heroes DC", () => {
    const owner = "DC";
    const heroes = getHeroeByOwner(owner);
    const heroeData = heroes.filter((heroe) => heroe.owner === owner);
    expect(heroes).toEqual(heroeData);
  });

  test("Debe resportar un arreglo con los heroes marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroeByOwner(owner);
    expect(heroes.length).toBe(2);
  });
});
