import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { motionTokens } from '../../utils/animations';
import { gratitudeContent } from './gratitudeContent';
import InkUnderline from './InkUnderline';
import SignatureAnimation from './SignatureAnimation';

const STAGGER_CHILDREN = 0.09;
const FRIENDS_START_INDEX = 6;

const containerVariants = {
  hidden: { transition: { staggerChildren: 0.045, staggerDirection: -1 } },
  visible: {
    transition: { staggerChildren: STAGGER_CHILDREN, delayChildren: 0.5 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: motionTokens.easing.smoothOut } },
};

const getFriendDelay = (index) =>
  0.5 + (FRIENDS_START_INDEX + index) * STAGGER_CHILDREN;

const GratitudeCard = ({ closing, reduceMotion }) => {
  const [showSignature, setShowSignature] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion || closing) {
      return undefined;
    }

    const timer = window.setTimeout(() => setShowSignature(true), 5000);

    return () => window.clearTimeout(timer);
  }, [reduceMotion, closing]);

  const contentMotion = reduceMotion
    ? {}
    : {
        variants: containerVariants,
        initial: 'hidden',
        animate: closing ? 'hidden' : 'visible',
      };

  const lineProps = reduceMotion ? {} : { variants: lineVariants };

  return (
    <div className="gratitude-card-inner">
      <motion.div className="gratitude-card-content" {...contentMotion}>
        <motion.p className="gratitude-overline" {...lineProps}>
          {gratitudeContent.overline}
        </motion.p>

        <motion.h2 className="gratitude-heading" {...lineProps}>
          {gratitudeContent.heading}
        </motion.h2>

        {gratitudeContent.body.map((paragraph) => (
          <motion.p key={paragraph} className="gratitude-body" {...lineProps}>
            {paragraph}
          </motion.p>
        ))}

        <motion.p className="gratitude-friends-label" {...lineProps}>
          {gratitudeContent.friendsLabel}
        </motion.p>

        <ul className="gratitude-friends-list">
          {gratitudeContent.friends.map((name, index) => (
            <motion.li
              key={name}
              className="gratitude-friend"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={closing ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: closing ? 0 : getFriendDelay(index),
                ease: motionTokens.easing.smoothOut,
              }}
            >
              <span className="gratitude-name">{name}</span>
              <InkUnderline
                index={index}
                closing={closing}
                delay={getFriendDelay(index) + 0.2}
              />
            </motion.li>
          ))}
        </ul>

        <motion.p className="gratitude-note" {...lineProps}>
          {gratitudeContent.note}
        </motion.p>

        <motion.p className="gratitude-closing" {...lineProps}>
          {gratitudeContent.closing}
        </motion.p>
      </motion.div>

      {showSignature ? (
        <motion.div
          className="gratitude-signature"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={closing ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: motionTokens.easing.smoothOut }}
        >
          <SignatureAnimation closing={closing} reduceMotion={reduceMotion} />
        </motion.div>
      ) : null}
    </div>
  );
};

export default GratitudeCard;
