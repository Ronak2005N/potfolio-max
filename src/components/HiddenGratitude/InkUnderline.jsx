import { motion } from 'framer-motion';

const PATHS = [
  'M2 7 C 20 4, 38 9, 56 6 S 90 4, 118 6',
  'M2 6 C 24 9, 46 4, 68 7 S 100 6, 118 5',
  'M2 6.5 C 28 4, 52 8, 76 5.5 S 105 5, 118 6.5',
];

const InkUnderline = ({ index, closing, delay }) => (
  <svg
    className="gratitude-ink-underline"
    viewBox="0 0 120 10"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <motion.path
      d={PATHS[index % PATHS.length]}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={closing ? { pathLength: 0 } : { pathLength: 1 }}
      transition={
        closing
          ? { duration: 0.3, ease: 'easeIn' }
          : { duration: 0.7, delay, ease: 'easeInOut' }
      }
    />
  </svg>
);

export default InkUnderline;
