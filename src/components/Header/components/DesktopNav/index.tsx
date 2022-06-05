import React from 'react';

import styles from '../../Header.module.scss';

const DesktopNav = () => (
  <section className={styles.headerDesktopMenuContainer}>
    <ul className={styles.headerDesktopLinksList}>
      <li>Product</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </section>
);

export default DesktopNav;
