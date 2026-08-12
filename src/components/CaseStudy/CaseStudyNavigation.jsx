import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createReveal } from '../../utils/animations';
import useLenis from '../../hooks/useLenis';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const CaseStudyNavigation = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();
  const { scrollTo } = useLenis();
  const isLive = content.status === 'live';

  const handleBackToTop = () => {
    if (typeof scrollTo === 'function') {
      scrollTo('#case-top');
    }
  };

  return (
    <section className="case-navigation" aria-label={content.label}>
      <div className="case-navigation-inner">
        <motion.div {...createReveal(reduceMotion, 0)}>
          <p className="case-next-label">{content.label}</p>

          {isLive ? (
            <Link to={`/projects/${content.slug}`} className="case-next-title-link">
              <span className="case-next-title">{content.title}</span>
              <span className="case-next-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ) : (
            <div className="case-next-title-block">
              <span className="case-next-title">{content.title}</span>
              <span className="case-next-status">{content.upcomingLabel}</span>
            </div>
          )}
        </motion.div>

        <motion.div className="case-nav-row" {...createReveal(reduceMotion, 0.1)}>
          <Link to="/" className="case-nav-link">
            <span aria-hidden="true">←</span>
            {content.backLabel}
          </Link>

          <button
            type="button"
            className="case-nav-link"
            onClick={handleBackToTop}
          >
            <span aria-hidden="true">↑</span>
            {content.topLabel}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyNavigation;
