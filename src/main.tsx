import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store';

import { Layout } from 'src/components/Layout';

import { Catalog } from 'src/routes/Catalog';
import { About } from 'src/routes/About';
import { Contacts } from 'src/routes/Contacts';
import { ErrorPage } from 'src/routes/ErrorPage';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');

  return worker.start();
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'catalog',
        element: <Catalog/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contacts',
        element: <Contacts/>
      },
    ],
  },
]);

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  );
});
