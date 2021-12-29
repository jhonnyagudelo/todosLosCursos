import { Switch, Route, Link, Redirect } from "react-router-dom";

const Portafolio = () => {
  const loggedInt = false;

  if (!loggedInt) {
    return <Redirect to="/" />;
  }
  return <h1>Portafolio</h1>;
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
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Redirect exact from="/" to="/inicio" />
          <Route exact path="/inicio">
            <h1>Inicio</h1>
          </Route>
          <Route exact path="/perfil">
            <h1>perfil</h1>
          </Route>
          <Route path="/portafolio">
            <Portafolio />
          </Route>
        </Switch>
      </section>
    </section>
  );
}

export { App };
