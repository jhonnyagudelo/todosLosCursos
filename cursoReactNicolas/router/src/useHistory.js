import { Switch, Route, Link, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  console.log({ history });

  const forward = () => {
    history.goForward();
  };

  const back = () => {
    history.goBack();
  };

  const push = (url) => {
    history.push(url);
  };

  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <button onClick={back}>back</button>
        <button onClick={forward}>forward</button>
        <button onClick={() => push("/jhonny")}>push</button>
        <Switch>
          <Route exact path="/">
            <h1>Inicio</h1>
          </Route>
          <Route exact path="/perfil">
            <h1>perfil</h1>
          </Route>
          <Route path="*">404: ruta no encontrada</Route>
        </Switch>
      </section>
    </section>
  );
}

export { App };
