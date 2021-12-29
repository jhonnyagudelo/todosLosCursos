//IIFE
(function () {
  let color = "green";

  function printColor() {
    console.log(color);
  }
  printColor();
})();

//Funciones que regresan funciones

function makeColorPrinter(color) {
  let colorMessage = `El color es ${color}`;
  return function () {
    console.log(colorMessage);
  };
}

let greenColor = makeColorPrinter("rojo");
console.log(greenColor());

///variables privadas

function makeCounter(n) {
  let count = n;
  return {
    increase: function () {
      conunt += 1;
    },
    decrease: function () {
      count -= 1;
    },
    getCount: function () {
      return count;
    },
  };
}

let counter = makeCounter(7);
console.log(`el contador es: ${counter.getCount()}`);
