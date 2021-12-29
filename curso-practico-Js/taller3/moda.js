const lista1 = [1, 2, 3, 4, 2, 2, 2, 2, 1, 1, 1, 2];
const listaCount = {};

lista1.map(function (elemento) {
  if (listaCount[elemento]) {
    listaCount[elemento] += 1;
  } else {
    listaCount[elemento] = 1;
  }
});

const listaArray = Object.entries(listaCount).sort(function (
  elementoA,
  elementoB
) {
  return elementoA[1] - elementoB[1];
});

const moda = listaArray[listaArray.length - 1];
