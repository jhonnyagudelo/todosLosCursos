const salarioCol = colombia.map(function (persona) {
  return persona.salary;
});

const salarioColSorted = salarioCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

function esPar(numero) {
  return numero % 2 === 0;
}

function calcularMediaArismetica(lista) {
  const sumaLista = lista.reduce(function (vA = 0, vN) {
    return vA + vN;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function medianaSalario(lista) {
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularMediaArismetica([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

const medianaGeneralCol = medianaSalario(salarioColSorted);

//mediana top 10%

const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStart;

const salariosColTop10 = salarioColSorted.splice(spliceStart, spliceCount);

const mediaTop10 = medianaSalario(salariosColTop10);

console.log(medianaGeneralCol, mediaTop10);
