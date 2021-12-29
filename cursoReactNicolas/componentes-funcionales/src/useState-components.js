import { Component, useState } from "react";
//reglas de los hooks:
//no se llama en loops, ni condicionales etc
//siempre en el nivel mas alto del componmente
//solo se llama en 2 pates
//compoenetes de React
//custom hooks
//Recomendacion
//cuando se crea un custom hooks se debe de llamar useNombre

class App extends Component {
  state = { contador: 0 };
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <div>
        contador: {this.state.contador}
        <button onClick={this.incrementar}>Incrementart</button>
      </div>
    );
  }
}

//const App = () => {
//const [contador, setContador] = useState(0);
//return (
//<div>
//Contador: {contador}
//<button onClick={() => setContador(contador + 1)}>Incrementart</button>
//</div>
//);
//};
export { App };
