import React, { useEffect, useState } from 'react';

import { ProductList } from 'src/components/ProductList';

const Catalog: React.FC = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetchCatalogData();
  }, []);

  const fetchCatalogData = async() => {
    const response = await(await fetch('api/catalog', { method: 'GET' })).json();

    setData(response.body);
  };

  return (
    <>
      <h1>Catalog</h1>

      <ProductList data={data}/>
    </>
  );
};

export { Catalog };
