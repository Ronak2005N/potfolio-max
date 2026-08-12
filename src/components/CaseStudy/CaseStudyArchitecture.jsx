import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import CaseStudySection from './CaseStudySection';

const CaseStudyArchitecture = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <CaseStudySection id="architecture" index={content.index} label={content.heading}>
      <motion.p className="case-prose" {...createReveal(reduceMotion, 0.05)}>
        {content.intro}
      </motion.p>

      <ol className="case-flow" role="list">
        {content.stages.map((stage, index) => (
          <motion.li
            key={stage.label}
            className="case-flow-stage"
            {...createReveal(reduceMotion, 0.1 + index * 0.05)}
          >
            <span className="case-flow-node" aria-hidden="true">
              <span className="case-flow-dot" />
              <span className="case-flow-line" />
              <span className="case-flow-arrow">↓</span>
            </span>
            <div className="case-flow-body">
              <h3 className="case-flow-label">{stage.label}</h3>
              <p className="case-flow-note">{stage.description}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </CaseStudySection>
  );
};

export default CaseStudyArchitecture;
