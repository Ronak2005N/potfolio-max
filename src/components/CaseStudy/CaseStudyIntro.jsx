import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import CaseStudySection from './CaseStudySection';

const CaseStudyIntro = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <CaseStudySection id="overview" index={content.index} label={content.heading}>
      <motion.p className="case-lead" {...createReveal(reduceMotion, 0.05)}>
        {content.intro}
      </motion.p>

      <dl className="case-ledger">
        {content.items.map((item, index) => (
          <motion.div
            key={item.label}
            className="case-ledger-row"
            {...createReveal(reduceMotion, 0.1 + index * 0.05)}
          >
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </motion.div>
        ))}
      </dl>
    </CaseStudySection>
  );
};

export default CaseStudyIntro;
