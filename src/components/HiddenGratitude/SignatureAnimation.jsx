import { motion } from 'framer-motion';
import { gratitudeContent } from './gratitudeContent';

const SignatureAnimation = ({ closing, reduceMotion }) => {
  const text = gratitudeContent.signature;

  if (reduceMotion) {
    return (
      <p className="gratitude-signature-text" aria-hidden="true">
        {text}
      </p>
    );
  }

  return (
    <svg
      className="gratitude-signature-svg"
      viewBox="0 0 200 60"
      aria-hidden="true"
    >
      <motion.text
        x="12"
        y="46"
        className="gratitude-signature-glyphs"
        initial={{ strokeDasharray: 1400, strokeDashoffset: 1400, fillOpacity: 0 }}
        animate={
          closing
            ? { strokeDashoffset: 1400, fillOpacity: 0 }
            : { strokeDashoffset: 0, fillOpacity: 1 }
        }
        transition={{
          strokeDashoffset: {
            duration: 3.2,
            ease: [0.65, 0, 0.35, 1],
            delay: closing ? 0 : 0.2,
          },
          fillOpacity: { duration: 0.6, ease: 'easeOut', delay: closing ? 0 : 2.6 },
        }}
      >
        {text}
      </motion.text>
    </svg>
  );
};

export default SignatureAnimation;
