import React from 'react';

import { gql, useQuery } from 'urql';

import { ProductList } from 'src/components/ProductList';

const CatalogQuery = gql`
  query GetProducts {
    products {
      id,
      name,
      cost,
      weight,
      density,
      sweetness,
      acidity,
      roast
    }
  }
`;

const Catalog: React.FC = () => {
  const [{ data }] = useQuery({
    query: CatalogQuery,
  });

  return (
    <>
      <h1>Catalog</h1>

      {!!data && <ProductList data={data.products}/>}
    </>
  );
};

export { Catalog };
