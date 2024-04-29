import { setupWorker } from 'msw/browser';

import { productList } from './product-list';
import { user } from 'src/mocks/user';

export const worker = setupWorker(
  ...productList,
  ...user,
);
