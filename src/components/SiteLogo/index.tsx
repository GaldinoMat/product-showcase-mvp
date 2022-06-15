import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Logo from '../../../public/logo.svg';

import styles from './Logo.module.scss';

const SiteLogo = () => (
  <section className={styles.logoHeaderContainer}>
    <Link href="/">
      <Image src={Logo} layout="fill" />
    </Link>
  </section>

);

export default SiteLogo;
