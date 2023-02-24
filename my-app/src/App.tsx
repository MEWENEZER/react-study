import React from 'react';
import Product from './components/Product';
import { products } from './data/products';

function App() {
  return (
    <div className="container flex flex-wrap justify-center mx-auto p-5 gap-2">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
    </div>
  );
}

export default App;
