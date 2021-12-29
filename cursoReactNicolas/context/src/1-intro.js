import { createContext, useContext } from "react";

const DefaultContext = createContext("valor por defecto");

const Context = createContext("valor por defecto2");

const DefaultProvider = ({ children }) => {
  return <Context.Provider value={"mi valor"}>{children}</Context.Provider>;
};

const Contenido = () => {
  const ctx = useContext(DefaultContext);
  return <div>{ctx}</div>;
};

const Contenido2 = () => {
  const ctx = useContext(Context);
  return <div>{ctx}</div>;
};

function App() {
  return (
    <DefaultProvider>
      <Contenido> </Contenido>
      <Contenido2> </Contenido2>
    </DefaultProvider>
  );
}

export default App;
