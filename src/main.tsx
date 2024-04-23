import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Layout } from 'src/components/Layout';

import { Catalog } from 'src/routes/Catalog';
import { About } from 'src/routes/About';
import { Contacts } from 'src/routes/Contacts';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');

  return worker.start();
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
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
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});