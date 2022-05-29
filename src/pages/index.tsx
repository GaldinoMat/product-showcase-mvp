import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { gql } from '@apollo/client';
import styles from '../../styles/Home.module.scss';
import client from '../../apolloClient';
import Hero from '../components/Hero';

const Home: NextPage = ({ banners }: any) => (
  <>
    <Head>
      <title>Smart Sneakers</title>
    </Head>
    <div className={styles.container}>
      <main>
        <Hero banners={banners} autoPlayBanner={2} timeAmount={2500} />
        <div>
          <section>
            <article>
              Main call to Action
            </article>
          </section>
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
  const { data: banners } = await client.query(
    {
      query: gql`
    query {
      heroBanners {
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

  const { heroBannerAsset } = banners.heroBanners[0];
  return {
    props: {
      banners: heroBannerAsset,
    },
  };
}
