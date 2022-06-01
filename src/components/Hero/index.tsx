import React, {
  useEffect, useRef, useState,
} from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import Arrow from './Arrow';

import styles from './Hero.module.scss';
import HeroContent from './HeroContent';
import HeroSlide from './HeroSlide';
import { IBannersProps, IHeroBannerProps } from './types/interfaces';

const Hero = ({
  bannerProps,
}: IHeroBannerProps) => {
  const {
    banners, autoPlayBanner, timeAmount, isAutoplayOn,
  } = bannerProps;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  const { translate, transition, activeIndex } = state;

  const autoPlay = useRef(() => { });

  const width = useWindowWidth();

  const { length } = banners;

  const nextSlide = () => {
    if (activeIndex === length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    return setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (length - 1) * width,
        activeIndex: length - 1,
      });
    }

    return setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width,
    });
  };

  useEffect(() => {
    autoPlay.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlay.current();
    };

    if (isAutoplayOn && autoPlayBanner > 0 && timeAmount != null) {
      const interval = setInterval(play, autoPlayBanner * timeAmount);

      return () => {
        clearInterval(interval);
      };
    }

    return () => {};
  }, []);

  return (
    <div className={styles.slider}>
      <HeroContent translate={translate} transition={transition} width={width * length}>
        {banners.map((banner: IBannersProps) => (
          <HeroSlide key={banner.bannerHeroTextTitle} bannerHeroText={banner.bannerHeroText} bannerHeroTextTitle={banner.bannerHeroTextTitle} bannerImage={banner.bannerImage} width={width} />
        ))}
      </HeroContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
};

export default Hero;
