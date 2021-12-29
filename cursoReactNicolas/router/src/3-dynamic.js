import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Proyecto = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { proyecto_id } = match.params;
  console.log({ match, params });
  return <h2>Proyecto {proyecto_id}</h2>;
};

const Portafolio = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <section>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={`/${match.url}/proyecto-1`}>Proyecto1</Link>
        </li>
        <li>
          <Link to={`/${match.url}/proyecto-2`}>Proyecto2</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path={`/${match.path}/:proyecto_id`}>
            <Proyecto />
          </Route>
        </Switch>
      </div>
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
