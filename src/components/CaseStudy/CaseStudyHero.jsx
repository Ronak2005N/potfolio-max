import { motion } from 'framer-motion';
import { motionTokens, staggerChild, staggerTokens } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const CaseStudyHero = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

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

  const line = reduceMotion ? { hidden: {}, visible: {} } : staggerChild;

  const visual = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          delay: 0.32,
          duration: motionTokens.duration.reveal,
          ease: motionTokens.easing.smoothOut,
        },
      };

  const scrollHint = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: {
          delay: 0.9,
          duration: motionTokens.duration.base,
          ease: motionTokens.easing.smoothOut,
        },
      };

  return (
    <section id="case-top" className="case-hero" aria-label={content.label}>
      <div className="case-hero-inner">
        <motion.div
          className="case-hero-text"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="case-hero-kicker" variants={line}>
            {content.kicker}
          </motion.p>

          {content.github || content.demo ? (
            <motion.div
              className="case-hero-actions"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: motionTokens.duration.base,
                ease: motionTokens.easing.smoothOut,
              }}
            >
              {content.demo ? (
                <a
                  href={content.demo.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={content.demo.label}
                  className="case-github-link"
                >
                  <span className="case-github-link-text">{content.demo.text}</span>
                  <span className="case-github-link-arrow" aria-hidden="true">
                    {content.demo.arrow}
                  </span>
                </a>
              ) : null}

              {content.github ? (
                <a
                  href={content.github.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={content.github.label}
                  className="case-github-link"
                >
                  <span className="case-github-link-icon" aria-hidden="true">
                    <img src={content.github.icon} alt="" />
                  </span>
                  <span className="case-github-link-text">{content.github.text}</span>
                  <span className="case-github-link-arrow" aria-hidden="true">
                    {content.github.arrow}
                  </span>
                </a>
              ) : null}
            </motion.div>
          ) : null}

          <motion.h1 className="case-hero-title" variants={line}>
            {content.title}
          </motion.h1>

          <motion.p className="case-hero-statement" variants={line}>
            {content.statement}
          </motion.p>
        </motion.div>

        <motion.div className="case-hero-visual" {...visual}>
          {content.visual.image ? (
            <img
              src={content.visual.image}
              alt={content.visual.alt || ''}
              loading="lazy"
            />
          ) : (
            <div className="case-placeholder" aria-hidden="true">
              <span className="case-placeholder-index">{content.visual.index}</span>
              <span className="case-placeholder-caption">{content.visual.caption}</span>
            </div>
          )}
        </motion.div>
      </div>

      <motion.div className="case-scroll-indicator" aria-hidden="true" {...scrollHint}>
        <span className="case-scroll-line" />
      </motion.div>
    </section>
  );
};

export default CaseStudyHero;
