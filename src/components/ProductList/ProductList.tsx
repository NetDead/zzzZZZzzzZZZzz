import React from 'react';

import { ProductCard } from 'src/components/ProductCard';
import { ProductListProps } from './ProductList.types';

export const ProductList: React.FC<ProductListProps> = ({ data }) => {
  return (
    <div className='product-list'>
      {data.map((item) => (
        <ProductCard
          className='product-list__item'
          key={item.name}
          { ...item }
        />
      ))}
    </div>
  )
};
