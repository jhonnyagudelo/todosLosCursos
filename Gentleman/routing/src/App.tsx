import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthGuard } from "./guards";
import { RouterWithNotFound } from "./Utilities";
import { PublicRoutes, PrivateRoutes } from "./models";
import store from "./redux/store";

const Login = lazy(() => import("./pages/Login"));
const Private = lazy(() => import("./pages/Private"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RouterWithNotFound>
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </RouterWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export { App };
