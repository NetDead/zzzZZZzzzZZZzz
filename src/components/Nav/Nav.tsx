import React from 'react';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <nav className='nav'>
      <Link to="catalog">Catalog</Link>
      <Link to="about">About</Link>
      <Link to="contacts">Contacts</Link>
    </nav>
  );
};
