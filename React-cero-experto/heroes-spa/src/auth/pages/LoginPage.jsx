import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("jhonny");
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <>
      <section className="container mt-5">
        <h1>Login</h1>
        <hr />
        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
      </section>
    </>
  );
};

export default LoginPage;
