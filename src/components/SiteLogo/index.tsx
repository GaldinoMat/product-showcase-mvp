import Image from 'next/image';
import React from 'react';

import Logo from '../../../public/logo.svg';

import styles from './Logo.module.scss';

const SiteLogo = () => (
  <section className={styles.logoHeaderContainer}>
    <Image src={Logo} layout="fill" />
  </section>

);

export default SiteLogo;
