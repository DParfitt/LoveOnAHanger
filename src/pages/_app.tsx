import { BlocksProvider, Box } from '@blockle/blocks-v2';
import '@blockle/blocks-v2/src/reset.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import * as styles from '../css/app.css';
import { theme } from '../theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Love on a hanger</title>
        <meta name="description" content="Love on a hanger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlocksProvider theme={theme} spriteUrl="/icons.svg" linkComponent={Link}>
        <Box className={styles.app} display="flex" flexDirection="column">
          <Component {...pageProps} />
        </Box>
      </BlocksProvider>
    </>
  );
};

export default MyApp;
