import React from 'react';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <nav className='nav' aria-label="Навигация по сайту">
      <Link to="catalog" className='nav__link'>Catalog</Link>
      <Link to="about" className='nav__link'>About</Link>
      <Link to="contacts" className='nav__link'>Contacts</Link>
    </nav>
  );
};
