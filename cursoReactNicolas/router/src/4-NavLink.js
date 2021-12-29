import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  NavLink,
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
          <NavLink exact to={`/${match.url}/proyecto-1`}>
            Proyecto1
          </NavLink>
        </li>
        <li>
          <NavLink exact to={`/${match.url}/proyecto-2`}>
            Proyecto2
          </NavLink>
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
            <NavLink
              isActive={(match, location) => {
                console.log(match, location);
                return false;
              }}
              exact
              to="/"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portafolio">
              Portafolio
            </NavLink>
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
