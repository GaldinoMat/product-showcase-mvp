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
              <Link href="https://www.github.com/GaldinoMat">
                <AiFillLinkedin className={styles.footerSocialMediaIcon} />
              </Link>
            </li>
            <li className={styles.footerSocialMediaIconContainer}>
              <Link href="https://www.github.com/GaldinoMat">
                <AiFillGithub className={styles.footerSocialMediaIcon} />
              </Link>
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
      <Link href="https://www.github.com/GaldinoMat">
        GaldinoMat
      </Link>
    </section>
  </footer>
);

export default Footer;
