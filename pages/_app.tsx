import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import db from '../db.json';
import { GlobalStyles } from '../src/styles/global';

const theme = db.theme;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
