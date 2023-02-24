import React from 'react';

export interface ProductPriceProps {
  price: number;
  className?: string; // опциональный
}

export const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
  className,
}) => (
  <p className={`font-bold text-green-700 ${className || ''}`}>
    {price}
    {`\u0024`}
  </p>
);
