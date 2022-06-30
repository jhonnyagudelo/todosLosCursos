import { Button } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const LoginPage = () => {
  const { user, setUSer } = useContext(UserContext)

  return (
    <>
      <h1>Login</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <Button 
        variant="contained"
        onClick={() => setUSer({ id:123, name:'jhonny', correo:'j@gmail.com' })}
      >Establecer
    </Button>
    </>
  )
}

export default LoginPage
