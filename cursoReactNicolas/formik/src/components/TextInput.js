import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.warn(field);
  return (
    <div>
      <h1>{label}</h1>
      <input {...field} type={props.type} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};
export { TextInput };
