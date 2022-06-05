import Image from 'next/image';
import React, { useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../../public/logo.svg';

import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
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
      <section className={styles.logoHeaderContainer}>
        <Image src={Logo} layout="fill" />
      </section>
      <section className={styles.headerDesktopMenuContainer}>
        <ul className={styles.headerDesktopLinksList}>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
