import { setupWorker } from 'msw/browser';

import { productList } from 'src/mocks/product-list.ts';

export const worker = setupWorker(
  ...productList,
);
