import { Box, Heading } from '@blockle/blocks-v2';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Box as="main" padding="gutter">
        <Heading level={1}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Heading>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </Box>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Home;
