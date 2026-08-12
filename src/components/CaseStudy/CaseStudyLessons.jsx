import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import CaseStudySection from './CaseStudySection';

const CaseStudyLessons = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <CaseStudySection id="lessons" index={content.index} label={content.heading}>
      <motion.p className="case-prose" {...createReveal(reduceMotion, 0.05)}>
        {content.intro}
      </motion.p>

      <div className="case-lessons">
        {content.items.map((item, index) => (
          <motion.article
            key={item.title}
            className="case-lesson"
            {...createReveal(reduceMotion, 0.1 + index * 0.05)}
          >
            <h3 className="case-lesson-title">{item.title}</h3>
            <p className="case-lesson-description">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </CaseStudySection>
  );
};

export default CaseStudyLessons;
