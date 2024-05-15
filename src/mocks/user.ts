import { graphqlRequest } from './utils/graphql-request';

import { USER } from 'src/mocks/entities/user';

const mocks = {
  Query: {
    user() {
      return USER;
    }
  }
};

export const getUserMockSuccess = graphqlRequest('GetUser', mocks);
