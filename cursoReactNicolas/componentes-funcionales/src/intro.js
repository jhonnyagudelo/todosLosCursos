const MiComponente = ({ miProp }) => {
  return <div>nombre :{miProp}</div>;
};

function App() {
  return <MiComponente miProp={"chanchito feliz"} />;
}

export default App;
