import { createContext, useCallback, useContext, useState, memo } from "react";

const Context = createContext();

const ContadorProvider = ({ children }) => {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => setContador((x) => x + 1));
  const decrementar = useCallback(() => setContador((x) => x - 1));
  return (
    <Context.Provider value={{ contador, decrementar, incrementar }}>
      {children}
    </Context.Provider>
  );
};

const Incrementar = memo(() => {
  console.log("incrementar");
  const { incrementar } = useContext(Context);
  return <button onClick={incrementar}>incrementar</button>;
});

const Decrementar = memo(() => {
  console.log("incrementar");
  const { decrementar } = useContext(Context);
  return <button onClick={decrementar}>decrementar</button>;
});

const Label = memo(() => {
  console.log("Label");
  const { contador } = useContext(Context);
  return <h1>{contador}</h1>;
});

const App = () => {
  return (
    <ContadorProvider>
      <Label />
      <Incrementar />
      <Decrementar />
    </ContadorProvider>
  );
};

export { App };
