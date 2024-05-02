import { setupWorker } from 'msw/browser';

import { products } from 'src/mocks/products';
import { user } from 'src/mocks/user';

export const worker = setupWorker(
  ...products,
  ...user,
);
