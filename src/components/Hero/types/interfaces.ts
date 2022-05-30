import { ReactNode } from 'react';

export interface IBannersProps {
  bannerHeroText: string;
  bannerHeroTextTitle: string;
  bannerImage: { url: string }
  width?: number
}

export interface IHeroProps {
  banners: IBannersProps[],
  autoPlayBanner: number,
  timeAmount: number
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
