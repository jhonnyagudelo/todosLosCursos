import React from "react";
import { useFormUser } from "../../hooks/useFormUser";
import { Form, Input, Button, Title } from "./styled";

const UseForm = ({ onSubmit, title }) => {
  const initialState = { email: "", password: "" };
  const [state] = useFormUser(initialState);
  const { email, password } = state;

  return (
    <>
      <section>
        <Title>{title}</Title>
        <Form onSubmit={onSubmit}>
          <Input placeholder="Email" type="email" {...email} />
          <Input placeholder="Password" type="password" {...password} />
          <Button>{title}</Button>
        </Form>
      </section>
    </>
  );
};
export default UseForm;
