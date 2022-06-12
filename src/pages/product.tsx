import { gql } from '@apollo/client';
import Head from 'next/head';
import React, { Suspense } from 'react';
import client from '../../apolloClient';

import styles from '../../styles/Product.module.scss';
import Hero from '../components/Hero';
import ProductInfo from '../components/Product/ProductInfo';

const PDP = ({ bannerProps, productInfo }: any) => (
  <>
    <Head>
      <title>Smart Sneakers | Product</title>
    </Head>
    <div>
      <main className={styles.productMain}>
        <Suspense>
          <Hero bannerProps={bannerProps} />
        </Suspense>
        <ProductInfo productInfo={productInfo} />
      </main>
    </div>
  </>
);

export default PDP;

export async function getStaticProps() {
  const { data: ProductInfoQueryData } = await client.query(
    {
      query: gql`
      query {
        products {
          isAutoPlayOn
          autoPlayMultiplier
          autoplayTimer
          heroBannerAsset {
            bannerImage {
              url
            }
            bannerBulletImage {
              url
            }
          }
          sneakerProductSubtitle
          sneakerProductTitle
          productPageDescription
          productPageButtonText
        }
      }
      `,
    },
  );

  const {
    isAutoPlayOn, autoPlayMultiplier, autoplayTimer, heroBannerAsset, sneakerProductSubtitle, sneakerProductTitle, productPageDescription, productPageButtonText,
  } = ProductInfoQueryData.products[0];

  return {
    props: {
      bannerProps: {
        isAutoPlayOn,
        autoPlayMultiplier,
        autoplayTimer,
        banners: heroBannerAsset,
      },
      productInfo: {
        sneakerProductSubtitle,
        sneakerProductTitle,
        productPageDescription,
        productPageButtonText,
      },
      revalidate: 60 * 30,
    },
  };
}
