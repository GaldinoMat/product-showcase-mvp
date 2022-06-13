import React, { Suspense } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { gql } from '@apollo/client';
import styles from '../../styles/Home.module.scss';
import client from '../../apolloClient';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import InfoCardsGrid from '../components/InfoCardsGrid';

const Home: NextPage = ({
  bannerProps, CTAProps, cardsGridProps, CTAFormProps,
}: any) => (
  <>
    <Head>
      <title>Smart Sneakers</title>
    </Head>
    <div className={styles.container}>
      <main>
        <Suspense>
          <Hero isHero bannerProps={bannerProps} />
        </Suspense>
        <Suspense>
          <CTA CTAProps={CTAProps} />
          <InfoCardsGrid cardsGridProps={cardsGridProps} />
        </Suspense>
        <Suspense>
          <CTA CTAProps={CTAFormProps} />
        </Suspense>
      </main>
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
          callToActionTitle
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

  const {
    callToActionTextsArray, callToActionButtonText, callToActionUrlLink,
  } = CallToAction.callToActions[0];

  const {
    callToActionTextsArray: callToActionTextsArrayForm, callToActionButtonText: callToActionButtonTextForm, callToActionUrlLink: callToActionUrlLinkForm,
  } = CallToAction.callToActions[1];

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
        callToActionTitle: CallToAction.callToActions[0].callToActionTitle || null,
        callToActionTextsArray,
        callToActionButtonText,
        callToActionUrlLink,
      },
      CTAFormProps: {
        callToActionTextsArray: callToActionTextsArrayForm,
        callToActionButtonText: callToActionButtonTextForm,
        callToActionUrlLink: callToActionUrlLinkForm,
        callToActionTitle: CallToAction.callToActions[1].callToActionTitle || null,
      },
      cardsGridProps: cardsGrid,
    },
    revalidate: 60 * 30,
  };
}
