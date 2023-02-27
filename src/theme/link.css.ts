import { createComponentTheme } from '@blockle/blocks-v2/src/components/BlocksProvider/createComponentTheme';
import { style, styleVariants } from '@vanilla-extract/css';

export const link = createComponentTheme('link', ({ vars }) => ({
  base: style({
    outline: 'none',
    border: 'none',
    textDecoration: 'none',
    color: vars.color.primary,
    ':hover': {
      color: vars.color.secondary,
    },
    ':focus-visible': {
      outline: vars.outline.focus,
    },
  }),
  variant: styleVariants({
    inherit: {},
    primary: {
      textDecoration: 'none',
      color: vars.color.primary,
      ':hover': {
        color: vars.color.secondary,
      },
    },
    secondary: {
      textDecoration: 'none',
      color: vars.color.secondary,
      ':hover': {
        color: vars.color.secondary,
      },
    },
  }),
}));
