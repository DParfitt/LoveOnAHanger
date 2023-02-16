import { Box, Heading, Stack, Text } from '@blockle/blocks-v2';
import type { NextPage } from 'next';
import { Header } from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Box as="main" padding="gutter" flexGrow={1}>
        <Stack gap="medium">
          <Heading level={1}>Love On A Hanger</Heading>

          <Text as="p">
            Lots of lovely new accessories! And our coffee shop will have TOASTED SANDWICHES on
            Wednesday morning along with our normal delicious cakes and quiches. Invite a friend!❤️
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
