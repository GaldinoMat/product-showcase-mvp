import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import SiteLogo from '../SiteLogo';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footerElement}>
    <div className={styles.footerElementTop}>
      <SiteLogo />
      <section className={styles.footerContainer}>
        <div className={styles.footerLinksContainer}>
          <ul className={styles.footerSocialMedia}>
            <li className={styles.footerSocialMediaIconContainer}>
              <AiFillLinkedin className={styles.footerSocialMediaIcon} />
            </li>
            <li className={styles.footerSocialMediaIconContainer}>
              <AiFillGithub className={styles.footerSocialMediaIcon} />
            </li>
          </ul>
          <ul className={styles.footerLinks}>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
    </div>
    <section className={styles.footerCopyright}>
      <p>
        Made by
      </p>
      <Link href="www.github.com/GaldinoMat">
        GaldinoMat
      </Link>
    </section>
  </footer>
);

export default Footer;
