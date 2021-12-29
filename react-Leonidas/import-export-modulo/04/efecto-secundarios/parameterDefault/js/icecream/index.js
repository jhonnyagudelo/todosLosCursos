import { makeIcecream } from "./icream-machine.js";

const $flavors = document.querySelectorAll(".flavor");
console.log($flavors);
let selectFlavors = [];
$flavors.forEach(($el) => $el.addEventListener("click", selectFlavor));

function selectFlavor() {
  if (!selectFlavors.includes(this)) {
    selectFlavors.push(this);
    this.classList.toggle("is-active", true);
    if (selectFlavors.length > 2) {
      deleted = selectFlavors.shift();
      deleted.classList.toggle("is-active", false);
    }
  } else if (selectFlavors.includes(this)) {
    selectFlavors.splice(selectFlavors.indexOf(this), 1);
    this.classList.toggle("is-active", false);
  }
}

window.btn.addEventListener("click", () => {
  const $flavors = document.querySelectorAll(".flavor.is-active");
  console.log($flavors);

  try {
    makeIcecream($flavors[0], $flavors[1]);
  } catch (e) {
    alert("Aun no completas tu pedido");
  }
});
