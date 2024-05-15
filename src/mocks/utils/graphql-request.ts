import { graphql as executeGraphQL } from 'graphql';
import { graphql, HttpResponse } from 'msw';
import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { schemaFromExecutor } from '@graphql-tools/wrap';
import { addMocksToSchema, IMocks } from '@graphql-tools/mock';

import { GRAPHQL_HOST } from 'src/constants/app-constants';

const executor = buildHTTPExecutor({
  endpoint: GRAPHQL_HOST,
});

const schema = await schemaFromExecutor(executor);

export const graphqlRequest = (operationName: string, mocks: IMocks) => {
  const schemaWithMocks = addMocksToSchema({
    schema,
    mocks,
    preserveResolvers: false,
  });

  return graphql.query(operationName, async ({ query, variables }) => {
    const { errors, data } = await executeGraphQL({
      schema: schemaWithMocks,
      source: query,
      variableValues: variables,
    });

    return HttpResponse.json({ errors, data });
  });
};
