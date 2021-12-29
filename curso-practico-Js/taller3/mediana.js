const lista = [100, 200, 300, 153];

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcomulado = 0, elementoActual) {
    return valorAcomulado + elementoActual;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
const mitadLista = parseInt(lista.length / 2);

function es_par(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (es_par(lista.length)) {
  const element1 = lista[mitadLista - 1];
  const element2 = lista[mitadLista];
  const promedioElemento = calcularMediaAritmetica([element1, element2]);
  mediana = promedioElemento;
} else {
  mediana = lista[mitadLista];
}
