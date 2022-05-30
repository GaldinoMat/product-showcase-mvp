import * as React from 'react';
import Image from 'next/image';
import { IBannersProps } from './types/interfaces';
import styles from './Hero.module.scss';

const HeroSlide = ({
  bannerHeroText, bannerHeroTextTitle, bannerImage, width,
}: IBannersProps) => (
  <div className={styles.heroSlide}>
    <section className={styles.heroImageContainer} style={{ width: `${width}px` }}>
      <Image layout="fill" src={bannerImage.url} />
    </section>
    <article className={styles.heroArticle}>
      <h2>{bannerHeroTextTitle}</h2>
      {bannerHeroText && (
      <p>{bannerHeroText}</p>
      )}
    </article>
  </div>
);

export default HeroSlide;
