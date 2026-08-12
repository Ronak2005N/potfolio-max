import { motion } from 'framer-motion';
import { motionTokens, staggerChild, staggerTokens } from '../utils/animations';
import { createClassName } from '../utils/helpers';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { useResumeDialog } from './ResumeDialog/useResumeDialog';
import InkPortrait from './InkPortrait';

const HERO_KICKER = 'Ronak N Full-Stack Developer & AI Enthusiast';
const HERO_SUBHEAD =
  'I build modern AI-powered web applications and full-stack solutions transforming ideas into polished, scalable products with clean design and seamless user experiences.';
const HERO_META = 'Open to Internships & Freelance · Chennai, India · React / Node.js / TypeScript / AI';

const Hero = () => {
  const reduceMotion = usePrefersReducedMotion();
  const { openResumeDialog } = useResumeDialog();

  const container = reduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerTokens.children,
            delayChildren: staggerTokens.delay,
          },
        },
      };

  const line = reduceMotion
    ? { hidden: {}, visible: {} }
    : staggerChild;

  const headline = reduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        visible: {
          opacity: 1,
          clipPath: 'inset(0 0 0% 0)',
          transition: {
            duration: motionTokens.duration.reveal,
            ease: motionTokens.easing.smoothOut,
          },
        },
      };

  const accent = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: {
          delay: 0.2,
          duration: motionTokens.duration.base,
          ease: motionTokens.easing.smoothOut,
        },
      };

  const cta = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: {
          delay: 0.46,
          duration: motionTokens.duration.reveal,
          ease: motionTokens.easing.smoothOut,
        },
      };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-layout">
          <InkPortrait />

          <div className="hero-text-column">
            <motion.div
              className="hero-text-container"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.p className="hero-kicker" variants={line}>
                {HERO_KICKER}
              </motion.p>

              <motion.h1 className="hero-headline" variants={headline}>
                AI-powered products,
                built for{' '}
                <motion.em className="hero-accent" {...accent}>
                  people
                </motion.em>
                <span className="hero-period">.</span>
              </motion.h1>

              <motion.p className="hero-subhead" variants={line}>
                {HERO_SUBHEAD}
              </motion.p>

              <motion.p className="hero-meta" variants={line}>
                {HERO_META}
              </motion.p>
            </motion.div>

            <motion.div className="hero-cta-wrap" {...cta}>
              <motion.button
                type="button"
                aria-label="Open résumé options"
                onClick={openResumeDialog}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0, scale: 0.995 }}
                transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.gentle }}
                className={createClassName('button', 'button-primary', 'hero-cta')}
              >
                View Resume
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
