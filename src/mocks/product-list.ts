import { http, HttpResponse } from 'msw';

import { PRODUCT_LIST } from 'src/mocks/entities/product-list';

export const productList = [
  http.get('api/catalog', () => {
    return HttpResponse.json({
      status: 'ok',
      body: PRODUCT_LIST,
    });
  }),
];
