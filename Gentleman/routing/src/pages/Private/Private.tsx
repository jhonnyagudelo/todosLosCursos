import { lazy } from "react";
import { Route, Navigate } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { RouterWithNotFound } from "../../Utilities";

const Dashboard = lazy(() => import("./Dashboard"));
const Home = lazy(() => import("./Home"));

const Private = () => {
  return (
    <>
      <RouterWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RouterWithNotFound>
    </>
  );
};

export { Private };
