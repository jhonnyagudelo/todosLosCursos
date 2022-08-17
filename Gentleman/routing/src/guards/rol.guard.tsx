import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Roles } from "../models";
import { Outlet, Navigate } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "../models";
interface Props {
  rol: Roles;
}

const AuthRol = ({ rol }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.PRIVATE} />
  );
};
export default AuthRol;
