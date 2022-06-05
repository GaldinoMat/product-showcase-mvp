import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import styles from '../../Header.module.scss';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.headerMobileMenuContainer}>
      <div className={styles.navHamburguerMenuContainer}>
        <GiHamburgerMenu
          className={styles.navHamburguerMenuIcon}
          onClick={() => setIsOpen(true)}
        />
      </div>
      <nav className={`${styles.headerMobileNav} ${isOpen && styles.headMobileOpen}`}>
        <button type="button" className={styles.headerMobileCloseButton}>
          <AiOutlineClose
            className={styles.headerMobileCloseButtonIcon}
            onClick={() => setIsOpen(false)}
          />
        </button>
        <ul className={styles.headerMobileLinksList}>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </section>
  );
};

export default MobileNav;
