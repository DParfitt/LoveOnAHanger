import {
  Box,
  classnames,
  IconButton,
  Portal,
  useFocusLock,
  usePreventBodyScroll,
  useVisibilityState,
} from '@blockle/blocks-v2';
import { AnimationEvent, FC, MouseEvent, ReactNode, useCallback, useRef } from 'react';
import * as styles from './drawer.css';

export type DrawerProps = {
  children: ReactNode;
  open: boolean;
  onRequestClose: () => void;
};

export const Drawer: FC<DrawerProps> = ({ children, open, onRequestClose }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { visible, hide } = useVisibilityState(open);

  // On outside click, close the dialog
  const onBackdropClick = useCallback(
    (event: MouseEvent) => {
      if (event.target === event.currentTarget) {
        onRequestClose();
      }
    },
    [onRequestClose],
  );

  const onAnimationEnd = useCallback(
    (event: AnimationEvent<HTMLDivElement>) => {
      if (event.animationName === styles.backdropLeaveAnimation) {
        event.stopPropagation();
        hide();
      }
    },
    [hide],
  );

  usePreventBodyScroll(open);
  useFocusLock({ ref: wrapperRef, active: open });

  if (!visible) {
    return null;
  }

  return (
    <Portal>
      <Box
        className={classnames(styles.backdrop, !open && styles.backdropLeave)}
        onAnimationEnd={onAnimationEnd}
        onClick={onBackdropClick}
      >
        <Box
          ref={wrapperRef}
          className={classnames(styles.drawer, !open && styles.drawerLeave)}
          height="full"
          backgroundColor="body"
          boxShadow="medium"
          position="relative"
        >
          <Box position="absolute" top={0} right={0} padding="small">
            <IconButton name="x-mark" label="Close navigation" onClick={onRequestClose} />
          </Box>
          {children}
        </Box>
      </Box>
    </Portal>
  );
};
