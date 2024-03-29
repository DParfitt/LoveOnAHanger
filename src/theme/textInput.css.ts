import { createComponentTheme } from '@blockle/blocks-v2/src/components/BlocksProvider/createComponentTheme';
import { style } from '@vanilla-extract/css';

export const textInput = createComponentTheme('textInput', ({ atoms, vars }) => ({
  container: style([
    atoms({
      backgroundColor: 'white',
      borderRadius: 'medium',
      boxShadow: 'medium',
      padding: 'large',
    }),
    style({
      height: 56,
      vars: {
        '--background-primary': '#fff',
      },
      ':focus-within': {
        outline: vars.outline.focus,
        outlineOffset: vars.outline.offset,
      },
    }),
  ]),
  input: style({
    outline: 'none',
    background: 'transparent',
    color: vars.color.text,
  }),
  label: style([
    atoms({
      color: 'text',
    }),
  ]),
}));
