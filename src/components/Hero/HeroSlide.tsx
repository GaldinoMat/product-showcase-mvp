import * as React from 'react';
import { IBannersProps } from './types/interfaces';
import styles from './Hero.module.scss';

const HeroSlide = ({ bannerHeroText, bannerHeroTextTitle, bannerImage }: IBannersProps) => (
  <div className={styles.heroSlide} style={{ backgroundImage: `url(${bannerImage.url})` }}>
    <h2>{bannerHeroTextTitle}</h2>
    {bannerHeroText && (
      <p>{bannerHeroText}</p>
    )}
  </div>
);

export default HeroSlide;
