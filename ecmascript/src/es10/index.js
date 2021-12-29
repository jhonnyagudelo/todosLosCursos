let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat());

let array1 = [1, 2, 3, 4, 5];
console.log(array1.flatMap((value) => [value, value * 2]));

let hello = "      hello world";
console.log(hello);
console.log(hello.trimStart());

let entries = [
  ["name", "jhonny"],
  ["age", 32],
];
console.log(Object.fromEntries(entries));

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
