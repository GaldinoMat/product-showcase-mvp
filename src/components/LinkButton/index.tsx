import Link from 'next/link';
import React from 'react';
import { ILinkButtonProps } from './types/interfaces';

import styles from './LinkButton.module.scss';

const LinkButton = ({ callToActionUrlLink, callToActionButtonText }: ILinkButtonProps) => (
  <Link href={`/${callToActionUrlLink}`}>
    <button className={styles.callToActionLink} type="button">{callToActionButtonText}</button>
  </Link>
);

export default LinkButton;
