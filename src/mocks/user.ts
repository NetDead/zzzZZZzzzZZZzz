import { graphqlRequest } from './utils/graphql-request';

import { USER } from 'src/mocks/entities/user';

export const user = [
  graphqlRequest('GetUser', USER),
];
