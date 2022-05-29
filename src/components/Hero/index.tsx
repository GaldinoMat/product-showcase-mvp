import React, { useEffect, useRef, useState } from 'react';
import Arrow from './Arrow';

import styles from './Hero.module.scss';
import HeroContent from './HeroContent';
import HeroSlide from './HeroSlide';
import { IHeroProps, IBannersProps } from './types/interfaces';

const Hero = ({ banners, autoPlayBanner, timeAmount }: IHeroProps) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  const { translate, transition, activeIndex } = state;

  const [width, setWidth] = useState(0);
  const autoPlay = useRef(() => {});
  const resizeRef = useRef(() => {});

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

  const handleResize = () => {
    setState({ ...state, translate: width, transition: 0 });
  };

  useEffect(() => {
    autoPlay.current = nextSlide;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
    };
    const play = () => {
      autoPlay.current();
    };

    const interval = setInterval(play, autoPlayBanner * timeAmount);
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  return (
    <div className={styles.slider}>
      <HeroContent translate={translate} transition={transition} width={width * length}>
        {banners.map((banner: IBannersProps) => (
          <HeroSlide key={banner.bannerHeroTextTitle} bannerHeroText={banner.bannerHeroText} bannerHeroTextTitle={banner.bannerHeroTextTitle} bannerImage={banner.bannerImage} />
        ))}
      </HeroContent>

      {!autoPlay && (
        <>
          <Arrow direction="left" handleClick={prevSlide} />
          <Arrow direction="right" handleClick={nextSlide} />
        </>
      )}
    </div>
  );
};

export default Hero;
