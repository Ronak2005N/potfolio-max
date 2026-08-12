import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { motionTokens } from '../../utils/animations';
import GratitudeCard from './GratitudeCard';

const getFocusables = (container) =>
  Array.from(container.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')).filter(
    (element) => !element.hasAttribute('disabled') && element.offsetParent !== null
  );

const GratitudeOverlay = ({ closing, reduceMotion, onRequestClose, onExitComplete }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;

    if (!overlay) {
      return undefined;
    }

    const focusables = getFocusables(overlay);
    const first = focusables[0];

    if (first) {
      first.focus();
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onRequestClose();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const current = getFocusables(overlay);
      const currentFirst = current[0];
      const currentLast = current[current.length - 1];

      if (event.shiftKey && document.activeElement === currentFirst) {
        event.preventDefault();
        currentLast.focus();
      } else if (!event.shiftKey && document.activeElement === currentLast) {
        event.preventDefault();
        currentFirst.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onRequestClose]);

  useEffect(() => {
    if (closing && reduceMotion) {
      onExitComplete();
    }
  }, [closing, reduceMotion, onExitComplete]);

  const backdropMotion = reduceMotion
    ? { initial: false, animate: closing ? { opacity: 0 } : { opacity: 1 } }
    : {
        initial: { opacity: 0 },
        animate: closing ? { opacity: 0 } : { opacity: 1 },
        transition: {
          duration: closing ? 0.7 : 1.1,
          ease: motionTokens.easing.smoothOut,
        },
      };

  const cardMotion = reduceMotion
    ? { initial: false, animate: closing ? { opacity: 0, y: 60 } : { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 96, scale: 0.985 },
        animate: closing ? { opacity: 0, y: 72, scale: 0.99 } : { opacity: 1, y: 0, scale: 1 },
        transition: {
          duration: closing ? 0.65 : 1.15,
          ease: motionTokens.easing.smoothOut,
          delay: closing ? 0 : 0.15,
        },
      };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onRequestClose();
    }
  };

  return (
    <motion.div
      ref={overlayRef}
      className="gratitude-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="A quiet thank you"
      onClick={handleBackdropClick}
      onAnimationComplete={() => {
        if (closing) {
          onExitComplete();
        }
      }}
      {...backdropMotion}
    >
      <div className="gratitude-vignette" aria-hidden="true" />
      <div className="gratitude-grain" aria-hidden="true" />

      <div className="gratitude-card" {...cardMotion}>
        <button
          type="button"
          className="gratitude-close"
          aria-label="Close"
          onClick={onRequestClose}
        >
          ×
        </button>

        <GratitudeCard closing={closing} reduceMotion={reduceMotion} />
      </div>
    </motion.div>
  );
};

export default GratitudeOverlay;
