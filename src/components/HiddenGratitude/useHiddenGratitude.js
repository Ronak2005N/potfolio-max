import { useCallback, useEffect, useRef, useState } from 'react';

const useHiddenGratitude = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const previousFocusRef = useRef(null);

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

  const open = useCallback(() => {
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

  return { isOpen, isClosing, open, requestClose, handleExitComplete };
};

export default useHiddenGratitude;
