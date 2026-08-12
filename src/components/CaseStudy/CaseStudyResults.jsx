import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import CaseStudySection from './CaseStudySection';

const CaseStudyResults = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <CaseStudySection id="results" index={content.index} label={content.heading}>
      <motion.p className="case-prose" {...createReveal(reduceMotion, 0.05)}>
        {content.intro}
      </motion.p>

      <div className="case-metrics">
        {content.metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="case-metric"
            {...createReveal(reduceMotion, 0.1 + index * 0.05)}
          >
            <span className="case-metric-value">{metric.value}</span>
            <span className="case-metric-label">{metric.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="case-results-lists">
        <motion.div
          className="case-list-block"
          {...createReveal(reduceMotion, 0.15)}
        >
          <h3 className="case-list-heading">{content.achievementsHeading}</h3>
          <ul className="case-list" role="list">
            {content.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="case-list-block"
          {...createReveal(reduceMotion, 0.2)}
        >
          <h3 className="case-list-heading">{content.futureHeading}</h3>
          <ul className="case-list" role="list">
            {content.futureImprovements.map((improvement) => (
              <li key={improvement}>{improvement}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </CaseStudySection>
  );
};

export default CaseStudyResults;
