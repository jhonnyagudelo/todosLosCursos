import React from "react";
import { getMorty } from "../../services";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/states/user";

const Login = () => {
  const dispatch = useDispatch();
  const login = async () => {
    try {
      const res = await getMorty();
      dispatch(createUser(res));
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
