import { createComponentTheme } from '@blockle/blocks-v2/src/components/BlocksProvider/createComponentTheme';
import { style } from '@vanilla-extract/css';

export const checkbox = createComponentTheme('checkbox', ({ atoms }) => ({
  checkbox: style([
    atoms({
      backgroundColor: 'primaryLight',
      borderRadius: 'xsmall',
    }),
    style({
      width: 24,
      height: 24,
    }),
  ]),
}));
