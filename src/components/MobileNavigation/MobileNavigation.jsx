import React, { useState } from 'react';
import IconAwesome from '../../UI/IconAwesome/IconAwesome';
import Nav from '../Nav/Nav';
import scss from './MobileNavigation.module.scss';

function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={scss.nav}>
      {open ? (
        <IconAwesome
          extraStyle={scss.closeCross}
          onClick={() => setOpen(!open)}
          iconName={'times'}
        />
      ) : (
        <IconAwesome
          extraStyle={scss.hamburger}
          onClick={() => setOpen(!open)}
          iconName={'bars'}
        />
      )}
      {open && <Nav />}
    </nav>
  );
}

export default MobileNavigation;
