import React from 'react';
import Nav from '../Nav/Nav';
import scss from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={scss.nav}>
      <Nav />
    </nav>
  );
}

export default Navigation;
