import React from 'react';
import { NavLink } from 'react-router-dom';
import scss from './Nav.module.scss';
function Nav() {
  return (
    <ul className={scss.headerMenu}>
      <li>
        <NavLink className={scss.menuLink} to="/">
          Chrome Extension
        </NavLink>
      </li>
      <li>
        <NavLink className={scss.menuLink} to="/">
          Price Comparison
        </NavLink>
      </li>
      <li>
        <NavLink className={scss.menuLink} to="/">
          Blog
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
