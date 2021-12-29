import { useState } from "react";
const App = () => {
  const [value, setValue] = useState({
    normal: "valor inicial",
    texto: "",
    select: "",
    check: false,
    estado: "feliz",
  });
  const handleChange = ({ target }) => {
    console.log(target);
    console.log(target.type, target.checked);
    //setValue({ ...value, [e.target.name]: e.target.value });
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };
  console.log(value);
  return (
    <>
      <div>
        {value.length < 5 ? <span>longitud maxima 5</span> : null}
        <input
          type="text"
          name="normal"
          value={value.normal}
          onChange={handleChange}
        />
        <textarea name="texto" onChange={handleChange} value={value.texto} />
        <select value={value.select} name="select" onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="hola">Hola</option>
          <option value="holi">holi</option>
          <option value="oeeee">oeeee</option>
        </select>
        <input
          type="checkbox"
          name="check"
          onChange={handleChange}
          checked={value.checked}
        />
        <div>
          <label>chancho</label>
          <input
            onChange={handleChange}
            type="radio"
            value="feliz"
            name="estado"
            checked={value.estado === "feliz"}
          />
          Feliz
          <input
            onChange={handleChange}
            type="radio"
            value="trsite"
            name="estado"
            checked={value.estado === "triste"}
          />
          Triste
          <input
            onChange={handleChange}
            type="radio"
            value="regular"
            name="estado"
            checked={value.estado === "regular"}
          />
          Regular
        </div>
      </div>
    </>
  );
};
export { App };
