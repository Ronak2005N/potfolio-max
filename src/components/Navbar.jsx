import { useCallback, useLayoutEffect, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { motionTokens, staggerTokens } from '../utils/animations';
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

function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].href);
  const desktopListRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const reduceMotion = usePrefersReducedMotion();
  const { openResumeDialog } = useResumeDialog();

  const menuListVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: {}, visible: {} }
        : {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: staggerTokens.children,
                delayChildren: staggerTokens.delay,
              },
            },
          },
    [reduceMotion]
  );

  const menuItemVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: {}, visible: {} }
        : { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } },
    [reduceMotion]
  );

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
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const navClassName = useMemo(
    () => `navbar ${isScrolled ? 'navbar-scrolled' : ''}`.trim(),
    [isScrolled]
  );

  const handleNavClick = (href) => {
    if (typeof onNavigate === 'function') {
      onNavigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
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
                  >
                    {item.label}
                  </motion.a>
                </li>
              );
            })}
          </motion.ul>

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

            <button
              type="button"
              className="navbar-menu-button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((previous) => !previous)}
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.standard }}
                className="navbar-menu-line"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: motionTokens.duration.instant, ease: motionTokens.easing.standard }}
                className="navbar-menu-line"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.standard }}
                className="navbar-menu-line"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : motionTokens.duration.base,
              ease: motionTokens.easing.gentle,
            }}
            className="navbar-mobile-overlay"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setIsMenuOpen(false);
              }
            }}
          >
<motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuListVariants}
              className="navbar-mobile-list"
            >
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={`mobile-${item.href}`}
                  variants={menuItemVariants}
                  transition={{ duration: motionTokens.duration.base, ease: motionTokens.easing.smoothOut }}
                >
                  <motion.a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`navbar-mobile-link${activeSection === item.href ? ' is-active' : ''}`}
                    whileHover={{ y: -1 }}
                    transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.gentle }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
              <motion.li
                variants={menuItemVariants}
                transition={{ duration: motionTokens.duration.base, ease: motionTokens.easing.smoothOut }}
                style={{ marginTop: 'var(--space-4)' }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    openResumeDialog();
                  }}
                  className="navbar-mobile-resume"
                  aria-label="Open résumé options"
                >
                  Resume
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
