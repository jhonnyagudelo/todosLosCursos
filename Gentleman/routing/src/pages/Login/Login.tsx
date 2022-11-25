import { useEffect } from "react";
import { getMorty } from "../../services";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "../../models/";
import { clearLocalStorage } from "../../Utilities";
import { resetUser, UserKey } from "../../redux/states/user";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const res = await getMorty();
      dispatch(createUser({ ...res, rol: Roles.ADMIN }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (e) {}
  };
  return (
    <>
      <div>
        <h2>Este es el login</h2>
        <button onClick={login}>Login</button>
      </div>
    </>
  );
};

export { Login };
