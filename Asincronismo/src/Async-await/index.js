//const doSomethingAsync = () => {
//return new Promise((resolve, reject) => {
//true
//? setTimeout(() => resolve("Do Something Async"), 3000)
//: reject(new Error("Test Error"));
//});
//};

//const doSomethin = async () => {
//const something = await doSomethingAsync();
//console.log(something);
//};

//console.log("Before");
//doSomethin();
//console.log("after");

//const anotherFunction = async () => {
//try {
//const something = await doSomethingAsync();
//console.log(something);
//} catch (error) {
//console.error(error);
//}
//};

//console.log("Before 1");
//anotherFunction();
//console.log("after 2");

//const datos = [
//{
//id: 1,
//title: "iron man",
//year: 2008,
//},
//{
//id: 2,
//title: "Spiderman",
//year: 2017,
//},
//{
//id: 3,
//title: "Avendger",
//year: 2019,
//},
//];

const datos = [];

//const getDatos = () => {
//return datos;
//};

//promesas

const getDatos = () => {
  return new Promise((resolve, reject) => {
    if (datos.length === 0) {
      reject(new Error("no hay dato"));
    }
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};

getDatos().then((datos) => console.log(datos));

async function fetData() {
  try {
    const dato = await getDatos();
    console.log(dato);
  } catch (err) {
    console.log(err.message);
  }
}

fetData();
