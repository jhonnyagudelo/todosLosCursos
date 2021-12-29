import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContex';

function Products() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <section className="Products">
      <section className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </section>
    </section>
  );
}

export default Products;
