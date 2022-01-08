const CartItem = ({ data, delFromCart }) => {
  const { id, name, price, quantity } = data;
  return (
    <>
      <div style={{ borderBottom: "thin solid gray" }}>
        <h4>{name}</h4>
        <h5>
          ${price} x {quantity} Unidades
        </h5>
        <h5>total unidad: {price * quantity}</h5>
        <button onClick={() => delFromCart(id)}>Eliminar</button>
        <br />
        <button onClick={() => delFromCart(id, true)}>Eliminar todo</button>
      </div>
    </>
  );
};
export { CartItem };
