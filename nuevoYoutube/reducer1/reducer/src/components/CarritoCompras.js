import React, { useReducer } from "react";
import { shoppingInitial } from "../reducer/ShoppingReducer";
import { CartItem } from "./CartItem";
import { ProductItem } from "./ProducItem";
import { TYPE_SHOPPING } from "../action/ShoppingAction";

const CarritoCompras = () => {
  const [state, dispatch] = useReducer(reducer, shoppingInitial);

  const addCart = (newItem) => {
    console.log(newItem);
    dispatch({
      type: TYPE_SHOPPING.ADD_TO_CART,
      payload: newItem,
    });
    carrito.push(newItem);
  };

  const { productos, carrito } = state;

  const addItem = (newItem) => {
    try {
      const d = state.productos.find((producto) => producto.id === newItem);

      const l = state.carrito.find((i) => i.id === newItem);
      if (l !== undefined) {
        const index = state.carrito.findIndex((e) => e.id === l.id);
        carrito[index].quantity = state.carrito[index].quantity + 1;
        console.warn(carrito[index]);
      } else {
        d["quantity"] = 1;
        addCart(d ? d : null);
      }

      //1114008874 crr 32 38 65

      //const itemCart = state.carrito.find((item) => item.id === newItem.id);
      //return itemCart
      //? {
      //...state,
      //carrito: state.carrito.map((item) =>
      //item.id === newItem.id
      //? { ...item, quantity: item.quantity + 1 }
      //: item
      //),
      //}
      //: {
      //...state,
      //carrito: [...state.carrito, { ...newItem, quantity: 1 }],
      //};
    } catch (error) {
      console.error(error);
    }
  };

  const delFromCart = () => {};
  const clearCart = () => {};

  const reducerShopping = (state, payload) => ({
    [TYPE_SHOPPING.ADD_TO_CART]: {
      ...state,
      id: payload,
    },
    [TYPE_SHOPPING.REMOVE_ONE_FROM_CART]: {},
    [TYPE_SHOPPING.REMOVE_ALL_FROM_CART]: {},
    [TYPE_SHOPPING.CLEAR_CART]: {},
    [TYPE_SHOPPING.SUCCESS]: {},
    [TYPE_SHOPPING.ERROR]: {},
  });

  const reducer = (state, action) => {
    return reducerShopping(state, action.payload)[action.type] || state;
  };

  return (
    <>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {productos !== undefined && productos.length > 0 ? (
          productos.map((producto) => (
            <ProductItem key={producto.id} data={producto} addItem={addItem} />
          ))
        ) : (
          <p>null</p>
        )}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar carrito</button>
        {carrito.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </>
  );
};
export { CarritoCompras };
