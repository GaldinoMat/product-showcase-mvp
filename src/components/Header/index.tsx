import React from 'react';
import SiteLogo from '../SiteLogo';

import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.headerContainer}>
    <MobileNav />
    <SiteLogo />
    <DesktopNav />
  </header>
);

export default Header;
