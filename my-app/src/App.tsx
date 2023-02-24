import React from 'react';
import { Button } from './components/Button';
import Product from './components/Product';
import { products } from './data/products';

function App() {
  return (
    <div className="container flex flex-wrap justify-center mx-auto p-5 gap-2">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      <Button className="max-w-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        laboriosam voluptatibus minus alias delectus atque magni labore culpa
        voluptatem amet.
      </Button>

      {/* --> Добавить сюда Лист Продуктов // Products */}

      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
    </div>
  );
}

export default App;
