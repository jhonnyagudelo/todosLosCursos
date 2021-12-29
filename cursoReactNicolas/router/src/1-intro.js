import { Switch, Route, Link } from "react-router-dom";

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
          <Route exact path="/portafolio">
            <h1>Portafolio</h1>
          </Route>
          <Route path="/">
            <h1>Inicio</h1>
          </Route>
        </Switch>
      </section>
    </section>
  );
}

export default App;
