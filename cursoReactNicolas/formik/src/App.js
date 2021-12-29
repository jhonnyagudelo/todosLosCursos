import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { TextInput } from "./components/TextInput";
import { Radio } from "./components/Radio";
import { Checkbox } from "./components/Checkbox";
import { Select } from "./components/Select";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "requerido";
  } else if (values.name.length < 5) {
    errors.name = "Nombre es muy corto";
  }
  if (!values.lastName) {
    errors.lastName = "requerido";
  }
  if (!values.radio) {
    errors.radio = "Requerido";
  }
  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastName: "",
        email: "",
        chancho: "",
        radio: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        <TextInput name="lastName" label="Apellidos" />
        <TextInput name="email" label="email" />
        <Select name="chancho" label="chancho">
          <option value="">Select chancho</option>
          <option value="jhonny">Select jhonny</option>
          <option value="chanchito">Select chancho</option>
        </Select>
        <Radio name="radio" value="chanchito" label="chanchito" />
        <Radio name="radio" value="chanchito2" label="chanchito2" />
        <Radio name="radio" value="chanchito3" label="chanchito3" />
        <ErrorMessage name="radio" />
        <Checkbox name="accept">Aceptar terminos y condiciones</Checkbox>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
