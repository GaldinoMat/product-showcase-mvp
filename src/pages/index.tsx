import React, { Suspense } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { gql } from '@apollo/client';
import styles from '../../styles/Home.module.scss';
import client from '../../apolloClient';
import Hero from '../components/Hero';
import CTA from '../components/CTA';

const Home: NextPage = ({
  bannerProps, CTAProps,
}: any) => (
  <>
    <Head>
      <title>Smart Sneakers</title>
    </Head>
    <div className={styles.container}>
      <main>
        <Suspense fallback={<h1>Loading</h1>}>
          <Hero bannerProps={bannerProps} />
        </Suspense>
        <div>
          <CTA CTAProps={CTAProps} />
          <section>
            <article>Info Card</article>
            <article>Info Card</article>
            <article>Info Card</article>
          </section>
        </div>
        <div>
          <section>
            <form action="" method="post">
              <h2>Contact Us Form</h2>

              <input type="text" name="" id="" />
            </form>
          </section>
        </div>
      </main>
      <footer>
        <section>
          Footer
        </section>
        <section>
          Made by GaldinoMat
        </section>
      </footer>
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

  const { callToActionTextsArray, callToActionButtonText, callToActionUrlLink } = CallToAction.callToActions[0];

  const {
    heroBannerAsset, isAutoPlayOn, autoplayTimer, autoPlayMultiplier,
  } = banners.heroBanners[0];

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
    },
    revalidate: 60 * 30,
  };
}
