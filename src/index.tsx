import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'urql';

import { client } from './client';

import { store } from './store';

import { App } from 'src/App';

import { fetchUser } from 'src/redux/user/userSlice';

async function enableMocking() {
  const { worker } = await import('./mocks/index');

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

await enableMocking();

store.dispatch(fetchUser());

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
      <App/>
    </Provider>
  </React.StrictMode>,
);
