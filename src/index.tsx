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
import { Login } from 'src/routes/Login';

import { fetchUser } from 'src/redux/user/userSlice';

async function enableMocking() {
  const { worker } = await import('./mocks/index');

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

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

enableMocking().then(() => {
  store.dispatch(fetchUser());

  createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  );
});
