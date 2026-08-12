import { useEffect, useState } from 'react';

const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';

const getQuery = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.matchMedia(REDUCED_QUERY);
};

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(() => {
    const query = getQuery();
    return Boolean(query && query.matches);
  });

  useEffect(() => {
    const query = getQuery();
    if (!query) {
      return undefined;
    }

    const onChange = (event) => setReduced(event.matches);

    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', onChange);
    } else {
      query.addListener(onChange);
    }

    return () => {
      if (typeof query.removeEventListener === 'function') {
        query.removeEventListener('change', onChange);
      } else {
        query.removeListener(onChange);
      }
    };
  }, []);

  return reduced;
};

export default usePrefersReducedMotion;