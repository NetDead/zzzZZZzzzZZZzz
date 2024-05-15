import { graphqlRequest } from './utils/graphql-request';

import { PRODUCT_LIST } from 'src/mocks/entities/products';

const mocks = {
  Query: {
    products() {
      return PRODUCT_LIST;
    }
  }
};

export const getProductsMockSuccess = graphqlRequest('GetProducts', mocks);
