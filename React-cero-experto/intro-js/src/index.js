console.log("Hola mundo!!");

//desestructuracion
// Asinganacion desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Iroman",
};
//const { nombre, edad, clave } = persona;
//console.log(nombre);

const retornaPersona = ({ nombre, edad, rango = "Capi" }) => {
  console.log(nombre, edad, rango);
};

retornaPersona(persona);

const usecontext = ({ clave, nombre, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
  };
};

const { nombreClave, anios } = usecontext(persona);
console.log(nombreClave, anios);
