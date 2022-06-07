import * as React from 'react';
import Image from 'next/image';
import { IBannersProps } from './types/interfaces';
import styles from './Hero.module.scss';

const HeroSlide = ({
  bannerHeroText, bannerHeroTextTitle, bannerImage, width,
}: IBannersProps) => (
  <div className={styles.heroSlide}>
    <section className={styles.heroImageContainer} style={{ width: `${width}px` }}>
      <Image layout="fill" src={bannerImage.url} objectFit="cover" />
    </section>
    <article className={styles.heroArticle}>
      <h2 className={styles.heroTitle}>{bannerHeroTextTitle}</h2>
      {bannerHeroText && (
      <p className={styles.heroText}>{bannerHeroText}</p>
      )}
    </article>
  </div>
);

export default HeroSlide;
