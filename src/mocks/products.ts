import { graphqlRequest } from './utils/graphql-request';

import { PRODUCT_LIST } from 'src/mocks/entities/products';

export const products = [
  graphqlRequest('GetProducts', PRODUCT_LIST),
];
