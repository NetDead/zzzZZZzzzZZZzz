import { http, HttpResponse } from 'msw';

import { PRODUCT_LIST } from 'src/mocks/entities/product-list.ts';

export const productList = [
  http.get('api/catalog', () => {
    return HttpResponse.json({
      data: PRODUCT_LIST,
    });
  })
];
