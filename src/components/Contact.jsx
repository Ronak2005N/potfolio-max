import { motion } from 'framer-motion';
import { motionTokens } from '../utils/animations';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { contactContent } from '../data/contact';

const contact = contactContent;

const Contact = () => {
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

  const channels = contact.channels.filter(
    (channel) => Boolean(channel.value) || Boolean(channel.href)
  );

  const status = contact.status ? contact.status.trim() : '';
  const ctaHref = contact.ctaHref || '';

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-inner">
        <motion.div className="section-head" {...reveal()}>
          <p className="section-index">{contact.index}</p>
          <span className="section-rule" aria-hidden="true" />
        </motion.div>

        <motion.h2 id="contact-title" className="contact-headline" {...reveal(0.05)}>
          {contact.headline.before}
          <em className="contact-accent">{contact.headline.accent}</em>
          {contact.headline.after}
        </motion.h2>

        {ctaHref ? (
          <motion.div className="contact-cta-wrap" {...reveal(0.1)}>
            <motion.a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="contact-cta"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.995 }}
              transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.gentle }}
            >
              {contact.ctaLabel}
              <span aria-hidden="true" className="contact-cta-arrow">
                →
              </span>
            </motion.a>
          </motion.div>
        ) : null}

        {channels.length > 0 ? (
          <motion.dl className="contact-ledger" {...reveal(0.15)}>
            {channels.map((channel) => {
              const isMailto = channel.type === 'mailto';
              const href = isMailto ? `mailto:${channel.value}` : channel.href;

              return (
                <div key={channel.label} className="contact-row">
                  <dt className="contact-row-label">{channel.label}</dt>
                  <dd className="contact-row-value">
                    <a
                      href={href}
                      target={isMailto ? undefined : '_blank'}
                      rel={isMailto ? undefined : 'noreferrer'}
                    >
                      {channel.value || channel.href}
                    </a>
                  </dd>
                </div>
              );
            })}
          </motion.dl>
        ) : null}

        {status ? (
          <motion.p className="contact-status" {...reveal(0.2)}>
            {status}
          </motion.p>
        ) : null}

        <motion.div className="section-exit" {...reveal(0.25)}>
          <p className="section-exit-label">{contact.close}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;