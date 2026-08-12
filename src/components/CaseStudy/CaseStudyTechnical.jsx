import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import CaseStudySection from './CaseStudySection';

const CaseStudyTechnical = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <CaseStudySection id="technical" index={content.index} label={content.heading}>
      <motion.p className="case-prose" {...createReveal(reduceMotion, 0.05)}>
        {content.intro}
      </motion.p>

      <dl className="case-stack">
        {content.stack.map((item, index) => (
          <motion.div
            key={item.label}
            className="case-stack-row"
            {...createReveal(reduceMotion, 0.1 + index * 0.04)}
          >
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </motion.div>
        ))}
      </dl>

      <div className="case-topics">
        {content.topics.map((topic, index) => (
          <motion.article
            key={topic.heading}
            className="case-topic"
            {...createReveal(reduceMotion, 0.1 + index * 0.03)}
          >
            <h3 className="case-topic-heading">{topic.heading}</h3>
            <ul className="case-topic-points" role="list">
              {topic.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </CaseStudySection>
  );
};

export default CaseStudyTechnical;
