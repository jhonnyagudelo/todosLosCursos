const compose =
  (...functions) =>
  (data) =>
    functions.reduceRight((value, func) => func(value), data);

const IS_INVALID = "is-invalid";

const description = document.getElementById("descripcion");
const calories = document.getElementById("calorias");
const carbs = document.getElementById("carbohidratos");
const protein = document.getElementById("proteinas");
const inputs = [description, calories, carbs, protein];

let list = [];

const isValid = (elem) => elem.value;

const isFormValid = () =>
  isValid(description) &&
  isValid(calories) &&
  isValid(carbs) &&
  isValid(protein);

const showInvalid = (elem) =>
  isValid(elem) ? "" : elem.classList.add(IS_INVALID);

const addKeydownEvent = (elem) =>
  elem.addEventListener("keydown", () => elem.classList.remove(IS_INVALID));

inputs.forEach(addKeydownEvent);

const validateInputs = () => {
  inputs.forEach(showInvalid);

  if (isFormValid()) {
    add();
    console.log("OK");
  }
};

const add = () => {
  const newItem = {
    description: description.value,
    calories: calories.value,
    carbs: carbs.value,
    protein: protein.value,
  };
  list.push(newItem);
  clearInput();
  console.log(list);
};

const clearInput = () => {
  (description.value = ""),
    (calories.value = ""),
    (carbs.value = ""),
    (protein.value = "");
};
