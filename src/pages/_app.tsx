import * as React from 'react';

import '../../styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
