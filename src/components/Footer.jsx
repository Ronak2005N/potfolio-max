import { motion } from 'framer-motion';
import { motionTokens } from '../utils/animations';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { footerContent } from '../data/footer';

const Footer = () => {
  const reduceMotion = usePrefersReducedMotion();

  const reveal = (delay = 0) => {
    if (reduceMotion) {
      return {};
    }

    return {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: '0px 0px -10% 0px' },
      transition: {
        duration: motionTokens.duration.reveal,
        ease: motionTokens.easing.smoothOut,
        delay,
      },
    };
  };

  const meta = `${footerContent.name} · ${footerContent.location} · ${footerContent.year}`;

  return (
    <footer className="footer-colophon" aria-label="Site colophon">
      <div className="footer-inner">
        <motion.span className="footer-rule" aria-hidden="true" {...reveal()} />
        <motion.p className="footer-statement" {...reveal(0.05)}>
          {footerContent.statement}
        </motion.p>
        <motion.p className="footer-meta" {...reveal(0.1)}>
          {meta}
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;