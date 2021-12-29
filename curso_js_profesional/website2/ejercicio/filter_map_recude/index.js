//Map()
const productos = [
  { id: "vju1", nombre: "camisa", precio: 500 },
  { id: "vju2", nombre: "zapatilla", precio: 2000 },
  { id: "vju3", nombre: "pantalon", precio: 1500 },
];

const productoConDescuento = productos.map(function (producto) {
  if (producto.precio < 1000) return producto;
  return {
    ...producto,
    precio: producto.precio * 0.9,
  };
});

//sacar el id de los productos

const idProducto = productos.map(function (producto) {
  return producto.id;
});

//arrow function

const idProduct = productos.map(({ id }) => id);

//filte()
const esBarato = (producto) => producto.precio < 1000;
const esCaro = (producto) => !esBarato(producto);
const productoBaratos = productos.filter(esBarato);
const productoCaros = productos.filter(esCaro);

const numeros = [1, 2, 3, 4, 1, 3];
const numerosUnicos = numeros.filter((numero, posicion, numeros) => {
  return posicion === numeros.indexOf(numero);
});

//reduce()

const acumular = (acumulador, numero) => acumulador + numero;
let total = numeros.length > 0 ? numeros.reduce(acumular) : 0;
