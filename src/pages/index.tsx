import React, { Suspense } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { gql } from '@apollo/client';
import styles from '../../styles/Home.module.scss';
import client from '../../apolloClient';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import InfoCardsGrid from '../components/InfoCardsGrid';
import Footer from '../components/Footer';

const Home: NextPage = ({
  bannerProps, CTAProps, cardsGridProps,
}: any) => (
  <>
    <Head>
      <title>Smart Sneakers</title>
    </Head>
    <div className={styles.container}>
      <main>
        <Suspense>
          <Hero bannerProps={bannerProps} />
        </Suspense>
        <Suspense>
          <CTA CTAProps={CTAProps} />
          <InfoCardsGrid cardsGridProps={cardsGridProps} />
        </Suspense>
      </main>
      <Footer />
    </div>
  </>
);

export default Home;

export async function getStaticProps() {
  const { data: CallToAction } = await client.query(
    {
      query: gql`
      query {
        callToActions {
          callToActionTextsArray {
            callToActionText
          }
          callToActionButtonText
          callToActionUrlLink
        }
      }
      `,
    },
  );

  const { data: banners } = await client.query(
    {
      query: gql`
    query {
      heroBanners {
        isAutoPlayOn
        autoPlayMultiplier
        autoplayTimer
        heroBannerAsset {
          bannerImage {
            url
          }
          bannerHeroTextTitle
          bannerHeroText
        }
      }
    }    
    `,
    },
  );

  const { data: InfoCards } = await client.query(
    {
      query: gql`
      query {
        infoCardGrids {
          cardsGrid {
            infoCardTitle
            infoCardText
            infoCardSlug
            infoCardImage {
              url
            }
          }
        }
      }
      `,
    },
  );

  const {
    heroBannerAsset, isAutoPlayOn, autoplayTimer, autoPlayMultiplier,
  } = banners.heroBanners[0];

  const { callToActionTextsArray, callToActionButtonText, callToActionUrlLink } = CallToAction.callToActions[0];

  const { cardsGrid } = InfoCards.infoCardGrids[0];

  return {
    props: {
      bannerProps: {
        banners: heroBannerAsset,
        isAutoPlayOn,
        autoplayTimer,
        autoPlayMultiplier,
      },
      CTAProps: {
        callToActionTextsArray,
        callToActionButtonText,
        callToActionUrlLink,
      },
      cardsGridProps: cardsGrid,
    },
    revalidate: 60 * 30,
  };
}
