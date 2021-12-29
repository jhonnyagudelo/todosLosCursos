//function call
function saludar() {
  console.log(`Hola mi nombre es ${this.name} ${this.apellido}`);
}
const jhonny = {
  name: "jhonny",
  apellido: "Agudelo",
};

saludar.call(jhonny);

//function call con argumentos
function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metros} hacia la direccion ${direccion}`);
}

caminar.call(jhonny, 12, "norte");

//apply
//hace la misma funcionalidad que call pero con array

const valores = [800, "sur"];
caminar.apply(jhonny, valores);

//blind
//crea una nueva funcion
//tambien se puede giardar argumentos parciales
const stiven = {
  name: "stiven",
  apellido: "tenorio",
};

const danielSaluda = saludar.bind(stiven);
danielSaluda();

const danielCamina = caminar.bind(stiven, 2000, "este");
danielCamina();

const buttons = document.getElementsByClassName("call-to-action");
//buttons.forEach((button) => {
//button.onclick = () => alert("jodeteeee aprendiendo");
//});

Array.prototype.forEach.call(buttons, (button) => {
  button.onclick = () => alert("jodeteee aprendiendo");
});
