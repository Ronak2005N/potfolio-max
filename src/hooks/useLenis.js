import { useEffect, useRef } from 'react';
import { initializeLenisIfAvailable, prefersReducedMotion } from '../utils/animations';

const NAVBAR_SELECTOR = '.navbar';

const getNavbarOffset = () => {
  if (typeof document === 'undefined') {
    return 0;
  }

  const navbar = document.querySelector(NAVBAR_SELECTOR);
  if (!navbar) {
    return 0;
  }

  const height = navbar.getBoundingClientRect().height;
  const offset = parseFloat(window.getComputedStyle(document.documentElement).fontSize);

  return Number.isFinite(height) && Number.isFinite(offset) ? height + offset : height;
};

const useLenis = () => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

    let cancelled = false;

    initializeLenisIfAvailable().then((lenis) => {
      if (cancelled || !lenis) {
        return;
      }

      lenisRef.current = lenis;

      const loop = (time) => {
        lenis.raf(time);
        rafRef.current = window.requestAnimationFrame(loop);
      };

      rafRef.current = window.requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    const lenis = lenisRef.current;

    if (lenis) {
      lenis.scrollTo(target, { offset: getNavbarOffset() });
      return;
    }

    target.scrollIntoView({ behavior: 'auto', block: 'start' });
  };

  return { scrollTo };
};

export default useLenis;