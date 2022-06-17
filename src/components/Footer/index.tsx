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
              <a href="https://www.linkedin.com/in/mateus-galdino-silva/" target="_blank" rel="noreferrer">
                <AiFillLinkedin className={styles.footerSocialMediaIcon} />
              </a>
            </li>
            <li className={styles.footerSocialMediaIconContainer}>
              <a href="https://www.github.com/GaldinoMat" target="_blank" rel="noreferrer">
                <AiFillGithub className={styles.footerSocialMediaIcon} />
              </a>
            </li>
          </ul>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/product">
                Product
              </Link>
            </li>
            <li>
              <Link href="contact-us">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <section className={styles.footerCopyright}>
      <p>
        Made by
      </p>
      <a href="https://www.github.com/GaldinoMat" target="_blank" rel="noreferrer">
        GaldinoMat
      </a>
    </section>
  </footer>
);

export default Footer;
