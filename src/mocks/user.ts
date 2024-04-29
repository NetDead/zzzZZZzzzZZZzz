import { http, HttpResponse } from 'msw';

export const user = [
  http.get('api/user', () => {
    return HttpResponse.json({
      status: 'ok',
      body: {
        id: 1,
        name: 'John Doe',
      },
    });
  }),
];
