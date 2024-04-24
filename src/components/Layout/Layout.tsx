import { Outlet } from 'react-router-dom';

import { Nav } from 'src/components/Nav';

export const Layout = () => {
  return (
    <>
      <header>
        <Nav/>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        {`© ${new Date().getFullYear()}`}
      </footer>
    </>
  );
};
