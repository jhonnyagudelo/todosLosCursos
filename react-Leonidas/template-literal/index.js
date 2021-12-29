//template literals
//

const nombre = "jhonny";
console.log(`Hola como estas ${nombre}`);
console.log(`Hola como estas ${26}`);
console.log(`Hola como estas ${"Coma mierda"}`);
console.log(`Hola como estas ${(x = "jdd")}`);
console.log(
  `Hola como estas ${(function name() {
    return "leo";
  })()}`
);
console.log(`Hola como estas ${(() => "jhonnysss")()}`);
console.log(`Hola como estas ${true && "jhonny ternario"}`);
console.log(`Hola como estas ${false ? "jhonny ternario" : "jhonny false"}`);
console.log(`Hola como estas ${["a", "b"].map((letra) => `${letra}-styled`)}`);
