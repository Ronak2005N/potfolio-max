import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import CaseStudySection from './CaseStudySection';

const CaseStudyChallenges = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <CaseStudySection id="challenges" index={content.index} label={content.heading}>
      <motion.p className="case-prose" {...createReveal(reduceMotion, 0.05)}>
        {content.intro}
      </motion.p>

      <div className="case-challenges">
        {content.items.map((item, index) => (
          <motion.article
            key={item.title}
            className="case-challenge"
            {...createReveal(reduceMotion, 0.1 + index * 0.05)}
          >
            <h3 className="case-challenge-title">{item.title}</h3>
            <p className="case-challenge-problem">{item.problem}</p>
            <p className="case-challenge-resolution-label">{content.resolutionLabel}</p>
            <p className="case-challenge-resolution">{item.resolution}</p>
          </motion.article>
        ))}
      </div>
    </CaseStudySection>
  );
};

export default CaseStudyChallenges;
