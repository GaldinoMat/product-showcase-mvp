import * as React from 'react';

import { IHeroContentProps } from './types/interfaces';
import styles from './Hero.module.scss';

const HeroContent = ({
  translate, width, transition, children,
}: IHeroContentProps) => (
  <div className={styles.sliderContent} style={{ transform: `translateX(-${translate}px)`, width: `${width}px`, transition: `ease-out ${transition}s` }}>
    {children}
  </div>
);

export default HeroContent;
