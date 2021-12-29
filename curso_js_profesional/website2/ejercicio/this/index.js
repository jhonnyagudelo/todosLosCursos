//this en el scope global

//console.log(`this: ${this}`);
//this en el scope de una funcion

function whoIsThis() {
  return this;
}

console.log(` whoIsThis ${whoIsThis()}`);

//this dentro de un método
//Si this esta dentro de una función, pero esta función pertenece a un objeto, su valor cambia.
let perro = {
  nombre: "Kira",
  saludar: function () {
    return `Hola me llamo ${this.nombre}`;
  },
};

perro.saludar();

//This dentro de un constructor:
//En este caso, this se refiere al objeto instanciado.

//class Persona {
//constructor(nombre, edad) {
//this.nombre = nombre;
//this.edad = edad;
//}
//}

//let amigo = new Persona("Mario", 50);
//let hermana = new Persona("Claudia", 27);
//let madre = new Persona("María", 60);

//this en un arrow function:
//Las arrow functions tienen algo llamado Lexical this, que nos permiten con this llegar a un nivel superior de la función.

//Por ejemplo si nosotros tenemos la clase Persona, y queremos aumentar su edad cada segundo, usamos el siguiente código´

class Persona {
  constructor() {
    this.edad = 0;
  }

  aumentarEdad() {
    setInterval(() => {
      this.edad++;
      console.log(this.edad);
    }, 1000);
  }
}

let fili = new Persona();
