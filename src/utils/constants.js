export const colors = {
  ink: {
    950: '#0A0A0A',
    900: '#111111',
    800: '#1B1B1B',
    700: '#2A2A2A',
    500: '#616161',
    300: '#BDBDBD',
    100: '#EFEFEF',
    50: '#F8F8F8',
  },
  ivory: {
    100: '#F6F3EE',
    200: '#ECE6DB',
  },
  accent: {
    blue: '#1C5D99',
    amber: '#A36B1A',
    emerald: '#2F6D62',
    rose: '#7A2E2E',
  },
  states: {
    info: '#1C5D99',
    success: '#2F6D62',
    warning: '#A36B1A',
    danger: '#7A2E2E',
  },
};

export const typography = {
  families: {
    sans: "'Manrope', 'Avenir Next', 'Segoe UI', sans-serif",
    display: "'Fraunces', 'Iowan Old Style', 'Times New Roman', serif",
    mono: "'JetBrains Mono', 'SFMono-Regular', Menlo, monospace",
  },
  sizes: {
    display2xl: 'clamp(2.7rem, 6.5vw, 5.75rem)',
    displayXl: 'clamp(2.25rem, 5.2vw, 4.5rem)',
    h1: 'clamp(1.8rem, 3.9vw, 3.1rem)',
    h2: 'clamp(1.56rem, 2.6vw, 2.34rem)',
    h3: 'clamp(1.21rem, 1.94vw, 1.8rem)',
    bodyLg: 'clamp(0.95rem, 0.9rem + 0.22vw, 1.0625rem)',
    body: '0.9375rem',
    bodySm: '0.875rem',
    caption: '0.75rem',
    overline: '0.6875rem',
  },
  lineHeights: {
    tight: 1.08,
    snug: 1.22,
    base: 1.58,
    relaxed: 1.72,
  },
  tracking: {
    tighter: '-0.03em',
    tight: '-0.018em',
    normal: '0em',
    wide: '0.06em',
  },
};

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: 'clamp(4.2rem, 3.625rem + 1.15vw, 4.75rem)',
  24: 'clamp(4.625rem, 3.95rem + 1.75vw, 5.625rem)',
  28: 'clamp(5.2rem, 4.5rem + 2.1vw, 6.6rem)',
  32: 'clamp(5.75rem, 5rem + 2.45vw, 7.5rem)',
};

export const radius = {
  none: '0',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  full: '9999px',
};

export const shadows = {
  soft: '0 10px 35px -22px rgba(17, 17, 17, 0.35)',
  medium: '0 18px 45px -24px rgba(17, 17, 17, 0.42)',
  lift: '0 24px 70px -30px rgba(10, 10, 10, 0.5)',
  inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.35)',
};

export const motion = {
  duration: {
    instant: 120,
    fast: 180,
    base: 280,
    slow: 420,
    reveal: 640,
  },
  easing: {
    standard: [0.25, 0.1, 0.25, 1],
    smoothOut: [0.22, 1, 0.36, 1],
    smoothIn: [0.55, 0.06, 0.68, 0.19],
    gentle: [0.3, 0, 0.2, 1],
  },
  hover: {
    y: -2,
    scale: 1.01,
    duration: 180,
  },
  stagger: {
    children: 0.075,
    delay: 0.04,
  },
};

export const breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

export const containers = {
  prose: '40rem',
  narrow: '54rem',
  content: '66rem',
  wide: '74rem',
  bleed: '84rem',
};

export const zIndex = {
  base: 1,
  raised: 10,
  sticky: 30,
  dropdown: 50,
  overlay: 70,
  modal: 90,
  toast: 110,
  cursor: 130,
};

export const iconSize = {
  xs: '0.875rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '2rem',
};

export const imageRadius = {
  default: radius.lg,
  large: radius.xl,
};

export const componentRules = {
  button: {
    minHeight: '2.5rem',
    px: spacing[4],
    gap: spacing[2],
    radius: radius.full,
  },
  card: {
    padding: spacing[8],
    radius: radius.xl,
    border: '1px solid rgba(17, 17, 17, 0.08)',
  },
};

export const designFoundation = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  motion,
  breakpoints,
  containers,
  zIndex,
  iconSize,
  imageRadius,
  componentRules,
};
