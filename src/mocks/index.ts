import { setupWorker } from 'msw/browser';

import { getProductsMockSuccess } from 'src/mocks/products';
import { getUserMockSuccess } from 'src/mocks/user';

export const worker = setupWorker(
  getUserMockSuccess,
  getProductsMockSuccess
);
