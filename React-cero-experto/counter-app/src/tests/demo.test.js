describe("Pruebas de archivo demo.test.js", () => {
  test("Deben se ser iguales los string", () => {
    /*Inicializacion*/
    const mensaje = "Hola mundo";

    // estimulo
    const mensaje2 = "Hola mundo";

    //Obsevar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
