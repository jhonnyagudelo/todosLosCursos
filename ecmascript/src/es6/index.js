//parametros por defectos

function newFuncion(name = "Ricardo", edad = 32, origen = "Co") {
  console.log(name, edad, origen);
}

//desestrucracion de datos

let person = {
  name: "oscar",
  age: 30,
  country: "mx",
};

console.log(person.name, person.age);

//es6
let { name, age, country } = person;
console.log(name, age);

//unir varios elementos
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];

let education = ["David", ...team1, ...team2];
console.log(education);

//objetos
let name1 = "jhonny";
let age1 = 31;

obtj = { name1, age1 };
console.log(obtj);

//arrow function

const names = [
  { name: "jhonny", age: 30 },
  { name: "alejadnro", age: 30 },
];

//let listOfName = names.map(function (item) {
//console.log(item.name);
//});

let listOfNames2 = names.map((item) => console.log(item.name));

//const listOfNames3 = (name, age, country) => {
//...
//}

//const listOfNames4 = name => {
//...
//}

const square = (num) => num * num;

//promesas

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//clases

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sumar(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sumar(2, 8));

//import { hello } from "./module";
//hello();

//generator
function* helloWorld() {
  if (true) {
    yield "Hello ";
  }
  if (true) {
    yield "world";
  }
}

const generetorHello = helloWorld();
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);
