import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import CaseStudySection from './CaseStudySection';

const CaseStudyProblem = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <CaseStudySection id="problem" index={content.index} label={content.heading}>
      <motion.p className="case-lead" {...createReveal(reduceMotion, 0.05)}>
        {content.intro}
      </motion.p>

      <ol className="case-pains" role="list">
        {content.pains.map((pain, index) => (
          <motion.li
            key={pain.title}
            className="case-pain"
            {...createReveal(reduceMotion, 0.1 + index * 0.05)}
          >
            <span className="case-pain-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="case-pain-body">
              <h3 className="case-pain-title">{pain.title}</h3>
              <p className="case-pain-description">{pain.description}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      {content.closing ? (
        <motion.p className="case-closing" {...createReveal(reduceMotion, 0.2)}>
          {content.closing}
        </motion.p>
      ) : null}
    </CaseStudySection>
  );
};

export default CaseStudyProblem;
