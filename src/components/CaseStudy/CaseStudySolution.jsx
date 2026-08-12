import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import CaseStudySection from './CaseStudySection';

const CaseStudySolution = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <CaseStudySection id="solution" index={content.index} label={content.heading}>
      {content.paragraphs.map((paragraph, index) =>
        index === 0 ? (
          <motion.p
            key={index}
            className="case-statement"
            {...createReveal(reduceMotion, 0.05)}
          >
            {paragraph}
          </motion.p>
        ) : (
          <motion.p
            key={index}
            className="case-prose"
            {...createReveal(reduceMotion, 0.1 + (index - 1) * 0.05)}
          >
            {paragraph}
          </motion.p>
        )
      )}

      <div className="case-pillars">
        {content.pillars.map((pillar, index) => (
          <motion.article
            key={pillar.title}
            className="case-pillar"
            {...createReveal(reduceMotion, 0.15 + index * 0.05)}
          >
            <span className="case-pillar-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="case-pillar-title">{pillar.title}</h3>
            <p className="case-pillar-description">{pillar.description}</p>
          </motion.article>
        ))}
      </div>
    </CaseStudySection>
  );
};

export default CaseStudySolution;
