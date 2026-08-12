import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCaseStudyBySlug, caseStudyNotFound } from '../data/caseStudies';
import useLenis from '../hooks/useLenis';
import { useResumeDialog } from '../components/ResumeDialog/useResumeDialog';
import CaseStudyHero from '../components/CaseStudy/CaseStudyHero';
import CaseStudyIntro from '../components/CaseStudy/CaseStudyIntro';
import CaseStudyProblem from '../components/CaseStudy/CaseStudyProblem';
import CaseStudySolution from '../components/CaseStudy/CaseStudySolution';
import CaseStudyArchitecture from '../components/CaseStudy/CaseStudyArchitecture';
import CaseStudyFeatures from '../components/CaseStudy/CaseStudyFeatures';
import CaseStudyGallery from '../components/CaseStudy/CaseStudyGallery';
import CaseStudyJourney from '../components/CaseStudy/CaseStudyJourney';
import CaseStudyTechnical from '../components/CaseStudy/CaseStudyTechnical';
import CaseStudyChallenges from '../components/CaseStudy/CaseStudyChallenges';
import CaseStudyResults from '../components/CaseStudy/CaseStudyResults';
import CaseStudyLessons from '../components/CaseStudy/CaseStudyLessons';
import CaseStudyNavigation from '../components/CaseStudy/CaseStudyNavigation';

const CaseStudyNotFound = ({ slug }) => (
  <div className="case-notfound">
    <header className="case-navbar-shell">
      <nav aria-label={caseStudyNotFound.navLabel} className="case-navbar">
        <Link to="/" className="case-navbar-wordmark" aria-label={caseStudyNotFound.homeLabel}>
          {caseStudyNotFound.wordmark}
        </Link>
        <Link to="/" className="case-navbar-back">
          <span aria-hidden="true">←</span>
          {caseStudyNotFound.actionLabel}
        </Link>
        <span className="case-navbar-resume" aria-hidden="true" />
      </nav>
    </header>

    <p className="case-notfound-index">{caseStudyNotFound.index}</p>
    <h1 className="case-notfound-title">{caseStudyNotFound.title}</h1>
    <p className="case-notfound-body">
      {caseStudyNotFound.body} {slug ? `“${slug}”` : ''}
    </p>
    <Link to="/" className="button button-primary">
      <span aria-hidden="true">←</span>
      {caseStudyNotFound.actionLabel}
    </Link>
  </div>
);

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const { scrollTo } = useLenis();
  const { openResumeDialog } = useResumeDialog();
  const caseStudy = getCaseStudyBySlug(slug);

  useEffect(() => {
    if (typeof scrollTo === 'function') {
      scrollTo('#case-top');
    }
  }, [scrollTo, slug]);

  if (!caseStudy) {
    return <CaseStudyNotFound slug={slug} />;
  }

  const { meta } = caseStudy;

  return (
    <div className="case-page">
      <header className="case-navbar-shell">
        <nav aria-label={meta.navLabel} className="case-navbar">
          <Link to="/" className="case-navbar-wordmark" aria-label={meta.homeLabel}>
            {meta.wordmark}
          </Link>
          <Link to="/" className="case-navbar-back">
            <span aria-hidden="true">←</span>
            {meta.backLabel}
          </Link>
          <button
            type="button"
            onClick={openResumeDialog}
            aria-label="Open résumé options"
            className="case-navbar-resume"
          >
            {meta.resumeLabel}
          </button>
        </nav>
      </header>

      <main id="case-main" className="case-main" aria-label={meta.mainLabel}>
        <CaseStudyHero content={caseStudy.hero} />
        {caseStudy.overview ? (
          <CaseStudyIntro content={caseStudy.overview} />
        ) : null}
        {caseStudy.problem ? (
          <CaseStudyProblem content={caseStudy.problem} />
        ) : null}
        {caseStudy.solution ? (
          <CaseStudySolution content={caseStudy.solution} />
        ) : null}
        {caseStudy.architecture ? (
          <CaseStudyArchitecture content={caseStudy.architecture} />
        ) : null}
        {caseStudy.features ? (
          <CaseStudyFeatures content={caseStudy.features} />
        ) : null}
        {caseStudy.gallery ? (
          <CaseStudyGallery content={caseStudy.gallery} />
        ) : null}
        {caseStudy.journey ? (
          <CaseStudyJourney content={caseStudy.journey} />
        ) : null}
        {caseStudy.technical ? (
          <CaseStudyTechnical content={caseStudy.technical} />
        ) : null}
        {caseStudy.challenges ? (
          <CaseStudyChallenges content={caseStudy.challenges} />
        ) : null}
        {caseStudy.results ? (
          <CaseStudyResults content={caseStudy.results} />
        ) : null}
        {caseStudy.lessons ? (
          <CaseStudyLessons content={caseStudy.lessons} />
        ) : null}
      </main>

      <CaseStudyNavigation content={caseStudy.next} />
    </div>
  );
};

export default ProjectCaseStudy;
