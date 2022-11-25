const personajes = ["Goku", "Johan", "Vegeta"];
const [, , p3] = personajes;
//console.log(p3);

export const retornaArreglo = () => {
  return ["ABC", 123];
};

//const [letras, numero] = retornaArreglo();
//console.log(letras, numero);
//console.log(retornaArreglo());

//Tarea
export const usestate = (valor) => {
  return [
    valor,
    () => {
      console.log("holi mundo");
    },
  ];
};

//const [nombre, setNombre] = usestate("goku");
//console.log(nombre);
//setNombre();
