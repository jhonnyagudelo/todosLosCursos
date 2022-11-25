import { getHeroeById, getHeroeByOwner } from "./bases/08-arr-comunes";

//Promesas

//const promesa = new Promise((resolve, reject) => {
//setTimeout(() => {
////resolve(console.log("2mil segundos"));
//const heroe = getHeroeById(100);
////console.log(heroe);
//resolve(heroe);
//reject("No se encontro el heroe");
//}, 2000);
//});

//promesa
//.then((heroe) => {
//console.log("heroe", heroe);
//})
//.catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se encontro el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(1)
  .then((heroe) => console.log(heroe.name))
  .catch((err) => console.warn(err));
