import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import CaseStudySection from './CaseStudySection';

const CaseStudyGallery = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <CaseStudySection id="gallery" index={content.index} label={content.heading}>
      <motion.p className="case-prose" {...createReveal(reduceMotion, 0.05)}>
        {content.intro}
      </motion.p>

      <div className="case-gallery">
        {content.items.map((item, index) => (
          <motion.figure
            key={item.alt || index}
            className="case-gallery-item"
            {...createReveal(reduceMotion, 0.1 + index * 0.05)}
          >
            <div className="case-gallery-media">
              {item.src ? (
                <img src={item.src} alt={item.alt} loading="lazy" />
              ) : (
                <div className="case-placeholder" aria-hidden="true">
                  <span className="case-placeholder-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="case-placeholder-caption">{content.placeholder}</span>
                </div>
              )}
            </div>
            {item.caption ? (
              <figcaption className="case-gallery-caption">{item.caption}</figcaption>
            ) : null}
          </motion.figure>
        ))}
      </div>
    </CaseStudySection>
  );
};

export default CaseStudyGallery;
