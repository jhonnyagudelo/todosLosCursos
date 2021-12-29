function calcularMediaAritmetica(lista) {
  //let sumaLista = 0;
  //for (let i = 0; i < lista.length; i++) {
  //sumaLista += lista[i];
  //}

  const sumaLista = lista.reduce(function (valorAcomulado = 0, elementoActual) {
    return valorAcomulado + elementoActual;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
