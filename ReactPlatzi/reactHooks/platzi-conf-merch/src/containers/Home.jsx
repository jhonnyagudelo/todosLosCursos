import React from 'react';
import Products from '../components/Products';
import initialState from '../initialState';
import { MetaHead } from '../components/MetaHead';

const meta = (
  <MetaHead title="Productos" description="Encuentra aqui los productos" />
);

function Home() {
  return (
    <>
      {meta}
      <Products products={initialState.products} />
    </>
  );
}

export { Home };
