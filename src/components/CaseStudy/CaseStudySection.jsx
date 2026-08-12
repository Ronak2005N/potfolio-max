import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import { createClassName } from '../../utils/helpers';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const CaseStudySection = ({ id, index, label, children, className }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section
      id={id}
      className={createClassName('case-section', className)}
      aria-label={label}
    >
      <div className="case-inner">
        <motion.div className="section-head" {...createReveal(reduceMotion, 0)}>
          <p className="section-index">{index}  {label}</p>
          <span className="section-rule" aria-hidden="true" />
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default CaseStudySection;
