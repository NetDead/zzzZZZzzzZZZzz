import { cacheExchange, Client, fetchExchange } from 'urql';

import { GRAPHQL_HOST } from 'src/constants/app-constants';

export const client = new Client({
  url: GRAPHQL_HOST,
  exchanges: [cacheExchange, fetchExchange],
});
