import React from 'react';

import { Nav } from 'src/components/Nav';
import { Logo } from 'src/components/Logo';

export const Header: React.FC = () => (
  <header className="header">
    <Logo/>

    <Nav/>
  </header>
);
