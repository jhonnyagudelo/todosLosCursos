import React from "react";
import { useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo/index";
import Home from "./pages/Home";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar/index";
import { User } from "./pages/User";
import Favs from "./pages/Favs";
import NotRegisteredUser from "./pages/NotRegisteredUser";
import { AppContext } from "./contex/AppContenx";

export const App = () => {
  const {
    user: { isAuth },
  } = useContext(AppContext);
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pet/:id" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route
            exact
            path="/fav"
            component={Favs}
            render={() => (isAuth ? <Favs /> : <Redirect to="/registre" />)}
          />
          <Route
            exact
            path="/user"
            component={User}
            render={() => (isAuth ? <User /> : <Redirect to="/registre" />)}
          />
          <Route exact path="" component={NotRegisteredUser} />) }
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  );
};
export default App;
