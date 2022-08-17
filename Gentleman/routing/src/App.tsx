import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthGuard, AuthRol } from "./guards";
import { RouterWithNotFound } from "./Utilities";
import { PublicRoutes, PrivateRoutes } from "./models";
import { Roles } from "./models";
import { Logout } from "./components/";
import { Dashboard } from "./pages/Private/Dashboard/Dashboard";

import store from "./redux/store";

const Login = lazy(() => import("./pages/Login"));
const Private = lazy(() => import("./pages/Private"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RouterWithNotFound>
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
              <Route element={<AuthRol rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RouterWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export { App };
