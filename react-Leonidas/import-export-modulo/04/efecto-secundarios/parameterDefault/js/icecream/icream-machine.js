import isRequired from "./validation.js";

function makeIcecream(
  flavor1 = isRequired("flavor1"),
  flavor2 = isRequired("flavor2")
) {
  alert(
    `tienes un rico helado de ${flavor1.dataset.flavor} y ${flavor2.dataset.flavor}`
  );
}

export { makeIcecream };
