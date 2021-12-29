import { useState, useEffect } from "react";
//reglas de los hooks:
//no se llama en loops, ni condicionales etc
//siempre en el nivel mas alto del componmente
//solo se llama en 2 pates
//compoenetes de React
//custom hooks
//Recomendacion
//cuando se crea un custom hooks se debe de llamar useNombre

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};

//desubcribirse

const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000);
    return () => clearInterval(i);
  }, [contador]);
  return <p>Intervalo</p>;
};

const App = () => {
  const [contador, incrementar] = useContador(0);
  useEffect(() => {
    document.title = contador;
  }, [contador]);
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementart</button>
      <Interval contador={contador} />
    </div>
  );
};
export { App };
