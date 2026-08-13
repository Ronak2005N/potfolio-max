import { useCallback, useLayoutEffect, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { motionTokens } from '../utils/animations';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { useResumeDialog } from './ResumeDialog/useResumeDialog';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const SCROLL_THRESHOLD = 12;

const TITLE_TRANSITION = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1],
};

const TITLE_Y = 6;

function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].href);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const desktopListRef = useRef(null);
  const contextRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const reduceMotion = usePrefersReducedMotion();
  const { openResumeDialog } = useResumeDialog();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const updateActiveSection = useCallback(() => {
    const probe = window.innerHeight * 0.4;
    let current = NAV_ITEMS[0].href;

    for (const item of NAV_ITEMS) {
      const element = document.querySelector(item.href);
      if (!element) {
        continue;
      }
      if (element.getBoundingClientRect().top <= probe) {
        current = item.href;
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [updateActiveSection]);

  useLayoutEffect(() => {
    const list = desktopListRef.current;
    if (!list) {
      return;
    }

    const items = list.querySelectorAll('[data-nav-href]');
    let left = 0;
    let width = 0;

    for (const item of items) {
      if (item.getAttribute('data-nav-href') === activeSection) {
        left = item.offsetLeft;
        width = item.offsetWidth;
        break;
      }
    }

    setIndicator({ left, width });
  }, [activeSection, isScrolled]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const onPointerDown = (event) => {
      if (contextRef.current && !contextRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isMobileMenuOpen]);

  const navClassName = useMemo(
    () => `navbar ${isScrolled ? 'navbar-scrolled' : ''}`.trim(),
    [isScrolled]
  );

  const activeLabel = useMemo(
    () => NAV_ITEMS.find((item) => item.href === activeSection)?.label ?? NAV_ITEMS[0].label,
    [activeSection]
  );

  const handleNavClick = (href) => {
    if (typeof onNavigate === 'function') {
      onNavigate(href);
    }

    setIsMobileMenuOpen(false);
  };

  const titleTransition = reduceMotion
    ? { duration: 0 }
    : TITLE_TRANSITION;

  return (
    <motion.header
      className="navbar-shell"
      initial={reduceMotion ? false : { opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 2 }}
      transition={{
        duration: motionTokens.duration.reveal,
        ease: motionTokens.easing.smoothOut,
      }}
    >
      <nav aria-label="Primary" className={navClassName}>
        <motion.a
          href="#home"
          onClick={() => handleNavClick('#home')}
          aria-label="Go to home section"
          whileHover={{ y: -1, opacity: 0.86 }}
          transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.gentle }}
          className="navbar-wordmark"
        >
          RK.
        </motion.a>

        <motion.ul ref={desktopListRef} className="navbar-desktop-links" role="list">
          <motion.span
            aria-hidden="true"
            className="navbar-link-indicator"
            initial={false}
            animate={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.width > 0 ? 1 : 0,
            }}
            transition={{
              type: 'tween',
              duration: reduceMotion ? 0 : motionTokens.duration.base,
              ease: motionTokens.easing.smoothOut,
            }}
          />
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  data-nav-href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ y: -1 }}
                  transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.gentle }}
                  className={`navbar-link${isActive ? ' is-active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </motion.a>
              </li>
            );
          })}
        </motion.ul>

        <div ref={contextRef} className="navbar-mobile-context">
          <button
            type="button"
            className="navbar-mobile-context-button"
            aria-haspopup="menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-section-menu"
            aria-label={`Current section ${activeLabel}. Choose a section.`}
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          >
            <span className="navbar-mobile-context-label">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={activeLabel}
                  className="navbar-mobile-context-title"
                  initial={{ opacity: 0, y: TITLE_Y }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -TITLE_Y }}
                  transition={titleTransition}
                >
                  {activeLabel}
                </motion.span>
              </AnimatePresence>
            </span>
            <motion.svg
              className="navbar-mobile-context-caret"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              aria-hidden="true"
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: reduceMotion ? 0 : motionTokens.duration.base }}
            >
              <path
                d="M2 4.5 6 8.5 10 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </button>

          <AnimatePresence>
            {isMobileMenuOpen ? (
              <motion.div
                id="mobile-section-menu"
                role="menu"
                className="navbar-mobile-context-menu"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={titleTransition}
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <button
                      key={item.href}
                      type="button"
                      role="menuitem"
                      className={`navbar-mobile-context-item${isActive ? ' is-active' : ''}`}
                      aria-current={isActive ? 'true' : undefined}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="navbar-actions">
          <motion.button
            type="button"
            onClick={openResumeDialog}
            aria-label="Open résumé options"
            className="navbar-resume"
            whileHover={{ y: -1 }}
            transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.gentle }}
          >
            Resume
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;