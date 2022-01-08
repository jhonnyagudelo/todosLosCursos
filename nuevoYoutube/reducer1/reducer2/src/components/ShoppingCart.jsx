import { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/reducerShopping";
import { CartItem } from "./CartItem";
import { ProductsItem } from "./ProductsItem";
import { TYPE_SHOPPING } from "../action/typeShopping";
const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCard = (id) => {
    dispatch({ type: TYPE_SHOPPING.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({ type: TYPE_SHOPPING.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPE_SHOPPING.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPE_SHOPPING.CLEAR_CART });
  };

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => {
      const { quantity, price } = currentValue;
      return accumalator + quantity * price;
    };
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <h2>Carrito Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products !== undefined && products.length > 0 ? (
          products.map((product) => (
            <ProductsItem
              key={product.id}
              data={product}
              addToCard={addToCard}
            />
          ))
        ) : (
          <p>Sin datos</p>
        )}
      </article>
      <h3>carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar carrito</button>
        {cart !== undefined && cart.length > 0 ? (
          cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart} />
          ))
        ) : (
          <p>Sin elementos en el carrito</p>
        )}
        <h2>Total:{sumTotal()}</h2>
      </article>
    </>
  );
};
export { ShoppingCart };
