import { ReactNode } from 'react';

export interface IBannersProps {
  bannerHeroText: string;
  bannerHeroTextTitle: string;
  bannerImage: { url: string }
  width?: number
  bannerBulletImage?: {url: string | ''}
}

export interface IHeroProps {
  banners: IBannersProps[],
  autoPlayBanner: number,
  timeAmount: number
  isAutoplayOn: boolean
}

export interface IHeroBannerProps {
  bannerProps: IHeroProps
  isHero: boolean
}

export interface IHeroContentProps {
  translate: number;
  width: number;
  transition: number
  children: ReactNode
}

export interface IArrowProps {
  direction: string,
  handleClick: () => void
}
