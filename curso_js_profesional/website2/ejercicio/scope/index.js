//global scope
function printNumeros() {
  for (var i = 0; i < 5; i++) {
    function eventuallyPrintNumber(n) {
      setTimeout(function () {
        console.log(n);
      }, 100);
    }
    eventuallyPrintNumber(i);
  }
}

printNumeros();

//Block scope

function printNumeros2() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  }
}

printNumeros2();
