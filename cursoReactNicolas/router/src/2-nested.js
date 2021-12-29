import { Switch, Route, Link } from "react-router-dom";

const Portafolio = () => {
  return (
    <section>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={"/portafolio/proyecto-1"}>Proyecto1</Link>
        </li>
        <li>
          <Link to={"/portafolio/proyecto-2"}>Proyecto2</Link>
        </li>
      </ul>
      <di>
        <Switch>
          <Route path={"/portafolio/proyecto-1"}>
            <h2>Proyecto 1</h2>
          </Route>
          <Route path={"/portafolio/proyecto-2"}>
            <h2>Proyecto 2</h2>
          </Route>
        </Switch>
      </di>
    </section>
  );
};

function App() {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Route exact path="/">
            Inicio
          </Route>
          <Route path="/portafolio">
            <h1>Portafolio</h1>
            <Portafolio />
          </Route>
        </Switch>
      </section>
    </section>
  );
}

export { App };
