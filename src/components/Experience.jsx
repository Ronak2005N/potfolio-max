import { motion } from 'framer-motion';
import { motionTokens } from '../utils/animations';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { experienceContent } from '../data/experience';

const Experience = () => {
  const reduceMotion = usePrefersReducedMotion();

  if (!experienceContent.records || experienceContent.records.length === 0) {
    return null;
  }

  const intro = experienceContent.intro ? experienceContent.intro.trim() : '';
  const hasIntro = Boolean(intro);

  const reveal = (delay = 0) => {
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

  return (
    <section
      id="experience"
      className="experience-section"
      aria-labelledby={hasIntro ? 'experience-title' : undefined}
      aria-label={hasIntro ? undefined : 'Experience'}
    >
      <div className="experience-inner">
        <motion.div className="section-head" {...reveal()}>
          <p className="section-index">{experienceContent.index}</p>
          <span className="section-rule" aria-hidden="true" />
        </motion.div>

        {hasIntro ? (
          <motion.h2 id="experience-title" className="experience-intro" {...reveal(0.05)}>
            {intro}
          </motion.h2>
        ) : null}

        <div className="experience-records">
          {experienceContent.records.map((record, index) => (
            <motion.article
              key={`${record.organization}-${index}`}
              className="experience-record"
              {...reveal(0.1 + index * 0.05)}
            >
              <h3 className="experience-organization">{record.organization}</h3>
              {record.meta ? <p className="experience-meta">{record.meta}</p> : null}
              {record.impact ? <p className="experience-impact">{record.impact}</p> : null}
            </motion.article>
          ))}
        </div>

        <motion.div className="section-exit" {...reveal(0.2)}>
          <p className="section-exit-label">{experienceContent.exit}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;