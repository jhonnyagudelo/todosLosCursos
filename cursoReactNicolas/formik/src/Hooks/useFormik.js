import React from "react";
import { useFormik } from "formik";

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
  errors.email = "requerido";
  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => console.log(values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input type="text" {...formik.getFieldProps("name")} />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <br />
      <label>Apellidos</label>
      <input type="text" {...formik.getFieldProps("lastName")} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <br />
      <label>Email</label>
      <input type="email" {...formik.getFieldProps("email")} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
