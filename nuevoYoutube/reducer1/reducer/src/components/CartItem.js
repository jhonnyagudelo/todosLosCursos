import React from "react";
const CartItem = ({ data, delFromCart }) => {
  const { id, nombre, precio, quantity } = data;
  return (
    <>
      <div style={{ borderBottom: "thin solid gray" }}>
        <h4>{nombre}</h4>
        <h5>
          ${precio}.000 x {quantity} = ${precio * quantity}.000
        </h5>
        <button onClick={delFromCart}>Eliminar</button>
        <button onClick={delFromCart}>Eliminar todo</button>
      </div>
    </>
  );
};
export { CartItem };
