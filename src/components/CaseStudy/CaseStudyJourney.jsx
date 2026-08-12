import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import CaseStudySection from './CaseStudySection';

const CaseStudyJourney = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <CaseStudySection id="journey" index={content.index} label={content.heading}>
      <motion.p className="case-prose" {...createReveal(reduceMotion, 0.05)}>
        {content.intro}
      </motion.p>

      <ol className="case-journey" role="list">
        {content.phases.map((phase, index) => (
          <motion.li
            key={phase.title}
            className="case-journey-phase"
            {...createReveal(reduceMotion, 0.1 + index * 0.04)}
          >
            <span className="case-journey-phase-index" aria-hidden="true">
              {phase.phase}
            </span>
            <div className="case-journey-phase-body">
              <h3 className="case-journey-phase-title">{phase.title}</h3>
              <p className="case-journey-phase-description">{phase.description}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </CaseStudySection>
  );
};

export default CaseStudyJourney;
