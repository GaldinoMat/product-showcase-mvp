import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { IInfoCard } from '../types/interfaces';

import styles from '../InfoCardsGrid.module.scss';

const InfoCard = ({
  infoCardImage, infoCardSlug, infoCardText, infoCardTitle,
}: IInfoCard) => (
  <article className={styles.infoCard}>
    <Link href={`/${infoCardSlug}`}>
      <>
        <section className={styles.infoCardImage}>
          <Image src={infoCardImage.url} layout="fill" objectFit="cover" />
        </section>
        <section>
          <h3 className={styles.infoCardTitle}>{infoCardTitle}</h3>
          <p className={styles.infoCardText}>{infoCardText}</p>
        </section>
      </>
    </Link>
  </article>
);

export default InfoCard;
