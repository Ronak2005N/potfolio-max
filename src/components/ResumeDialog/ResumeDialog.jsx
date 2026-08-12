import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { motionTokens } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import ResumeDialogContext from './useResumeDialog';
import './resumeDialog.css';

const RESUME_HREF = '/resume.pdf';
const RESUME_VIEW_HREF =
  'https://drive.google.com/file/d/1qhH07xrXGm5rSa5DATQo42-bsARdFicJ/view?usp=sharing';

const getFocusables = (container) =>
  Array.from(container.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')).filter(
    (element) => !element.hasAttribute('disabled') && element.offsetParent !== null
  );

const ResumeDialog = ({ closing, reduceMotion, onRequestClose, onExitComplete }) => {
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

  const cardMotion = reduceMotion
    ? { initial: false, animate: closing ? { opacity: 0, scale: 0.98 } : { opacity: 1, scale: 1 } }
    : {
        initial: { opacity: 0, y: 24, scale: 0.97 },
        animate: closing ? { opacity: 0, y: 16, scale: 0.98 } : { opacity: 1, y: 0, scale: 1 },
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
      className="resume-dialog-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Résumé options"
      onClick={handleBackdropClick}
      onAnimationComplete={() => {
        if (closing) {
          onExitComplete();
        }
      }}
      {...backdropMotion}
    >
      <div className="resume-dialog-card" {...cardMotion}>
        <button
          type="button"
          className="resume-dialog-close"
          aria-label="Close résumé options"
          onClick={onRequestClose}
        >
          ×
        </button>

        <p className="resume-dialog-overline">Résumé</p>
        <h2 className="resume-dialog-heading">Keep a copy, or read it here?</h2>
        <p className="resume-dialog-copy">
          Download the PDF to your device, or open it in your browser.
        </p>

        <div className="resume-dialog-actions">
          <a
            className="resume-dialog-action resume-dialog-action-download"
            href={RESUME_HREF}
            download="resume.pdf"
            onClick={onRequestClose}
          >
            Download PDF
          </a>
          <a
            className="resume-dialog-action resume-dialog-action-view"
            href={RESUME_VIEW_HREF}
            target="_blank"
            rel="noreferrer"
            onClick={onRequestClose}
          >
            View in Browser
          </a>
        </div>

        <p className="resume-dialog-note">PDF · Ready to share</p>
      </div>
    </motion.div>
  );
};

const ResumeDialogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const previousFocusRef = useRef(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isOpen) {
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
  }, [isOpen]);

  const openResumeDialog = useCallback(() => {
    previousFocusRef.current = document.activeElement;
    setIsClosing(false);
    setIsOpen(true);
  }, []);

  const requestClose = useCallback(() => {
    setIsClosing(true);
  }, []);

  const handleExitComplete = useCallback(() => {
    setIsOpen(false);
    setIsClosing(false);

    if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
      previousFocusRef.current.focus();
    }
  }, []);

  return (
    <ResumeDialogContext.Provider value={{ openResumeDialog }}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <ResumeDialog
            closing={isClosing}
            reduceMotion={reduceMotion}
            onRequestClose={requestClose}
            onExitComplete={handleExitComplete}
          />
        ) : null}
      </AnimatePresence>
    </ResumeDialogContext.Provider>
  );
};

export default ResumeDialogProvider;
