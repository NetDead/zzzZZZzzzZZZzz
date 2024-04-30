import { Outlet } from 'react-router-dom';

import { Header } from 'src/components/Header';

export const Layout = () => {
  return (
    <>
      <Header/>

      <main>
        <Outlet/>
      </main>

      <footer>
        {`© ${new Date().getFullYear()}`}
      </footer>
    </>
  );
};
