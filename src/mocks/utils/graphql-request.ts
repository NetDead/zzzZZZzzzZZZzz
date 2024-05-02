import { graphql as executeGraphQL } from 'graphql';
import { graphql, HttpResponse } from 'msw';

import { schema } from 'src/schemas/schema';

export const graphqlRequest = (operationName: string, rootValue: unknown) =>
  graphql.query(operationName, async ({ query, variables }) => {
    const { errors, data } = await executeGraphQL({
      schema,
      source: query,
      variableValues: variables,
      rootValue,
    });

    return HttpResponse.json({ errors, data })
  });
