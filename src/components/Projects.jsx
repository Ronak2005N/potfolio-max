import { memo, useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { motionTokens } from '../utils/animations';
import { createClassName } from '../utils/helpers';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { projectsContent } from '../data/projects';

const hasRealUrl = (value) =>
  typeof value === 'string' && value.trim() !== '' && value !== '#';

const DEFAULT_CTA_LABEL = 'View case study';

const buildItems = () => {
  const all = projectsContent.rows.length
    ? [projectsContent.featured, ...projectsContent.rows]
    : [projectsContent.featured];

  return all.map((project) => ({
    key: project.index,
    index: project.index,
    title: project.title,
    category: project.category,
    year: project.year || '',
    description: project.description || project.tagline || '',
    image: project.image || project.previewImage || '',
    alt: project.alt || `Preview of ${project.title}`,
    href: project.href || '',
    ctaLabel: project.ctaLabel || DEFAULT_CTA_LABEL,
    caseStudy: project.caseStudy || '',
    tags: project.tags || [],
    techStack: project.techStack
      ? Object.entries(project.techStack).filter(
          ([, value]) => Boolean(value) && !/^n\/?a$/i.test(String(value).trim())
        )
      : [],
  }));
};

const createReveal = (reduceMotion) => (delay = 0) => {
  if (reduceMotion) {
    return {};
  }

  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -20% 0px' },
    transition: {
      duration: motionTokens.duration.reveal,
      ease: motionTokens.easing.smoothOut,
      delay,
    },
  };
};

// Cover flow  the active row grows into a compact showcase inside the list.
// The wrapper animates height (420ms smoothOut); content fades in staggered,
// so the card feels like one object unfolding from the row. Transform + opacity + height only.
const createCoverVariants = (reduceMotion) =>
  reduceMotion
    ? {}
    : {
        initial: { height: 0 },
        animate: {
          height: 'auto',
          transition: {
            duration: motionTokens.duration.slow,
            ease: motionTokens.easing.smoothOut,
          },
        },
        exit: {
          height: 0,
          opacity: 0,
          transition: {
            duration: motionTokens.duration.slow,
            ease: motionTokens.easing.smoothOut,
          },
        },
      };

const createCoverItem = (reduceMotion) => (delay) =>
  reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: motionTokens.duration.fast,
          ease: motionTokens.easing.smoothOut,
          delay,
        },
      };

const renderCta = (item) => {
  const activeHref = hasRealUrl(item.href) ? item.href : null;
  const caseStudySlug =
    item.caseStudy && item.caseStudy.trim() !== '' ? item.caseStudy : null;

  if (activeHref) {
    return (
      <motion.a
        href={activeHref}
        target="_blank"
        rel="noreferrer"
        className={createClassName('button', 'button-primary', 'projects-cover-cta')}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.995 }}
        transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.gentle }}
      >
        {item.ctaLabel}
        <span aria-hidden="true" className="projects-cover-cta-arrow">
          →
        </span>
      </motion.a>
    );
  }

  if (caseStudySlug) {
    return (
      <Link
        to={`/projects/${caseStudySlug}`}
        className={createClassName('button', 'button-primary', 'projects-cover-cta')}
      >
        {item.ctaLabel}
        <span aria-hidden="true" className="projects-cover-cta-arrow">
          →
        </span>
      </Link>
    );
  }

  return (
    <div
      className={createClassName(
        'button',
        'button-primary',
        'projects-cover-cta',
        'projects-cover-cta-static'
      )}
    >
      {item.ctaLabel}
      <span aria-hidden="true" className="projects-cover-cta-arrow">
        →
      </span>
    </div>
  );
};

const renderCard = (item, coverItem) => {
  return (
    <div id={`projects-cover-${item.key}`} className="projects-cover-inner">
      <motion.div className="projects-cover-media" {...coverItem(0)}>
        {item.image ? (
          <img src={item.image} alt={item.alt} loading="lazy" />
        ) : (
          <div className="projects-cover-media-fallback" aria-hidden="true">
            <span className="projects-cover-fallback-index">{item.index}</span>
            <span className="projects-cover-fallback-caption">{item.category}</span>
          </div>
        )}
      </motion.div>

      <div className="projects-cover-body">
        <motion.p className="projects-cover-kicker" {...coverItem(0.06)}>
          {item.category}
          {item.year ? ` · ${item.year}` : ''}
        </motion.p>

        <motion.h2
          id={`projects-cover-title-${item.key}`}
          className="projects-cover-title"
          {...coverItem(0.12)}
        >
          {item.title}
        </motion.h2>

        <motion.p className="projects-cover-description" {...coverItem(0.18)}>
          {item.description}
        </motion.p>

        {item.tags.length > 0 ? (
          <motion.p className="projects-cover-stack" {...coverItem(0.24)}>
            {item.tags.join(' · ')}
          </motion.p>
        ) : null}

        <motion.div className="projects-cover-cta-wrap" {...coverItem(0.3)}>
          {renderCta(item)}
        </motion.div>
      </div>
    </div>
  );
};

const ProjectRow = memo(function ProjectRow({
  item,
  index,
  isActive,
  revealProps,
  coverVariants,
  coverItem,
  onActivate,
}) {
  const rowUrl = hasRealUrl(item.href) ? item.href : null;
  const activate = () => onActivate(index);
  const previewId = `projects-cover-${item.key}`;
  const rowClassName = createClassName('projects-row', isActive ? 'is-active' : '');

  const rowContent = (
    <>
      <span className="projects-row-index" aria-hidden="true">
        {item.index}
      </span>
      <span className="projects-row-title">{item.title}</span>
      <span className="projects-row-meta">{item.year}</span>
      <span className="projects-row-arrow" aria-hidden="true">
        →
      </span>
    </>
  );

  return (
    <motion.li {...revealProps}>
      {rowUrl ? (
        <a
          href={rowUrl}
          target="_blank"
          rel="noreferrer"
          className={rowClassName}
          onMouseEnter={activate}
          onFocus={activate}
          aria-current={isActive ? 'true' : undefined}
        >
          {rowContent}
        </a>
      ) : (
        <button
          type="button"
          className={rowClassName}
          onMouseEnter={activate}
          onFocus={activate}
          onClick={activate}
          aria-expanded={isActive}
          aria-controls={isActive ? previewId : undefined}
        >
          {rowContent}
        </button>
      )}

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            className="projects-cover"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={coverVariants}
          >
            {renderCard(item, coverItem)}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
});

const Projects = () => {
  const reduceMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(buildItems, []);
  const active = items[activeIndex] || items[0];

  const reveal = useMemo(() => createReveal(reduceMotion), [reduceMotion]);
  const coverVariants = useMemo(() => createCoverVariants(reduceMotion), [reduceMotion]);
  const coverItem = useMemo(() => createCoverItem(reduceMotion), [reduceMotion]);

  const revealPropsList = useMemo(
    () => items.map((_, index) => reveal(0.05 + index * 0.05)),
    [items, reveal]
  );

  const handleActivate = useCallback((index) => setActiveIndex(index), []);

  return (
    <section
      id="projects"
      className="projects-section"
      aria-label={active ? undefined : 'Projects'}
      aria-labelledby={active ? `projects-cover-title-${active.key}` : undefined}
    >
      <div className="projects-inner">
        <motion.div className="section-head" {...reveal()}>
          <p className="section-index">{projectsContent.index}</p>
          <span className="section-rule" aria-hidden="true" />
        </motion.div>

        <div className="projects-layout">
          <ol className="projects-ledger" role="list">
            {items.map((item, index) => (
              <ProjectRow
                key={item.key}
                item={item}
                index={index}
                isActive={activeIndex === index}
                revealProps={revealPropsList[index]}
                coverVariants={coverVariants}
                coverItem={coverItem}
                onActivate={handleActivate}
              />
            ))}
          </ol>
        </div>

        <motion.div className="section-exit" {...reveal(0.2)}>
          <p className="section-exit-label">{projectsContent.exit}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
