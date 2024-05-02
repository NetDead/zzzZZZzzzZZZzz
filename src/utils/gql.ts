export const gql = async (query: string) => {
  const response = await fetch(
    '/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query }),
    },
  );

  return await response.json();
}
