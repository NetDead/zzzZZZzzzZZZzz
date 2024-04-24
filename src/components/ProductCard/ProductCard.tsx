import React from 'react';
import classnames from 'classnames';
import { ProductCardProps } from './ProductCard.types';

export const ProductCard: React.FC<ProductCardProps> = props => {
  const {
    name,
    cost,
    weight,
    density,
    sweetness,
    acidity,
    roast,
    className,
  } = props;

  const getScore = (decimalFraction: number) => `${decimalFraction * 10}/10`;

  const componentClassName = classnames('product-card', className);

  return (
    <div
      className={componentClassName}
    >
        <h2>{name}</h2>

        <p><b>Cost:</b> {`$${cost}`}</p>

        <p><b>Weight:</b> {`${weight}kg`}</p>

        <p><b>Density:</b> {getScore(density)}</p>

        <p><b>Sweetness:</b> {getScore(sweetness)}</p>

        <p><b>Acidity:</b> {getScore(acidity)}</p>

        <p><b>Roast:</b> {roast}</p>
    </div>
  );
};
