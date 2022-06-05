import * as React from 'react';

import '../../styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
);

export default MyApp;
