const obj = {
  name: "jhonny",
  age: 32,
  country: "Col",
};

let { name, ...all } = obj;
console.log(name, all);

//sacar el elemento del arreglo
//let { country, ...all } = obj;
//console.log(all);
//

const obj1 = {
  name: "Jhoony",
  age: 32,
};

const obj2 = {
  ...obj1,
  country: "Col",
};

console.log(obj2);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hii Motherfucker"), 3000)
      : reject(new Error("Test error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
