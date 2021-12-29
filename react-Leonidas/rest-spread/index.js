const $flavors = document.querySelectorAll(".flavor");
console.log($flavors);
$flavors.forEach(($el) => $el.addEventListener("click", selectFlavor));

function selectFlavor() {
  this.classList.toggle("is-active");
}

function isRequired(param) {
  throw new Error(`${param} es requerido`);
}

function makeIcecream([
  flavor1 = isRequired("flavor1"),
  flavor2 = isRequired("flavor2"),
  ...otherFlavor
]) {
  const toppings = otherFlavor.map((f) => f.dataset.flavor);
  //console.log(toppings);
  alert(
    `tienes un rico helado de ${flavor1.dataset.flavor} y ${flavor2.dataset.flavor} con topping de ${toppings}`
  );
}

window.btn.addEventListener("click", () => {
  const $flavors = document.querySelectorAll(".flavor.is-active");
  //console.log($flavors);

  try {
    makeIcecream([...$flavors]);
  } catch (e) {
    alert("Aun no completas tu pedido");
  }
});
