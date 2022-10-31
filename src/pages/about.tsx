import { Box, Heading, Stack, Text } from '@blockle/blocks-v2';
import type { NextPage } from 'next';
import { Header } from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Box as="main" padding="gutter">
        <Stack gap="medium">
          <Heading level={1}>About</Heading>

          <Text as="p">
            Love on a Hanger is a pre-loved ladies clothing boutique. Our sole purpose is to raise
            funds for vulnerable children. We are open on Wednesdays from 9am-12pm and Fridays from
            11:00am - 13.30 pm.
          </Text>
        </Stack>
      </Box>

      <Box as="footer" padding="gutter">
        Footer
      </Box>
    </>
  );
};

export default Home;
