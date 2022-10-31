import { keyframes, style } from '@vanilla-extract/css';

export const backdropEnterAnimation = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const backdropLeaveAnimation = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const drawerEnterAnimation = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
});

export const drawerLeaveAnimation = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(-100%)',
  },
});

export const backdrop = style({
  contain: 'layout',
  position: 'fixed',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  opacity: '0',
  animationName: backdropEnterAnimation,
  animationDuration: '200ms',
  animationFillMode: 'both',
});

export const backdropLeave = style({
  animationName: backdropLeaveAnimation,
});

export const drawer = style({
  width: '300px',
  animationName: drawerEnterAnimation,
  animationDuration: '200ms',
  animationFillMode: 'both',
});

export const drawerLeave = style({
  animationName: drawerLeaveAnimation,
});
