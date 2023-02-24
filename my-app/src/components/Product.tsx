import React, { useState, useCallback } from 'react';
import { ProductType } from '../models';
import { Button } from './Button';
import { ProductPrice } from './ProductPrice';

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  // Hook
  const [detailsIsVisible, setDetailsIsVisible] = useState(false); // Видимость Описания по умолчанию - Скрыто

  const toggleDetailsVisibility = useCallback(
    () => setDetailsIsVisible((prevState) => !prevState),
    []
  );

  return (
    <div className="flex flex-col self-start gap-2 items-center max-w-xs border py-2 px-4 rounded">
      <img
        className="h-60 object-cover"
        src={product.image}
        alt={product.title}
      />

      <h3 className="text-xl font-medium">{product.title}</h3>

      <ProductPrice price={product.price} />

      <Button onClick={toggleDetailsVisibility}>
        {detailsIsVisible ? 'Hide' : 'Show'}
      </Button>

      {detailsIsVisible && (
        <div>
          <p> {product.description} </p>
        </div>
      )}
    </div>
  );
}

export default Product;
