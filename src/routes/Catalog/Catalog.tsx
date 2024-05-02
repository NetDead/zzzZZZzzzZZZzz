import React, { useEffect, useState } from 'react';

import { ProductList } from 'src/components/ProductList';

import { gql } from 'src/utils/gql';

const Catalog: React.FC = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetchCatalogData();
  }, []);
  const fetchCatalogData = async() => {
    const { data } = await gql(
      `query GetProducts {
                products {
                  id,
                  name,
                  cost,
                  weight,
                  density,
                  sweetness,
                  acidity,
                  roast,
                }
              }`
    );

    setData(data.products);
  };

  return (
    <>
      <h1>Catalog</h1>

      <ProductList data={data}/>
    </>
  );
};

export { Catalog };
