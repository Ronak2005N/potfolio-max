import { Fragment, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { motionTokens } from '../utils/animations';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { aboutContent } from '../data/about';

const SELECT_IDLE = 5000;
const SELECT_SWEEP = 1500;
const SELECT_HOLD = 700;

const About = () => {
  const reduceMotion = usePrefersReducedMotion();
  const quoteRef = useRef(null);
  const quoteTextRef = useRef(null);
  const [selectionLines, setSelectionLines] = useState([]);
  const [selectionKeyframes, setSelectionKeyframes] = useState('');

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const quote = quoteRef.current;
    const quoteText = quoteTextRef.current;
    if (!quote || !quoteText) {
      return undefined;
    }

    const measure = () => {
      const range = document.createRange();
      range.selectNodeContents(quoteText);
      const rects = Array.from(range.getClientRects()).filter(
        (rect) => rect.width > 1 && rect.height > 1
      );
      if (rects.length === 0) {
        return;
      }

      const quoteRect = quote.getBoundingClientRect();
      const grouped = [];

      for (const rect of rects) {
        const top = rect.top - quoteRect.top;
        const left = rect.left - quoteRect.left;
        const last = grouped[grouped.length - 1];
        if (last && Math.abs(last.top - top) < 2) {
          last.width = Math.max(last.width, rect.right - quoteRect.left - last.left);
        } else {
          grouped.push({ top, left, width: rect.width, height: rect.height });
        }
      }

      setSelectionLines(grouped);

      const total = SELECT_IDLE + grouped.length * SELECT_SWEEP + SELECT_HOLD;
      const pct = (ms) => `${((ms / total) * 100).toFixed(4)}%`;
      let css = '';

      for (let i = 0; i < grouped.length; i += 1) {
        const start = SELECT_IDLE + i * SELECT_SWEEP;
        const end = start + SELECT_SWEEP;
        const isLast = i === grouped.length - 1;
        css += `@keyframes about-select-line-${i}{`;
        css += `0%,${pct(start)}{transform:scaleX(0)}`;
        css += `${pct(end)}{transform:scaleX(1)}`;
        if (isLast) {
          css += `${pct(total)}{transform:scaleX(1)}`;
        } else {
          css += `${pct(end + 1)}{transform:scaleX(0)}`;
        }
        css += '}';
      }

      setSelectionKeyframes(css);
    };

    measure();
    const fonts = document.fonts;
    if (fonts && fonts.ready) {
      fonts.ready.then(measure);
    }
    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('resize', measure);
    };
  }, [reduceMotion]);

  const totalMs = SELECT_IDLE + selectionLines.length * SELECT_SWEEP + SELECT_HOLD;

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
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-inner">
        <motion.div className="section-head" {...reveal()}>
          <p className="section-index" aria-hidden="true">
            {aboutContent.index}
          </p>
          <span className="section-rule" aria-hidden="true" />
        </motion.div>

        <div className="about-grid">
          <div className="about-narrative">
            <motion.h2 id="about-title" className="about-lead" {...reveal(0.05)}>
              {aboutContent.lead.before}
              <em className="about-accent">{aboutContent.lead.accent}</em>
              {aboutContent.lead.after}
            </motion.h2>

            {aboutContent.stanzas.map((stanza, index) => (
              <motion.p key={index} className="about-body" {...reveal(0.1 + index * 0.05)}>
                {stanza}
              </motion.p>
            ))}

            <motion.blockquote className="about-pull" {...reveal(0.2)}>
              <p ref={quoteRef} className="about-pull-quote">
                <span ref={quoteTextRef} className="about-pull-quote-text">
                  {aboutContent.pullQuote.map((line, index) => (
                    <Fragment key={line}>
                      {index > 0 ? <br /> : null}
                      {line}
                    </Fragment>
                  ))}
                </span>
                {selectionLines.length > 0 && (
                  <span className="about-select-lines" aria-hidden="true">
                    {selectionLines.map((line, index) => (
                      <span
                        key={`${line.top}-${index}`}
                        className="about-select-line"
                        style={{
                          top: `${line.top}px`,
                          left: `${line.left}px`,
                          width: `${line.width}px`,
                          height: `${line.height}px`,
                          animationName: `about-select-line-${index}`,
                          animationDuration: `${totalMs}ms`,
                        }}
                      />
                    ))}
                  </span>
                )}
              </p>
              {selectionKeyframes ? <style>{selectionKeyframes}</style> : null}
            </motion.blockquote>
          </div>

          <motion.aside className="about-meta" {...reveal(0.15)}>
            <div className="about-card" aria-hidden="true">
              <span className="about-monogram">{aboutContent.monogram}</span>
              <span className="about-card-caption">{aboutContent.monogramCaption}</span>
            </div>

            <dl className="about-facts">
              {aboutContent.facts.map((fact) => (
                <div key={fact.label} className="about-fact">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>

        <motion.div className="section-exit" {...reveal(0.25)}>
          <p className="section-exit-label">{aboutContent.exit}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
