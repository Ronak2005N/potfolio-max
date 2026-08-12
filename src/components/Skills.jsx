import { motion } from 'framer-motion';
import { motionTokens } from '../utils/animations';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { skillsContent } from '../data/skills';

const Skills = () => {
  const reduceMotion = usePrefersReducedMotion();

  const reveal = (delay = 0) => {
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

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-inner">
        <motion.div className="section-head" {...reveal()}>
          <p className="section-index">{skillsContent.index}</p>
          <span className="section-rule" aria-hidden="true" />
        </motion.div>

        <motion.h2 id="skills-title" className="skills-statement" {...reveal(0.05)}>
          {skillsContent.statement}
        </motion.h2>

        <div className="skills-grid">
          {skillsContent.groups.map((group, groupIndex) => (
            <motion.article
              key={group.name}
              className="skills-group"
              {...reveal(0.1 + groupIndex * 0.05)}
            >
              <h3 className="skills-group-title">{group.name}</h3>
              <span className="skills-hairline" aria-hidden="true" />
              <ul className="skills-list" role="list">
                {group.technologies.map((technology) => (
                  <li key={technology} className="skills-item">
                    {technology}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div className="section-exit" {...reveal(0.2)}>
          <p className="section-exit-label">{skillsContent.exit}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;