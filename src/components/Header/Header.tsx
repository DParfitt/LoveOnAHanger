import { Box, Button, Inline, Link } from '@blockle/blocks-v2';
import { FC } from 'react';
import * as styles from './header.css';

export const Header: FC = () => {
  return (
    <Box as="header" display="flex" alignItems="center" marginX="gutter" className={styles.header}>
      <Inline gap="medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </Inline>

      <Box flexGrow={1} />

      <Box display={['none', 'block']}>
        <Button variant="solid">Donate</Button>
      </Box>
    </Box>
  );
};
