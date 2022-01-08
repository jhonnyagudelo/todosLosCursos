import React from "react";
const ProductsItem = ({ data, addToCard }) => {
  const { id, name, price } = data;
  return (
    <>
      <div style={{ border: "thin solid gray", padding: "1em" }}>
        <h3>{name}</h3>
        <h4>${price}</h4>
        <button onClick={() => addToCard(id)}>Agregar</button>
      </div>
    </>
  );
};
export { ProductsItem };
