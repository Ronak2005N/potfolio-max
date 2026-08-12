import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import ResumeDialogProvider from './components/ResumeDialog/ResumeDialog';
import { createClassName, getMainA11yLabel, getShellMinHeight } from './utils/helpers';
import useLenis from './hooks/useLenis';

const HiddenTrigger = lazy(() => import('./components/HiddenGratitude/HiddenTrigger'));

const appShellStyles = {
  minHeight: getShellMinHeight(),
  width: '100%',
};

function Home() {
  const { scrollTo } = useLenis();

  useEffect(() => {
    if (typeof scrollTo === 'function') {
      scrollTo('#home');
    }
  }, [scrollTo]);

  const handleNavigate = (href) => {
    if (typeof scrollTo === 'function') {
      scrollTo(href);
    }
  };

  return (
    <div className="app-shell" style={appShellStyles}>
      <Navbar onNavigate={handleNavigate} />
      <main
        id="main-content"
        className={createClassName('container-content', 'app-main')}
        aria-label={getMainA11yLabel()}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
      <Suspense fallback={null}>
        <HiddenTrigger />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LazyMotion features={domAnimation} strict>
        <ResumeDialogProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </ResumeDialogProvider>
      </LazyMotion>
    </BrowserRouter>
  );
}

export default App;
