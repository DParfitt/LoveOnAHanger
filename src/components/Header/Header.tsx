import { Box, Button, IconButton, Inline, Stack, Text } from '@blockle/blocks-v2';
import { FC, useState } from 'react';
import { Drawer } from '../Drawer/Drawer';
import { Link } from '../Link/Link';
import * as styles from './header.css';

export const Header: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Tablet and up menu */}
      <Box
        as="header"
        display="flex"
        alignItems="center"
        paddingX="gutter"
        className={styles.header}
      >
        <Box display={['block', 'none']}>
          <IconButton
            name="bars-3"
            label="Open navigation"
            color="primary"
            size="medium"
            onClick={() => setDrawerOpen(true)}
          />
        </Box>
        <Box display={['none', 'flex']} alignItems="center">
          <Inline as="nav" gap="medium" alignX="center" alignY="center">
            <img src="/logo.png" alt="Love on a hangar" style={{ height: '40px' }} />
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </Inline>
        </Box>

        <Box flexGrow={1} textAlign="center">
          <Box display={['block', 'none']}>
            <Text>Love on a hanger</Text>
          </Box>
        </Box>

        <Button variant="solid">Donate</Button>
      </Box>

      <Box className={styles.bar} backgroundColor="primary" boxShadow="medium" />

      <Box position="relative">
        <img
          src="/dinh-ng-jYz3EGBhDpk-unsplash.jpg"
          alt="Hangers"
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />
      </Box>

      <Box className={styles.bar} backgroundColor="primary" boxShadow="medium" />

      <Drawer open={drawerOpen} onRequestClose={() => setDrawerOpen(false)}>
        <Box padding="gutter">
          <Stack gap="medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};
