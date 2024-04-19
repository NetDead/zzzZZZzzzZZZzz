import { http, HttpResponse } from 'msw'

const generateUserData = (length: number) => {
  const result = [];

  for(let i = 0; i <= length; i++) {
    result.push({ id: i, name: `User ${i}` })
  }

  return result;
}
 
export const handlers = [
  http.get('api/data', () => {
    return HttpResponse.json({
      data: generateUserData(10),
    })
  })
]