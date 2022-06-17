import React from 'react';
import { IProductInfoProps } from './types/interfaces';

import styles from './ProductInfo.module.scss';
import LinkButton from '../../LinkButton';

const ProductInfo = ({
  productInfo,
}: IProductInfoProps) => {
  const {
    productPageButtonText, productPageDescription, sneakerProductSubtitle, sneakerProductTitle,
  } = productInfo;
  return (
    <section className={styles.productInfoContainer}>
      <div className={styles.productInfoTitlesContainer}>
        <p className={styles.productInfoSubTitle}>{sneakerProductSubtitle}</p>
        <h1 className={styles.productInfoTitle}>{sneakerProductTitle}</h1>
      </div>
      <div className={styles.productInfoTextContainer}>
        <p className={styles.productInfoText}>
          {productPageDescription}
        </p>
      </div>
      <div className={styles.productInfoButtonContainer}>
        <LinkButton callToActionButtonText={productPageButtonText} callToActionUrlLink="contact-us" />
      </div>
    </section>
  );
};

export default ProductInfo;
