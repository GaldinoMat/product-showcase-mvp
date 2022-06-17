import Image from 'next/image';
import React from 'react';
import { IBannersProps } from '../../types/interfaces';

import styles from '../../Hero.module.scss';

interface IThumbnailsProps {
  handleThumbnailClick: (index: number) => void
  banners: IBannersProps[]
  width: number
  banner: IBannersProps
}

const Thumbnails = ({
  handleThumbnailClick, banners, width, banner,
}: IThumbnailsProps) => (
  <button onClick={() => handleThumbnailClick(banners.indexOf(banner))} type="button" aria-label="bullet thumbnail" className={styles.bulletImage} style={{ width: `${width / banners.length}px` }}>
    <Image src={banner.bannerBulletImage?.url as any} layout="fill" objectFit="cover" alt=" thumbnail" />
  </button>
);

export default Thumbnails;
