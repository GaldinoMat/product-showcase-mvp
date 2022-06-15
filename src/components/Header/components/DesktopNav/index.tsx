import Link from 'next/link';
import React from 'react';

import styles from '../../Header.module.scss';

const DesktopNav = () => (
  <section className={styles.headerDesktopMenuContainer}>
    <ul className={styles.headerDesktopLinksList}>
      <li>
        <Link href="product">
          Product
        </Link>
      </li>
      <li>
        <Link href="contact-us">
          Contact us
        </Link>
      </li>
    </ul>
  </section>
);

export default DesktopNav;
