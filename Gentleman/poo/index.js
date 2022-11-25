/*const profesor = {
  legajo: "123",
  nombre: "Jhonny",
  apellido: "agudelo",
  materia: "programacion",
};

const alumno = {
  matricula: "123",
  nombre: "Diego",
  apellido: "pepito",
  carrera: "Ing.Sistemas",
  estudiar: () => {
    console.log("Estudiando");
  },
  noHacerNada: () => {
    console.log("Perezaaaa...");
  },
};*/

class Persona {
  nombre;
  apellido;
  edad;
  sexo;
  constructor(nombre, apellido, edad, sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
  }
  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    if (typeof nombre === "string") {
      this.nombre = nombre;
    } else {
      console.log("Ingrese un caracter valido");
    }
  }
  getApellido() {
    return this.apellido;
  }

  setApellido(apellido) {
    this.apellido = apellido;
  }
  getEdad() {
    return this.edad;
  }
  setEdad(edad) {
    this.nombre = nombre;
  }
  getSexo() {
    return this.sexo;
  }
  setSexo(sexo) {
    this.sexo = sexo;
  }
}

class Alumno extends Persona {
  matricula;
  carrera;
  constructor(nombre, apellido, edad, sexo, carrera, matricula) {
    super(nombre, apellido, edad, sexo);
    this.matricula = matricula;
    this.carrera = carrera;
  }

  getMatricula() {
    return this.matricula;
  }
  setMatricula(matricula) {
    if (typeof matricula === "string") {
      this.matricula = matricula;
    } else {
      console.log("Ingrese un caracter valido");
    }
  }

  getCarrera() {
    return this.carrera;
  }
  setCarrera(carrera) {
    this.carrera = carrera;
  }

  estudiar = () => {
    console.log("Estudiando");
  };
  noHacerNada = () => {
    console.log("Perezaaaa...");
  };
}

class Profesor extends Persona {
  legajo;
  carrera;
  constructor(nombre, apellido, edad, sexo, carrera, legajo ) {
    super(nombre, apellido, edad, sexo);
    this.legajo = legajo;
    this.carrera = carrera;
  }

  getMatricula() {
    return this.matricula;
  }
  setMatricula(matricula) {
    if (typeof matricula === "string") {
      this.matricula = matricula;
    } else {
      console.log("Ingrese un caracter valido");
    }
  }

  getLegajo() {
    return this.legajo;
    }
  setLegajo(legajo) {
    this.legajo = legajo;
  }

  getCarrera() {
    return this.carrera;
  }
  setCarrera(carrera) {
    this.carrera = carrera;
  }

  estudiar = () => {
    console.log("Estudiando para la clase");
  };

}


const alumno = new Alumno("1234", "jhonny", "agudelo",29,'M', "Ing.sistemas");
const profesor = new Profesor("1234", "jhonny", "agudelo", 29,'M', "Ing.sistemas");
alumno.setMatricula("1234");
console.log(alumno.getMatricula());

const arregloDePersonas = [alumno, profesor];
for (let index = 0; index < arregloDePersonas.length; index++) {
  arregloDePersonas[index].estudiar();
  
}
