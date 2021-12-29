import { useField } from "formik";
const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      </label>
    </>
  );
};

export { Select };
