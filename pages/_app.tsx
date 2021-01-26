import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import db from '../db.json';
import { GlobalStyles } from '../src/styles/global';

const { theme } = db;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
        rel="stylesheet"
      />
      <title>{db.title}</title>
      <meta property="og:title" content={db.title} />
      <meta property="og:description" content={db.description} />
      <meta property="og:image" content={db.bg} />
      <meta property="og:image:type" content="image/jpg" />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
