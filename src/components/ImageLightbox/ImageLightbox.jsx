import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { motionTokens } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import ImageLightboxContext from './useImageLightbox';
import './imageLightbox.css';

const getFocusables = (container) =>
  Array.from(container.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')).filter(
    (element) => !element.hasAttribute('disabled') && element.offsetParent !== null
  );

const ImageLightbox = ({ image, closing, reduceMotion, onRequestClose, onExitComplete }) => {
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
          duration: closing ? motionTokens.duration.slow : motionTokens.duration.base,
          ease: motionTokens.easing.smoothOut,
        },
      };

  const imageMotion = reduceMotion
    ? { initial: false, animate: closing ? { opacity: 0, scale: 0.98 } : { opacity: 1, scale: 1 } }
    : {
        initial: { opacity: 0, scale: 0.96 },
        animate: closing ? { opacity: 0, scale: 0.98 } : { opacity: 1, scale: 1 },
        transition: {
          duration: closing ? motionTokens.duration.slow : motionTokens.duration.base,
          ease: motionTokens.easing.smoothOut,
        },
      };

  const closeMotion = reduceMotion
    ? { initial: false, animate: closing ? { opacity: 0 } : { opacity: 1 } }
    : {
        initial: { opacity: 0 },
        animate: closing ? { opacity: 0 } : { opacity: 1 },
        transition: {
          duration: closing ? motionTokens.duration.slow : motionTokens.duration.base,
          ease: motionTokens.easing.smoothOut,
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
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={handleBackdropClick}
      onAnimationComplete={() => {
        if (closing) {
          onExitComplete();
        }
      }}
      {...backdropMotion}
    >
      <motion.img
        className="image-lightbox-image"
        src={image.src}
        alt={image.alt || ''}
        {...imageMotion}
      />
      <motion.button
        type="button"
        className="image-lightbox-close"
        aria-label="Close image preview"
        onClick={onRequestClose}
        {...closeMotion}
      >
        ×
      </motion.button>
    </motion.div>
  );
};

const ImageLightboxProvider = ({ children }) => {
  const [image, setImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const previousFocusRef = useRef(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const html = document.documentElement;
    const body = document.body;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    return () => {
      html.style.overflow = '';
      body.style.overflow = previousBodyOverflow;
    };
  }, [image]);

  const openImage = useCallback(({ src, alt }) => {
    previousFocusRef.current = document.activeElement;
    setIsClosing(false);
    setImage({ src, alt });
  }, []);

  const requestClose = useCallback(() => {
    setIsClosing(true);
  }, []);

  const handleExitComplete = useCallback(() => {
    setImage(null);
    setIsClosing(false);

    if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
      previousFocusRef.current.focus();
    }
  }, []);

  return (
    <ImageLightboxContext.Provider value={{ openImage }}>
      {children}
      <AnimatePresence>
        {image ? (
          <ImageLightbox
            image={image}
            closing={isClosing}
            reduceMotion={reduceMotion}
            onRequestClose={requestClose}
            onExitComplete={handleExitComplete}
          />
        ) : null}
      </AnimatePresence>
    </ImageLightboxContext.Provider>
  );
};

export default ImageLightboxProvider;
