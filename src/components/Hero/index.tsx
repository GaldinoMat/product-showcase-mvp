import React, {
  useEffect, useRef, useState,
} from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import Arrow from './Arrow';
import Thumbnails from './components/Thumbnails';

import styles from './Hero.module.scss';
import HeroContent from './HeroContent';
import HeroSlide from './HeroSlide';
import { IBannersProps, IHeroBannerProps } from './types/interfaces';

const Hero = ({
  bannerProps, isHero,
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
  const [width, setWidth] = useState(0);

  const autoPlay = useRef(() => { });
  const ref = useRef<HTMLHeadingElement>(null);

  const windowWidth = useWindowWidth();

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

  const checkBulletBanners = () => {
    const bannersBullets = banners.some((banner: IBannersProps) => banner.bannerBulletImage?.url);

    return bannersBullets;
  };

  const handleThumbnailClick = (index: number) => setState({
    ...state,
    activeIndex: index,
    translate: (index) * width,
  });

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

    return () => { };
  }, []);

  useEffect(() => {
    if (isHero) {
      setWidth(windowWidth);
    } else {
      setWidth(ref.current ? ref.current.offsetWidth + 1 : 0);
    }
  }, [ref.current, windowWidth]);

  return (
    <div ref={ref} className={`${styles.slider} ${checkBulletBanners() ? styles.bulletSlider : ''}`}>
      <HeroContent translate={translate} transition={transition} width={width * length}>
        {banners.map((banner: IBannersProps) => (
          <HeroSlide key={banner.bannerHeroTextTitle} bannerHeroText={banner.bannerHeroText} bannerHeroTextTitle={banner.bannerHeroTextTitle} bannerImage={banner.bannerImage} width={width} />
        ))}
      </HeroContent>
      {checkBulletBanners() && (
        <section className={styles.bulletImageContainer}>
          {banners.map((banner: IBannersProps) => (
            <Thumbnails banner={banner} banners={banners} handleThumbnailClick={handleThumbnailClick} width={width} key={banner.bannerBulletImage?.url} />
          ))}
        </section>
      )}

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
};

export default Hero;
