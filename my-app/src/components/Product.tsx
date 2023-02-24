import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false); // Видимость Описания по умолчанию - Скрыто

  return (
    <div className="flex flex-col self-start gap-2 items-center max-w-xs border py-2 px-4 rounded">
      <img
        className="h-60 object-cover"
        src={product.image}
        alt={product.title}
      />
      <h3 className="text-xl font-medium">{product.title}</h3>
      <p className="font-bold text-green-700">
        {product.price}
        {`\u0024`}
      </p>

      <button
        className="py-2 px-4 border rounded-md bg-blue-400 text-white"
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>

      {details && (
        <div>
          <p> {product.description} </p>
        </div>
      )}
    </div>
  );
}

export default Product;
