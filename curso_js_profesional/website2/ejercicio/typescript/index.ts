//rm -rf .cache dist
//
console.log("hello, typeScript");

function add(a: number, b: number) {
  return a + b;
}

const sum = add(2, 3);

//tipos de basicos de typeScript

//Boolean

let muted: boolean = true;

//Numeros

let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

let nombre: string = "Richard";
let saludo = `Me llamo ${nombre}`;
console.log(saludo);

//Arreglos
let personas: string[] = [];
personas = ["isabel", "Raul", "Nicol"];
personas.push("10");

let personasYNumeros: Array<string | number> = [];
personasYNumeros.push("holaaaa");
personasYNumeros.push(95000);

//Enum

enum Colores {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let ColorFavorito: Colores = Colores.Rojo;
console.log(`EL color favorito es ${ColorFavorito}`);

//Any

let comodin: any = "Joker";
comodin = { type: "Wilcard" };

//Object

let someObject: object = { type: "Wilcard" };

//Funciones

function add2(a: number, b: number): number {
  return a + b;
}
const sum2 = add2(5, 5);

function createAdder(a: number): (number: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addFour = createAdder(4);
const fourPlus = addFour(6);

function fullName(primerNombre: string, segundoNombre: string = "Smith") {
  return `${primerNombre} ${segundoNombre}`;
}

function fullName2(primerNombre: string, segundoNombre?: string) {
  return `${primerNombre} ${segundoNombre}`;
}

const richar = fullName("jhonny", "Agudelo");

//interfaces
//definen las forma exacta que definen un objeto no permiten añadir de mas ni de menos, en caso de que una pro

enum Color2 {
  verde = "verde",
  azul = "azul",
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color2;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 5,
};

function area(r: Rectangulo) {
  return r.ancho * r.alto;
}
