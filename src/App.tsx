import React from 'react';

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
import { Login } from 'src/routes/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'catalog',
        element: <Catalog/>,
        index: true,
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'contacts',
        element: <Contacts/>,
      },
    ],
  },
  {
    path: 'login',
    element: <Login/>,
  },
]);

export const App: React.FC = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
