import React, { useEffect, useState } from 'react';

import { ProductList } from 'src/components/ProductList';

const Catalog: React.FC = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('api/catalog', { method: 'GET' });

      const normalizedResponse = await response.json();

      setData(normalizedResponse.data);
    };

    fetchData();
  });

  return (
    <>
      <h1>Catalog</h1>

      <ProductList data={data}/>
    </>
  );
};

export { Catalog };
