import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';

import { schema } from './schema';

const main = () => {
  const yoga = createYoga({ schema });
  const server = createServer(yoga);
  server.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.info('Server is running on http://localhost:3000/graphql');
  });
};

main();
