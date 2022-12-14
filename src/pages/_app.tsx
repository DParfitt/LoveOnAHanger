import { BlocksProvider } from '@blockle/blocks-v2';
import '@blockle/blocks-v2/src/reset.css';
import { theme } from '@blockle/blocks-v2/src/Themes/LoveOnAHanger';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Love on a hanger</title>
        <meta name="description" content="Love on a hanger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlocksProvider theme={theme} spriteUrl="/icons.svg" linkComponent={Link}>
        <Component {...pageProps} />
      </BlocksProvider>
    </>
  );
};

export default MyApp;
