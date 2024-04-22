import { useEffect, useState } from 'react';

export const App = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('api/data', { method: 'GET' });

      const normalizedResponse = await response.json();

      setData(normalizedResponse.data);
    };

    fetchData();
  });

  return (
    <>
      <h1>Hello world</h1>
      {data.map(({ id, name }) => (<p key={id}>{name}</p>))}
    </>
  );
};