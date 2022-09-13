import { BlocksProvider } from '@blockle/blocks-v2';
import '@blockle/blocks-v2/src/reset.css';
import { momotaroTheme } from '@blockle/blocks-v2/src/Themes/Momotaro';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlocksProvider theme={momotaroTheme} spriteUrl="" linkComponent={Link}>
      <Head>
        <title>Love on a hanger</title>
        <meta name="description" content="Love on a hanger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </BlocksProvider>
  );
}

export default MyApp;
