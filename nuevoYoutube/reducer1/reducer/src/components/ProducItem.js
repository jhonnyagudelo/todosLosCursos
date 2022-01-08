import React from "react";

const ProductItem = ({ data, addItem }) => {
  const { id, nombre, precio } = data;
  return (
    <>
      <div style={{ border: "thin solid gray", padding: "1em" }}>
        <h4>{nombre}</h4>
        <h5>${precio}.000</h5>
        <button
          onClick={() => {
            addItem(id);
          }}
        >
          Agregar
        </button>
      </div>
    </>
  );
};
export { ProductItem };
