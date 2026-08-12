import { motion } from 'framer-motion';
import { createReveal } from '../../utils/animations';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import ImageLightboxProvider from '../ImageLightbox/ImageLightbox';
import { useImageLightbox } from '../ImageLightbox/useImageLightbox';
import CaseStudySection from './CaseStudySection';

const CaseStudyFeatureMedia = ({ feature, placeholderLabel }) => {
  const { openImage } = useImageLightbox();

  if (!feature.image) {
    return (
      <div className="case-placeholder" aria-hidden="true">
        <span className="case-placeholder-index">{feature.index}</span>
        <span className="case-placeholder-caption">{placeholderLabel}</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="case-feature-media-button"
      aria-label={`Open fullscreen preview of ${feature.alt || feature.heading}`}
      onClick={() =>
        openImage({ src: feature.image, alt: feature.alt || feature.heading })
      }
    >
      <img src={feature.image} alt={feature.alt || feature.heading} loading="lazy" />
    </button>
  );
};

const CaseStudyFeatures = ({ content }) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <ImageLightboxProvider>
      <CaseStudySection id="features" index={content.index} label={content.heading}>
        <motion.p className="case-prose" {...createReveal(reduceMotion, 0.05)}>
          {content.intro}
        </motion.p>

        <div className="case-features">
          {content.items.map((feature, index) => (
            <motion.article
              key={feature.id}
              className="case-feature"
              {...createReveal(reduceMotion, 0.1 + index * 0.05)}
            >
              <div className="case-feature-media">
                <CaseStudyFeatureMedia
                  feature={feature}
                  placeholderLabel={content.placeholder}
                />
              </div>

              <div className="case-feature-body">
                <p className="case-feature-index" aria-hidden="true">
                  {feature.index}
                </p>
                <h3 className="case-feature-title">{feature.heading}</h3>
                <p className="case-feature-description">{feature.description}</p>
                <p className="case-feature-note">{feature.techNote}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </CaseStudySection>
    </ImageLightboxProvider>
  );
};

export default CaseStudyFeatures;
