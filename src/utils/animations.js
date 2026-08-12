import { motion } from './constants';

const seconds = (ms) => ms / 1000;

export const motionTokens = {
  duration: {
    instant: seconds(motion.duration.instant),
    fast: seconds(motion.duration.fast),
    base: seconds(motion.duration.base),
    slow: seconds(motion.duration.slow),
    reveal: seconds(motion.duration.reveal),
  },
  easing: {
    standard: motion.easing.standard,
    smoothOut: motion.easing.smoothOut,
    smoothIn: motion.easing.smoothIn,
    gentle: motion.easing.gentle,
  },
};

export const staggerTokens = {
  children: motion.stagger.children,
  delay: motion.stagger.delay,
};

export const staggerChild = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.base,
      ease: motionTokens.easing.smoothOut,
    },
  },
};

export const createReveal = (reduceMotion, delay = 0) => {
  if (reduceMotion) {
    return {};
  }

  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -20% 0px' },
    transition: {
      duration: motionTokens.duration.reveal,
      ease: motionTokens.easing.smoothOut,
      delay,
    },
  };
};

export const lenisDefaults = {
  lerp: 0.09,
  duration: 1.1,
  smoothWheel: true,
  wheelMultiplier: 0.92,
  touchMultiplier: 1.1,
  infinite: false,
  syncTouch: false,
};

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const prepareSmoothScrollEnvironment = () => {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.classList.add('has-smooth-scroll');
};

export const initializeLenisIfAvailable = async () => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const mod = await import('lenis');
    const Lenis = mod.default;

    if (!Lenis) {
      return null;
    }

    return new Lenis(lenisDefaults);
  } catch {
    return null;
  }
};
