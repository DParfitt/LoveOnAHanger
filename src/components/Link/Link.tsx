import { Link as BlockLink } from '@blockle/blocks-v2';
import NextLink, { LinkProps } from 'next/link';
import { ElementType, FC, ReactNode } from 'react';

type NextLinkProps = Omit<LinkProps, 'as'> & {
  children: ReactNode;
};
type NextLinkComponent = ElementType<NextLinkProps>;

export const Link: FC<NextLinkProps> = ({ ...props }) => {
  return <BlockLink as={NextLink as NextLinkComponent} {...props} />;
};
