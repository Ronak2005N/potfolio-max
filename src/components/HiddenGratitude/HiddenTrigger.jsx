import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { motionTokens } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import useHiddenGratitude from './useHiddenGratitude';
import './gratitude.css';

const GratitudeOverlay = lazy(() => import('./GratitudeOverlay'));

const HiddenTrigger = () => {
  const reduceMotion = usePrefersReducedMotion();
  const { isOpen, isClosing, open, requestClose, handleExitComplete } = useHiddenGratitude();

  return (
    <>
      <motion.button
        type="button"
        className="gratitude-trigger"
        aria-label="A quiet note left at the end of the page"
        onClick={open}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: motionTokens.duration.reveal,
          ease: motionTokens.easing.smoothOut,
        }}
      >
        <span className="gratitude-trigger-dot" aria-hidden="true" />
      </motion.button>

      {isOpen ? (
        <Suspense fallback={null}>
          <GratitudeOverlay
            closing={isClosing}
            reduceMotion={reduceMotion}
            onRequestClose={requestClose}
            onExitComplete={handleExitComplete}
          />
        </Suspense>
      ) : null}
    </>
  );
};

export default HiddenTrigger;
