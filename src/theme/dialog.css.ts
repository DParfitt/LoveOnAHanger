import { createComponentTheme } from '@blockle/blocks-v2/src/components/BlocksProvider/createComponentTheme';
import { style } from '@vanilla-extract/css';

export const dialog = createComponentTheme('dialog', ({ atoms, vars }) => ({
  base: style([
    atoms({ boxShadow: 'medium', borderRadius: 'medium' }),
    {
      backgroundColor: vars.color.white,
      maxHeight: '94%',
      maxWidth: '94%',
    },
  ]),
  backdrop: style({
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  }),
}));
