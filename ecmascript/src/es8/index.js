//permite la clave y valores de una matriz

const data = {
  fronted: "oscar",
  backend: "jhonny",
  desing: "Ana",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//object values --- devolver valores de un objeto a un arreglo

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = "Hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, "------"));

//Async Await
//

const helloWord = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("hello world"), 3000)
      : reject(new Error("Test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWord();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWord();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
