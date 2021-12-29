function calcularPerimetroCuadraro() {
  const input = document.getElementById("cuadrado");
  const value = input.value;

  const perimetro = perimetoCuadraro(value);
  const res = document.getElementById("respuesta");
  perimetro;
}

function calcularAreaCuadrado() {
  const input = document.getElementById("cuadrado");
  const value = input.value;

  const area = areaCuadraro(value);
  alert(area);
}

//Cuadrado
console.group("cuadrado");

function perimetoCuadraro(lado) {
  return lado * 4;
}

function areaCuadraro(lado) {
  return lado * lado;
}

console.groupEnd();

//triangulo
console.group("triangulo");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, alturaTriangulo) {
  return (base * alturaTriangulo) / 2;
}

console.groupEnd();

console.group("Circulo");

//Diametro

function diametroCirculo(radio) {
  return radio * 2;
}

//PI

const PI = Math.PI;
console.log(PI);

//Circunferencia

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//area
function areaCirculo(radioCirculo) {
  return radioCirculo * PI;
}

console.groupEnd();
