export const caseStudyNotFound = {
  index: '404',
  title: 'Case study not found',
  body: 'This case study has not been published yet.',
  actionLabel: 'All projects',
  wordmark: 'RK.',
  navLabel: 'Case study navigation',
  homeLabel: 'Go to home',
};

export const caseStudies = [
  {
    slug: 'ai-mock-interview',
    meta: {
      index: 'Case Study 01',
      title: 'AI Mock Interview Evaluation Platform',
      category: 'AI / Full Stack',
      year: 2025,
      duration: '2 Months',
      teamSize: 'Solo',
      status: 'Completed',
      tagline:
        'AI-powered platform for generating interview questions, evaluating answers, and providing feedback reports.',
      wordmark: 'RK.',
      backLabel: 'All projects',
      resumeLabel: 'Resume',
      navLabel: 'Case study navigation',
      mainLabel: 'Project case study',
      homeLabel: 'Go to home',
    },
    hero: {
      label: 'Case study introduction',
      kicker: 'Case Study 01 · AI / Full Stack',
      title: 'AI Mock Interview Evaluation Platform',
      statement:
        'An AI-powered platform that generates interview questions on demand, evaluates every answer, and delivers a feedback report  realistic practice with feedback that actually helps.',
      visual: {
        index: '01',
        caption: 'Platform overview',
        image: '/CaseStudyImages/1.0.png',
        alt: 'Platform overview  AI Mock Interview Evaluation Platform',
      },
      github: {
        href: 'https://github.com/Ronak2005N/AI-Based-Resume-Analyzer',
        label: 'View source code on GitHub',
        text: 'View Source',
        icon: '/Images/git.png',
        arrow: '↗',
      },
    },
    overview: {
      index: '02',
      heading: 'Overview',
      intro:
        'The AI Mock Interview Evaluation Platform is a full-stack web application that turns interview preparation into a measurable practice loop. It generates role-specific questions, accepts answers in text, evaluates them with AI, and ends every session with an automated scorecard that names strengths and pinpoints areas for improvement.',
      items: [
        {
          label: 'What it is',
          value:
            'A web platform that generates interview questions, evaluates written answers with AI, and produces a feedback report for every attempt.',
        },
        {
          label: 'Who it helps',
          value:
            'Students and job seekers who need affordable, realistic interview practice with constructive, personalized feedback.',
        },
        {
          label: 'Why it exists',
          value:
            'Paid mock interviews are scarce and expensive; most practice happens alone  with no evaluation, no scoring, and no way to track progress.',
        },
      ],
    },
    problem: {
      index: '03',
      heading: 'Problem',
      intro:
        'Most interview preparation follows the same pattern: question lists, answers spoken to an empty room, and a hope that it will be enough. The pieces that actually build readiness  realistic questioning, honest evaluation, and repeatable practice  are exactly the pieces that are missing.',
      pains: [
        {
          title: 'Manual interviews',
          description:
            'Real mock interviews are hard to arrange and costly to repeat. Candidates get one or two practice runs before the actual thing.',
        },
        {
          title: 'Poor feedback',
          description:
            'Even when feedback exists, it is vague  a general sense of how it went, rarely tied to the specific answer that was given.',
        },
        {
          title: 'No evaluation',
          description:
            'There is no score, no benchmark, and no way to know whether practice is actually working between sessions.',
        },
        {
          title: 'Lack of practice',
          description:
            'Without a cheap, repeatable loop, candidates enter interviews under-practiced and over-anxious.',
        },
      ],
      closing:
        'Interview preparation was stuck in a loop of lists and guesswork  candidates needed practice that felt real and gave them something to act on.',
    },
    solution: {
      index: '04',
      heading: 'Solution',
      paragraphs: [
        'The platform closes the loop between answering and learning. Every session is driven by AI: questions are generated for the role you choose, answers are evaluated against the same standard every time, and a scorecard lands the moment the session ends.',
        'It makes high-quality practice affordable and repeatable. Question generation, answer evaluation, feedback, and progress tracking live in one product  the parts of interview prep that usually require a person to provide.',
      ],
      pillars: [
        {
          title: 'Dynamic question generation',
          description:
            'Role-specific questions generated on demand, so no two practice sessions feel the same.',
        },
        {
          title: 'Consistent evaluation',
          description:
            'Every answer is judged by the same AI-driven standard, with a clear scorecard at the end.',
        },
        {
          title: 'Feedback that explains',
          description:
            'Strengths and areas for improvement are named explicitly  not summarized in one line.',
        },
      ],
    },
    architecture: {
      index: '05',
      heading: 'Architecture',
      intro:
        'One continuous flow from practice to report. Each layer owns a single step of the loop, so the platform stays simple to reason about and simple to extend.',
      stages: [
        {
          label: 'User',
          description:
            'A candidate opens the platform, picks a role and tech stack, and starts a practice session.',
        },
        {
          label: 'Frontend',
          description:
            'The interactive views  Setup, Interview, Evaluation, and Dashboard  built with JavaScript, HTML, and CSS, talking to the backend over REST APIs.',
        },
        {
          label: 'Backend',
          description:
            'Node.js orchestrates the session flow, answer processing, and feedback storage, with Python alongside for processing work.',
        },
        {
          label: 'Gemini API',
          description:
            'The AI layer generates questions and evaluates answers on demand, steered by structured prompts and strict system instructions.',
        },
        {
          label: 'Evaluation Engine',
          description:
            "Turns the model's raw response into a consistent evaluation  validating and normalizing the JSON the LLM returns.",
        },
        {
          label: 'Feedback Generator',
          description:
            'Builds the personalized scorecard  strengths, areas for improvement, and the session record for the dashboard.',
        },
        {
          label: 'Results',
          description:
            'The candidate receives the scorecard and a stored history of every attempt, so progress becomes visible over time.',
        },
      ],
    },
    features: {
      index: '06',
      heading: 'Core Features',
      intro:
        'Six capabilities, each mapped to one step of the practice loop. Everything a candidate needs  and nothing that gets in the way.',
      placeholder: 'Screenshot placeholder',
      items: [
        {
          id: 'question-generation',
          index: '01',
          heading: 'AI Question Generation',
          description:
            'Questions are generated dynamically based on the selected role and tech stack, keeping every practice session relevant  and never repetitive.',
          techNote: 'Dynamic Generation · Role and Tech Stack Aware',
          image: '/CaseStudyImages/1.1.png',
        },
        {
          id: 'answer-evaluation',
          index: '02',
          heading: 'AI-Driven Answer Evaluation',
          description:
            'Every submitted answer is evaluated by AI against a consistent standard, producing a score and observations per response.',
          techNote: 'Async API Calls · Structured JSON Responses',
          image: '/CaseStudyImages/1.2.png',
        },
        {
          id: 'feedback-generation',
          index: '03',
          heading: 'Personalized Feedback Generation',
          description:
            'Each session ends with a scorecard that names strengths and pinpoints areas for improvement  feedback specific to the answer given.',
          techNote: 'Strict System Instructions · Anti-Hallucination Refinement',
          image: '/CaseStudyImages/1.3.png',
        },
        {
          id: 'performance-dashboard',
          index: '04',
          heading: 'User Performance Dashboard',
          description:
            'Performance is tracked across sessions and rendered in a dashboard, turning isolated attempts into a visible trend.',
          techNote: 'Analytics and Scoring · Session Data',
          image: '/CaseStudyImages/1.4.png',
        },
        {
          id: 'historical-tracking',
          index: '05',
          heading: 'Historical Interview Tracking',
          description:
            'Past sessions are stored and reviewable, so practice history becomes a study tool instead of a forgotten record.',
          techNote: 'Local / document database',
          image: '/CaseStudyImages/1.5.png',
        },
        {
          id: 'pdf-scorecard',
          index: '06',
          heading: 'PDF Scorecard Export',
          description:
            'Every evaluation exports as a PDF scorecard, ready for offline review or sharing with a mentor.',
          techNote: 'Export Format · PDF Scorecard',
          image: '/CaseStudyImages/1.6.png',
        },
      ],
    },
    journey: {
      index: '08',
      heading: 'Development Journey',
      intro:
        'Two months from first sketch to working platform. Each phase tightened one part of the loop  the UI, the backend, and the AI behavior.',
      phases: [
        {
          phase: '01',
          title: 'Planning',
          description:
            'Scoped the platform around one loop: generate a question, answer it, get evaluated. Defined the four modules  Setup, Interview, Evaluation, Dashboard  and the candidate and admin roles.',
        },
        {
          phase: '02',
          title: 'Research',
          description:
            'Studied how AI APIs generate and structure responses, and researched prompt design and the practical realities of handling LLM output.',
        },
        {
          phase: '03',
          title: 'UI',
          description:
            'Built the interactive interview workflow and designed the evaluation scorecard interface, keeping the whole flow responsive and focused.',
        },
        {
          phase: '04',
          title: 'Backend',
          description:
            'Developed the Node.js logic to process answers and store feedback, exposing the API surface the frontend depends on.',
        },
        {
          phase: '05',
          title: 'Gemini Integration',
          description:
            'Connected the AI layer: question generation, answer evaluation, and feedback generation driven through structured prompts and async API calls.',
        },
        {
          phase: '06',
          title: 'Testing',
          description:
            'Ran the loop end to end across roles, refining prompts until evaluations stayed consistent and fair.',
        },
        {
          phase: '07',
          title: 'Deployment',
          description:
            'Polished the full flow  setup to scorecard  and prepared the platform for rollout and real use.',
        },
        {
          phase: '08',
          title: 'Lessons',
          description:
            'Prompt engineering, async integration, full-stack workflow management, and LLM JSON handling became working skills rather than theory.',
        },
      ],
    },
    technical: {
      index: '09',
      heading: 'Technical Deep Dive',
      intro:
        'The engineering behind the loop  how the views, the backend, and the AI layer fit together, and the decisions that kept the platform fast and honest.',
      stack: [
        { label: 'Frontend', value: 'JavaScript · HTML · CSS' },
        { label: 'Backend', value: 'Node.js · Express · Python' },
        { label: 'AI', value: 'Gemini API · OpenAI-compatible APIs' },
        { label: 'Data', value: 'Local / document database' },
        { label: 'Transport', value: 'REST APIs' },
      ],
      topics: [
        {
          heading: 'Frontend Architecture',
          points: [
            'Four views  Setup, Interview, Evaluation, and Dashboard  each owning one step of the interview loop.',
            'Built with JavaScript, HTML, and CSS; the scorecard UI designed around a clear visual hierarchy of strengths and gaps.',
            'Kept responsive so practice works on whatever device the candidate is on.',
          ],
        },
        {
          heading: 'Component Design',
          points: [
            'Reusable UI pieces  question cards, answer inputs, score sections, dashboard rows  keep the four views consistent.',
            'The evaluation screen separates the question, the answer, and the score so feedback reads in one pass.',
          ],
        },
        {
          heading: 'Backend Flow',
          points: [
            'Node.js handles the session API: starting a practice, submitting an answer, storing feedback, and returning evaluations.',
            'Python joins the pipeline for processing work, keeping each layer’s responsibility clear.',
          ],
        },
        {
          heading: 'Gemini Integration',
          points: [
            'The AI layer generates role-specific questions and evaluates submitted answers through structured requests.',
            'Strict system instructions accompany every call to keep evaluations consistent and grounded.',
          ],
        },
        {
          heading: 'Prompt Engineering',
          points: [
            'Prompts are structured to produce parseable output  consistent question formats, consistent evaluation criteria.',
            'Iterative refinement focused on fairness: the same answer should earn the same evaluation every time.',
          ],
        },
        {
          heading: 'API Calls',
          points: [
            'The frontend communicates with the backend over REST; AI calls run asynchronously so the interface never blocks mid-interview.',
          ],
        },
        {
          heading: 'State Management',
          points: [
            'Session state  role, current question, submitted answer, evaluation  is coordinated across views and the backend so the loop stays consistent.',
          ],
        },
        {
          heading: 'Error Handling',
          points: [
            'Async failures and malformed AI responses are caught and surfaced, so a failed evaluation never strands the user mid-session.',
          ],
        },
        {
          heading: 'Performance',
          points: [
            'Evaluation runs off the main flow; the dashboard renders from stored session data instead of recomputing history.',
          ],
        },
        {
          heading: 'Security',
          points: [
            'Candidate and admin roles keep access separated within the platform.',
            'AI credentials live behind the backend, so they never reach client-side code.',
          ],
        },
      ],
    },
    challenges: {
      index: '10',
      heading: 'Challenges',
      intro:
        'The real engineering work happened where the AI met the product  keeping the model consistent, parseable, and fast enough to feel like a conversation.',
      resolutionLabel: 'Resolution',
      items: [
        {
          title: 'Prompt consistency',
          problem:
            'The AI had to judge every answer against the same standard  the same answer should never earn different feedback on different days.',
          resolution:
            'System instructions were tightened and prompts refined until evaluations remained consistent across roles and attempts.',
        },
        {
          title: 'Response parsing',
          problem:
            'Raw AI output is not structured data  evaluations arrive as prose that needs to become a scorecard.',
          resolution:
            'The backend validates and normalizes every response before it reaches the evaluation logic.',
        },
        {
          title: 'JSON formatting',
          problem:
            'LLM responses occasionally arrive with malformed or unexpected JSON, which would break the scorecard build.',
          resolution:
            'Learned to handle LLM JSON structures defensively  validating, cleaning, and falling back instead of crashing.',
        },
        {
          title: 'Latency',
          problem:
            'AI evaluation takes time, and the interview flow cannot afford to freeze while it completes.',
          resolution:
            'Async request handling keeps the interface responsive while the evaluation finishes in the background.',
        },
        {
          title: 'Prompt tuning',
          problem:
            'Getting the model to name genuine strengths and gaps without inventing either.',
          resolution:
            'Iterative refinement of prompts, with strict instructions sent on every request to keep output grounded.',
        },
        {
          title: 'Edge cases',
          problem:
            'Empty answers, repeated questions, and unexpected input had to fail gracefully  not mid-session.',
          resolution:
            'Validation on both sides: the frontend guides the user, the backend guards the pipeline.',
        },
      ],
    },
    results: {
      index: '11',
      heading: 'Results',
      intro:
        'The platform delivered the loop it set out to build  a complete AI-powered practice system, from question generation to PDF scorecard.',
      metrics: [
        { value: '4', label: 'Core modules' },
        { value: '2', label: 'Interview modes' },
        { value: '2', label: 'User roles' },
        { value: 'PDF', label: 'Scorecard export' },
      ],
      achievementsHeading: 'Achievements',
      achievements: [
        'AI-powered question generation and evaluation, end to end.',
        'Real-time feedback  every session ends with an evaluation, not a guess.',
        'A responsive interface across the full interview flow.',
        'Analytics and scoring built into the performance dashboard.',
      ],
      futureHeading: 'Future improvements',
      futureImprovements: [
        'Add Speech-to-Text for verbal mock interviews.',
        'Include video recording for body language analysis.',
        'Implement a global leaderboard or peer review system.',
      ],
    },
    lessons: {
      index: '12',
      heading: 'Lessons Learned',
      intro:
        'What two months of building this platform changed  about engineering, about products, and about working with AI.',
      items: [
        {
          title: 'Engineering growth',
          description:
            'Shipped a complete product loop on my own  interface, API integration, backend logic, and scorecard design  turning full-stack workflow management from theory into practice.',
        },
        {
          title: 'Product thinking',
          description:
            'Scoping the platform into four modules  Setup, Interview, Evaluation, Dashboard  kept every screen focused on one step of the practice loop.',
        },
        {
          title: 'AI development experience',
          description:
            'Prompt engineering and async API integration taught me how LLMs actually behave in production: what keeps output consistent, and where it slips.',
        },
        {
          title: 'Architecture improvements',
          description:
            'Handling JSON from LLMs is its own discipline  a future version should isolate the AI layer behind a dedicated service so prompts and parsing can evolve independently.',
        },
      ],
    },
    next: {
      label: 'Next project',
      title: 'IP-Based Attendance Management System',
      slug: 'ip-attendance-management',
      status: 'live',
      
      backLabel: 'All projects',
      topLabel: 'Back to top',
    },
  },
  {
    slug: 'ip-attendance-management',
    meta: {
      index: 'Case Study 02',
      title: 'IP-Based Attendance Management System',
      category: 'Web Development / Network Automation',
      year: 2025,
      duration: '3 Weeks',
      teamSize: '4 Members',
      status: 'Completed',
      tagline:
        'Smart attendance system that validates attendance using authorized network identification.',
      wordmark: 'RK.',
      backLabel: 'All projects',
      resumeLabel: 'Resume',
      navLabel: 'Case study navigation',
      mainLabel: 'Project case study',
      homeLabel: 'Go to home',
    },
    hero: {
      label: 'Case study introduction',
      kicker: 'Case Study 02 · Web Development / Network Automation',
      title: 'IP-Based Attendance Management System',
      statement:
        'Secure attendance through intelligent network validation  a student is marked present only when their device is connected to the institution\u2019s authorized network.',
      github: {
        href: 'https://github.com/Ronak2005N/IP-authorised-attendance-marking',
        label: 'View source code on GitHub',
        text: 'View Source',
        icon: '/Images/git.png',
        arrow: '\u2197',
      },
      visual: {
        index: '02',
        caption: 'Platform overview · placeholder',
        image: '/CaseStudyImages/2.0.png',
        alt: 'Platform overview  IP-Based Attendance Management System',
      },
    },
    overview: {
      index: '02',
      heading: 'Overview',
      intro:
        'The IP-Based Attendance Management System replaces the roll call with something that cannot be faked. When a lecture starts, the admin opens a session and students mark their presence from their own devices  but the system only records attendance from devices connected to the institution\u2019s authorized network. No QR code to share, no GPS to spoof, no proxy in the middle.',
      items: [
        {
          label: 'What it is',
          value:
            'A web-based attendance system that validates a student\u2019s presence by confirming their device is connected to the authorized institutional network before recording attendance.',
        },
        {
          label: 'Who it helps',
          value:
            'Administrators who need dependable attendance records, and students who want to mark presence quickly without queuing at a roll call.',
        },
        {
          label: 'Why it exists',
          value:
            'Traditional systems trust a person, a code, or a location  this one trusts the network the institution itself controls.',
        },
      ],
    },
    problem: {
      index: '03',
      heading: 'Problem',
      intro:
        'Attendance is one of the most taken-for-granted parts of an institution  and one of the easiest to compromise. A signed sheet can be faked, a passed-around QR code can be scanned in bulk, and a GPS fix can be spoofed. None of them can actually prove who was in the room.',
      pains: [
        {
          title: 'Proxy attendance',
          description:
            'Students mark attendance for friends who are absent  through a signed sheet, a shared code, or a phone passed around the classroom.',
        },
        {
          title: 'Manual verification',
          description:
            'Roll calls are slow and interrupt lectures; cross-checking who was actually present afterwards is tedious and prone to error.',
        },
        {
          title: 'Administrative workload',
          description:
            'Reconciling attendance records across classes, compiling them into reports, and chasing missing data eats hours of admin time every week.',
        },
        {
          title: 'Lack of secure validation',
          description:
            'The moment a system relies on trust instead of evidence  a code, a click, a signature  fraud becomes a feature, not a bug.',
        },
      ],
      closing:
        'Institutions needed attendance that was fast for students, honest by design, and administratively cheap.',
    },
    solution: {
      index: '04',
      heading: 'Solution',
      paragraphs: [
        'The system anchors attendance to something an institution fully controls: its own network. A student is only marked present if their device is connected to the authorized institutional network at the moment they mark in  making proxy attendance physically difficult rather than simply discouraged.',
        'Around that single idea sits a complete admin workflow: sessions are created in advance, monitored live as they run, and closed when the lecture ends. Every recorded attendance lands in an exportable record, and duplicate entries are rejected before they can reach the sheet.',
      ],
      pillars: [
        {
          title: 'Authorized network validation',
          description:
            'Presence is proven by network identity  a device connected to the institution\u2019s approved network is accepted, everything else is declined.',
        },
        {
          title: 'Live attendance sessions',
          description:
            'Admins open a session before the lecture and watch attendance arrive in real time as students mark in.',
        },
        {
          title: 'Secure attendance recording',
          description:
            'Each entry is bound to a session and a student, stored server-side, and de-duplicated automatically.',
        },
        {
          title: 'Admin workflow',
          description:
            'Creating, monitoring, and exporting attendance happen in one place  no spreadsheets, no manual reconciliation.',
        },
      ],
    },
    architecture: {
      index: '05',
      heading: 'Architecture',
      intro:
        'One decision drives the entire flow: the network is the source of truth. Each layer below owns a single step, from the admin who starts a session to the Excel file that ends it.',
      stages: [
        {
          label: 'Administrator',
          description:
            'Creates an attendance session for a lecture  naming it and opening it so students can mark in.',
        },
        {
          label: 'Attendance Session',
          description:
            'A live, time-boxed record that defines when, and for whom, attendance is being collected.',
        },
        {
          label: 'Student Device',
          description:
            'The student opens the portal on a device connected to the classroom network and submits their attendance.',
        },
        {
          label: 'Authorized Network',
          description:
            'The institution\u2019s local network  the gatekeeper. Only devices inside it are eligible to mark attendance.',
        },
        {
          label: 'IP Validation',
          description:
            'The server extracts the device\u2019s true IP and compares it against the list of approved network ranges.',
        },
        {
          label: 'Attendance Server',
          description:
            'Node.js accepts the request, validates it, checks for duplicates, and records the attendance.',
        },
        {
          label: 'Attendance Records',
          description:
            'Every validated entry is stored with the session, the student, and a timestamp  an auditable trail.',
        },
        {
          label: 'Excel Export',
          description:
            'The admin closes the session and downloads a formatted Excel workbook of the attendance via ExcelJS.',
        },
      ],
    },
    features: {
      index: '06',
      heading: 'Core Features',
      intro:
        'Eight capabilities, each owning one part of the attendance loop  from opening a session to exporting the final report.',
      placeholder: 'Screenshot placeholder',
      items: [
        {
          id: 'live-sessions',
          index: '01',
          heading: 'Live Attendance Sessions',
          description:
            'Admins create a session before the lecture and watch attendance accumulate in real time as students mark in from the classroom.',
          techNote: 'Time-Boxed Sessions · Live Monitoring',
          image: '/CaseStudyImages/2.1.png',
        },
        {
          id: 'ip-validation',
          index: '02',
          heading: 'Authorized IP Validation',
          description:
            'Every submission is checked against the authorized network before it is accepted. Devices outside the approved ranges are declined outright.',
          techNote: 'True Client IP Extraction · Approved-Range Matching',
          image: '/CaseStudyImages/2.2.png',
        },
        {
          id: 'student-portal',
          index: '03',
          heading: 'Student Portal',
          description:
            'Students sign in and mark attendance in seconds from their own device  no queue, no shared sheet, no code to pass around.',
          techNote: 'Lightweight Interface · Session-Aware Marking',
          image: '/CaseStudyImages/2.3.png',
        },
        {
          id: 'admin-dashboard',
          index: '04',
          heading: 'Admin Dashboard',
          description:
            'A single dashboard for creating sessions, monitoring live attendance, reviewing records, and closing sessions when the lecture ends.',
          techNote: 'Centralized session and record management',
          image: '/CaseStudyImages/2.4.png',
        },
        {
          id: 'attendance-records',
          index: '05',
          heading: 'Attendance Records',
          description:
            'Every validated entry is stored server-side with the session, student, and timestamp  a clean, auditable history.',
          techNote: 'File-Based Persistence · Timestamped Entries',
          image: '/CaseStudyImages/2.5.png',
        },
        {
          id: 'session-management',
          index: '06',
          heading: 'Session Management',
          description:
            'Sessions are opened, monitored, and closed on demand, keeping the attendance window tight and controllable.',
          techNote: 'Session Lifecycle · Open / Close Workflow',
          image: '/CaseStudyImages/2.6.png',
        },
        {
          id: 'excel-export',
          index: '07',
          heading: 'Excel Export',
          description:
            'Closed sessions export to a formatted Excel workbook in one click, ready for records and reporting.',
          techNote: 'ExcelJS · Structured Workbook Generation',
          image: '/CaseStudyImages/2.7.png',
        },
        {
          id: 'duplicate-prevention',
          index: '08',
          heading: 'Duplicate Attendance Prevention',
          description:
            'The server rejects repeat submissions from the same student within a session before they can reach the record.',
          techNote: 'Server-side duplicate guard',
        },
      ],
    },
    journey: {
      index: '08',
      heading: 'Development Journey',
      intro:
        'Three weeks from problem to working system. Each phase sharpened one part of the flow  the validation, the dashboard, and the export.',
      phases: [
        {
          phase: '01',
          title: 'Research',
          description:
            'Studied how proxy attendance actually happens  shared sheets, passed-around codes, spoofed locations  and looked for a signal that was hard to fake.',
        },
        {
          phase: '02',
          title: 'Requirement Analysis',
          description:
            'Defined the two users  admin and student  and the core loop: create a session, mark in from the network, review the record.',
        },
        {
          phase: '03',
          title: 'System Design',
          description:
            'Designed the flow around network validation as the gatekeeper, mapping out the admin dashboard and the student portal.',
        },
        {
          phase: '04',
          title: 'Backend Development',
          description:
            'Built the Node.js and Express server: session endpoints, student submissions, and the admin record API.',
        },
        {
          phase: '05',
          title: 'IP Validation Logic',
          description:
            'Implemented the core check  extracting the true client IP behind the router and matching it against approved network ranges.',
        },
        {
          phase: '06',
          title: 'Dashboard Development',
          description:
            'Built the admin interface for creating sessions and watching attendance arrive in real time, plus the student marking portal.',
        },
        {
          phase: '07',
          title: 'Testing',
          description:
            'Ran the loop end to end across devices and networks, tightening the validation and duplicate guards with every pass.',
        },
        {
          phase: '08',
          title: 'Deployment',
          description:
            'Deployed the system on the institutional network and prepared the admin workflow for real lecture use.',
        },
        {
          phase: '09',
          title: 'Lessons Learned',
          description:
            'Network-aware thinking, Express architecture, and file-based persistence became working skills rather than theory.',
        },
      ],
    },
    technical: {
      index: '09',
      heading: 'Technical Deep Dive',
      intro:
        'The engineering behind the attendance loop  how the server, the validation, and the export fit together, and the decisions that kept the system honest and fast.',
      stack: [
        { label: 'Frontend', value: 'HTML · CSS · JavaScript' },
        { label: 'Backend', value: 'Node.js · Express.js' },
        { label: 'Data', value: 'ExcelJS · Local Storage' },
        { label: 'Network', value: 'IP Validation · Authorized Ranges' },
        { label: 'Transport', value: 'REST APIs' },
      ],
      topics: [
        {
          heading: 'Express Architecture',
          points: [
            'The server is organized around clear route groups  sessions, submissions, records, and export  each owning a single responsibility.',
            'Middleware handles the shared concerns: request parsing, session lookups, and response shaping.',
          ],
        },
        {
          heading: 'Node.js Backend',
          points: [
            'Node.js and Express power the API surface the portals depend on  synchronous, simple, and easy to reason about.',
          ],
        },
        {
          heading: 'Attendance Session Logic',
          points: [
            'A session defines the window for attendance: created by the admin, opened for submissions, closed when the lecture ends.',
            'Submissions are only accepted against an open session, keeping the attendance window tight.',
          ],
        },
        {
          heading: 'IP Validation Workflow',
          points: [
            'The server extracts the true client IP from the network headers rather than trusting a forwarded value.',
            'Approved network ranges are compared against the client IP; anything outside the ranges is declined before recording.',
          ],
        },
        {
          heading: 'REST APIs',
          points: [
            'The frontend and backend communicate over REST  session CRUD, attendance submission, record listing, and export.',
          ],
        },
        {
          heading: 'ExcelJS Export',
          points: [
            'Closed sessions render into a formatted Excel workbook via ExcelJS, with clean columns and readable structure.',
            'Export runs on demand so the attendance data doubles as the persistent record.',
          ],
        },
        {
          heading: 'State Management',
          points: [
            'Session and submission state is coordinated server-side so the admin dashboard and the student portal always agree.',
          ],
        },
        {
          heading: 'Error Handling',
          points: [
            'Invalid networks, closed sessions, and duplicate submissions fail gracefully with clear feedback  never a silent drop.',
          ],
        },
        {
          heading: 'Performance',
          points: [
            'Validation runs before any write, and records are read from storage instead of recomputed, keeping the dashboard responsive during live sessions.',
          ],
        },
      ],
    },
    challenges: {
      index: '10',
      heading: 'Challenges',
      intro:
        'The real engineering work lived on the network edge  reliably reading an IP, staying correct across routers, and refusing duplicates without slowing the flow.',
      resolutionLabel: 'Resolution',
      items: [
        {
          title: 'Reliable IP detection',
          problem:
            'Behind a router, the client IP is not always the address the server should trust  proxy headers can hide the real device.',
          resolution:
            'Configured the Node.js backend to extract the true client IP from the network headers instead of the raw socket address.',
        },
        {
          title: 'Dynamic networks',
          problem:
            'Networks change  new subnets, DHCP shifts, and variable ranges could lock out valid students or admit invalid ones.',
          resolution:
            'Kept the approved ranges explicit and configurable so the network definition stays accurate as the environment changes.',
        },
        {
          title: 'Duplicate attendance prevention',
          problem:
            'A student could submit attendance twice  once by mistake, once on purpose  polluting the record.',
          resolution:
            'Added a server-side guard that rejects repeat submissions within a session before they reach the sheet.',
        },
        {
          title: 'Session synchronization',
          problem:
            'The admin dashboard and the student portal had to agree on what was open, who was marked in, and when it closed.',
          resolution:
            'Made the server the single source of truth for session and submission state.',
        },
        {
          title: 'Export formatting',
          problem:
            'Attendance data had to leave the system as something an administrator could actually read and report from.',
          resolution:
            'Structured the ExcelJS output with clean columns and a consistent layout rather than a raw dump.',
        },
      ],
    },
    results: {
      index: '11',
      heading: 'Results',
      intro:
        'The system delivered the loop it set out to build  attendance that is fast to collect, hard to fake, and clean to report.',
      metrics: [
        { value: '2', label: 'User roles' },
        { value: '3', label: 'Core modules' },
        { value: 'XLSX', label: 'Export format' },
        { value: 'IP', label: 'Validation signal' },
      ],
      achievementsHeading: 'Achievements',
      achievements: [
        'Attendance validated against the authorized network  not trust, codes, or location.',
        'Live sessions let administrators watch attendance arrive in real time.',
        'Duplicate entries rejected server-side, keeping records clean.',
        'One-click Excel export turns sessions into ready-to-report workbooks.',
      ],
      futureHeading: 'Future improvements',
      futureImprovements: [
        'Migrate from ExcelJS to a robust SQL/NoSQL database for scalable records.',
        'Add MAC address validation for tighter security on the network.',
        'Create a mobile-responsive student portal.',
      ],
    },
    lessons: {
      index: '12',
      heading: 'Lessons Learned',
      intro:
        'What three weeks of building the system changed  about backend architecture, network-aware development, and product thinking.',
      items: [
        {
          title: 'Backend architecture',
          description:
            'Organizing the Express server around sessions, submissions, and records kept every layer simple  each route group owned one job, and the flow stayed easy to trace.',
        },
        {
          title: 'Network-aware development',
          description:
            'Building a system that reads the network as evidence taught me how much correctness lives in infrastructure  the true IP, the right header, the approved range.',
        },
        {
          title: 'Product thinking',
          description:
            'One decision  trust the network  shaped the entire product. A clear constraint made the solution obvious and the scope small.',
        },
        {
          title: 'Scalability',
          description:
            'File-based persistence is honest about its limits. The clean next step is a real database  the architecture was designed so that swap stays isolated.',
        },
        {
          title: 'Engineering growth',
          description:
            'Shipping the full loop  server, validation, dashboards, export  turned Express, REST, and ExcelJS from concepts into working engineering skills.',
        },
      ],
    },
    next: {
      label: 'Next project',
      title: 'Kazhudha-Multiplayer Card Game',
      slug: 'kazhudha-multiplayer-card-game',
      status: 'live',
      
      backLabel: 'All projects',
      topLabel: 'Back to top',
    },
  },
  {
    slug: 'kazhudha-multiplayer-card-game',
    meta: {
      index: 'Case Study 03',
      title: 'Kazhudha-Multiplayer Card Game',
      category: 'Game Development / Multiplayer',
      year: 2024,
      duration: '1 Month',
      teamSize: 'Solo',
      status: 'Completed',
      tagline:
        'A real-time multiplayer recreation of the classic Kazhudha (Donkey) card game.',
      wordmark: 'RK.',
      backLabel: 'All projects',
      resumeLabel: 'Resume',
      navLabel: 'Case study navigation',
      mainLabel: 'Project case study',
      homeLabel: 'Go to home',
    },
    hero: {
      label: 'Case study introduction',
      kicker: 'Case Study 03 · Game Development / Multiplayer',
      title: 'Kazhudha-Multiplayer Card Game',
      statement:
        'Reimagining a timeless card game through real-time multiplayer technology  a browser-based Kazhudha where friends meet in a room, trade cards instantly, and share one perfectly synchronized game state.',
      demo: {
        href: 'https://ronak2005n.github.io/Kazhutha/',
        label: 'View the live demo of the game',
        text: 'Live Demo',
        arrow: '\u2197',
      },
      github: {
        href: 'https://github.com/Ronak2005N/Kazhutha',
        label: 'View source code on GitHub',
        text: 'View Source',
        icon: '/Images/git.png',
        arrow: '\u2197',
      },
      visual: {
        index: '03',
        caption: 'Game overview · placeholder',
        image: '/CaseStudyImages/3.0.png',
        alt: 'Game overview  Kazhudha-Multiplayer Card Game',
      },
    },
    overview: {
      index: '02',
      heading: 'Overview',
      intro:
        'Kazhudha is a real-time multiplayer recreation of the classic Donkey card game, moved from the table into the browser. Players create or join rooms, play together in real time, exchange cards instantly, and experience one synchronized game state  the original rules intact, the table between friends now optional.',
      items: [
        {
          label: 'What it is',
          value:
            'A browser-based multiplayer version of the classic Kazhudha (Donkey) card game, built on real-time WebSocket communication.',
        },
        {
          label: 'Who it helps',
          value:
            'Friends and family spread across locations who want to share the same card table without being in the same room.',
        },
        {
          label: 'Why it exists',
          value:
            'The game was built to be played in person. Recreating it online preserves the spirit of the game while proving out a real-time multiplayer architecture.',
        },
      ],
    },
    problem: {
      index: '03',
      heading: 'Problem',
      intro:
        'The Kazhudha card game has always lived in one place: a physical table. Take that table away and the game dissolves  the pass, the pickup, the pile, the panic all depend on everyone being present at the same moment. Bringing it online meant solving what every real-time system fights: keeping everyone\u2019s screen telling the same story at the same time.',
      pains: [
        {
          title: 'Real-time synchronization',
          description:
            'Every card passed, picked up, or laid down has to appear on every player\u2019s screen instantly  or the game stops making sense.',
        },
        {
          title: 'Multiplayer fairness',
          description:
            'One player\u2019s network lag must never decide the game. Everyone has to act on the same state, at the same turn, no matter who is faster online.',
        },
        {
          title: 'Low latency communication',
          description:
            'A sluggish round of HTTP polling would kill the pace of a card game. The communication layer had to feel instant.',
        },
        {
          title: 'Consistent game state',
          description:
            'With multiple players mutating the same deck, a single desync can corrupt the whole match  the state has to stay identical for everyone.',
        },
        {
          title: 'Maintaining classic gameplay',
          description:
            'The technology was new, but the game had to stay the game  the original rules, rhythm, and tension, untouched.',
        },
      ],
      closing:
        'The challenge was never just building a game in the browser  it was building a game where four separate screens behave like one shared table.',
    },
    solution: {
      index: '04',
      heading: 'Solution',
      paragraphs: [
        'The answer is a single authoritative game state living on the server. Players never decide what is true  they send intentions over WebSocket, the server resolves them, and broadcasts the resulting state back to every connected player. One source of truth, one turn at a time, and every screen simply renders what the server says.',
        'Rooms give the system its shape: a player creates a room, others join by code, and the server runs the game inside it  distributing cards, sequencing turns, and synchronizing every move in real time through WebSockets.',
      ],
      pillars: [
        {
          title: 'Multiplayer rooms',
          description:
            'Players create or join named rooms, giving every match a contained, private space to run in.',
        },
        {
          title: 'WebSocket communication',
          description:
            'A persistent, low-latency channel between every client and the server  the difference between a card game and a slideshow.',
        },
        {
          title: 'Server-side game management',
          description:
            'The server owns the deck, the turns, and the rules, so no client can drift from the truth.',
        },
        {
          title: 'Real-time synchronization',
          description:
            'State updates broadcast to every connected player the moment they happen  the table moves as one.',
        },
        {
          title: 'Turn management',
          description:
            'An explicit turn loop sequences play so the game stays fair regardless of network jitter.',
        },
      ],
    },
    architecture: {
      index: '05',
      heading: 'Architecture',
      intro:
        'One authoritative server, many connected clients. Each layer owns a single step of the loop, from the player\u2019s click to every other screen updating in the same instant.',
      stages: [
        {
          label: 'Player',
          description:
            'Creates a room or joins one by code, then plays from a browser  passing, picking up, and laying down cards.',
        },
        {
          label: 'React Frontend',
          description:
            'The game interface built with React and Vite  rendering the table, the cards, and the turns from the server\u2019s state.',
        },
        {
          label: 'WebSocket',
          description:
            'A persistent low-latency channel carrying every action and state update between the clients and the server.',
        },
        {
          label: 'Node.js Server',
          description:
            'The backend built on Node.js and Express, hosting the WebSocket layer and the room lifecycle.',
        },
        {
          label: 'Game Engine',
          description:
            'Encapsulates the rules of Kazhudha  card distribution, the pass and pickup flow, and the win condition.',
        },
        {
          label: 'Game State Manager',
          description:
            'Holds the single authoritative state for each match and applies moves in sequence, rejecting anything invalid.',
        },
        {
          label: 'Room Synchronization',
          description:
            'Broadcasts the authoritative state to every connected player the moment it changes.',
        },
        {
          label: 'Connected Players',
          description:
            'Each screen renders the same server state, so every player sees the same table at the same time.',
        },
      ],
    },
    features: {
      index: '06',
      heading: 'Core Features',
      intro:
        'Four capabilities, each owning one part of the multiplayer loop  from joining a room to staying in sync until the last card.',
      placeholder: 'Screenshot placeholder',
      items: [
        {
          id: 'multiplayer-rooms',
          index: '01',
          heading: 'Multiplayer Rooms',
          description:
            'Players create a room or join an existing one, giving every match a private, contained space to run in  no public lobby required.',
          techNote: 'Room Lifecycle · Join-by-Code',
          image: '/CaseStudyImages/3.1.png',
        },
        {
          id: 'real-time-gameplay',
          index: '02',
          heading: 'Real-Time Gameplay',
          description:
            'Cards are passed, picked up, and laid down live  every action reflects across all screens the moment it happens.',
          techNote: 'Event-Driven Updates · Instant Broadcast',
          image: '/CaseStudyImages/3.2.png',
        },
        {
          id: 'websocket-sync',
          index: '03',
          heading: 'WebSocket Synchronization',
          description:
            'A persistent socket keeps every client in sync, replacing request-response polling with a live channel.',
          techNote: 'Persistent Connection · Full-Duplex Messaging',
          image: '/CaseStudyImages/3.3.png',
        },
        {
          id: 'turn-management',
          index: '04',
          heading: 'Turn Management',
          description:
            'An explicit turn loop sequences play across all players, keeping the game fair even when networks lag.',
          techNote: 'Server-enforced turn order',
          image: '/CaseStudyImages/3.4.png',
        },
      ],
    },
    journey: {
      index: '08',
      heading: 'Development Journey',
      intro:
        'One month from first sketch to playable game. Each phase tightened one part of the loop  the rules, the interface, and the real-time engine.',
      phases: [
        {
          phase: '01',
          title: 'Research',
          description:
            'Studied how real-time multiplayer games handle state  authoritative servers, room models, and WebSocket patterns  before writing any game code.',
        },
        {
          phase: '02',
          title: 'Game Rules Analysis',
          description:
            'Mapped the complete rules of Kazhudha: the deck, the pass and pickup flow, the win condition, and every edge case that could happen at a real table.',
        },
        {
          phase: '03',
          title: 'UI Design',
          description:
            'Designed the game table  cards, hands, and turn indicators  around a layout that stays readable on desktop and mobile alike.',
        },
        {
          phase: '04',
          title: 'Frontend Development',
          description:
            'Built the React interface with Vite: the lobby, the room screen, and the table view that renders whatever the server broadcasts.',
        },
        {
          phase: '05',
          title: 'Backend Development',
          description:
            'Built the Node.js and Express server with the room lifecycle and the WebSocket layer underneath.',
        },
        {
          phase: '06',
          title: 'WebSocket Integration',
          description:
            'Connected the two sides  wiring client actions to server resolution and server state broadcasts back to every screen.',
        },
        {
          phase: '07',
          title: 'Testing',
          description:
            'Played the game across multiple browser windows and devices, chasing desyncs and turn-order bugs with every round.',
        },
        {
          phase: '08',
          title: 'Optimization',
          description:
            'Tightened message payloads and update paths so synchronization stayed smooth even on slower connections.',
        },
        {
          phase: '09',
          title: 'Lessons Learned',
          description:
            'Authoritative state, event-driven communication, and real-time debugging became working skills rather than theory.',
        },
      ],
    },
    technical: {
      index: '09',
      heading: 'Technical Deep Dive',
      intro:
        'The engineering behind the game  how the React client, the WebSocket layer, and the authoritative server fit together, and the decisions that kept every screen in sync.',
      stack: [
        { label: 'Frontend', value: 'React · Vite · JavaScript' },
        { label: 'Backend', value: 'Node.js · Express.js' },
        { label: 'Communication', value: 'WebSocket' },
        { label: 'Game Logic', value: 'Server-side engine' },
        { label: 'Data', value: 'In-memory room state' },
      ],
      topics: [
        {
          heading: 'React Architecture',
          points: [
            'Vite scaffolds the client; React renders the game as a function of the server\u2019s state rather than local mutations.',
            'The table UI is structured around hands, the shared pile, and turn indicators  each a discrete component.',
          ],
        },
        {
          heading: 'WebSocket Communication',
          points: [
            'A persistent socket between each client and the server carries actions in and state updates out.',
            'Full-duplex messaging means a move broadcasts to every connected player in the same instant.',
          ],
        },
        {
          heading: 'Express Backend',
          points: [
            'Node.js and Express host the server, with the WebSocket layer sitting alongside the standard HTTP routes.',
          ],
        },
        {
          heading: 'Multiplayer Room Management',
          points: [
            'Rooms are created, joined, and tracked server-side, giving every match a contained state context.',
            'Room lifecycle is explicit  open, playing, closed  so the server always knows the game\u2019s phase.',
          ],
        },
        {
          heading: 'State Synchronization',
          points: [
            'The server owns the single authoritative state and broadcasts it after every resolved move.',
            'Clients never compute the next state themselves  they render the state they receive.',
          ],
        },
        {
          heading: 'Event Handling',
          points: [
            'Client actions arrive as events, are validated against the current state, and resolved in turn order.',
          ],
        },
        {
          heading: 'Performance Optimization',
          points: [
            'Message payloads stay minimal and updates target only what changed, keeping the game smooth on modest connections.',
          ],
        },
        {
          heading: 'Error Recovery',
          points: [
            'Disconnected players are detected and the room state is preserved, so a dropped client does not collapse the match.',
          ],
        },
      ],
    },
    challenges: {
      index: '10',
      heading: 'Challenges',
      intro:
        'The real engineering work lived where the network met the game  keeping four screens in perfect agreement over imperfect connections.',
      resolutionLabel: 'Resolution',
      items: [
        {
          title: 'Multiplayer synchronization',
          problem:
            'A single desync between any two screens could corrupt the entire match  cards, turns, and the pile all had to agree.',
          resolution:
            'Made the server the sole authority for state and broadcast every update, so clients only ever render the truth.',
        },
        {
          title: 'Race conditions',
          problem:
            'Two players acting in the same instant could leave the server resolving moves in the wrong order.',
          resolution:
            'Sequenced every move through the turn loop, so actions are applied one at a time in a defined order.',
        },
        {
          title: 'Player disconnections',
          problem:
            'A client dropping mid-round could leave the game frozen or the room in a half-known state.',
          resolution:
            'Detected disconnects and preserved the room state, so the match survives a lost connection.',
        },
        {
          title: 'Reconnection handling',
          problem:
            'Rejoining players needed to see the correct current state, not a stale snapshot.',
          resolution:
            'On reconnect, the client re-synchronizes by pulling the authoritative state from the server.',
        },
        {
          title: 'Game state consistency',
          problem:
            'Deck and hand mutations had to be identical everywhere  no drift between players.',
          resolution:
            'All mutations happen server-side and are broadcast, eliminating the possibility of local drift.',
        },
        {
          title: 'Latency',
          problem:
            'Slow connections could make the fast, tense pace of Kazhudha feel sluggish or out of step.',
          resolution:
            'Kept messages small and update paths direct, so synchronization stays tight on modest networks.',
        },
        {
          title: 'Turn synchronization',
          problem:
            'With everyone acting in real time, knowing whose turn it was  and keeping it enforced  was critical to fairness.',
          resolution:
            'The server owns the turn loop and only accepts moves from the active player.',
        },
      ],
    },
    results: {
      index: '11',
      heading: 'Results',
      intro:
        'The project delivered what it set out to prove: a classic card game recreated online with a real-time multiplayer architecture under the hood.',
      metrics: [
        { value: '1', label: 'Authoritative server' },
        { value: '2', label: 'Communication layer' },
        { value: '7', label: 'Core features' },
        { value: 'RT', label: 'Real-time sync' },
      ],
      achievementsHeading: 'Achievements',
      achievements: [
        'A smooth multiplayer experience where every screen shares the same table in real time.',
        'Reliable state synchronization with the server as the single source of truth.',
        'Low-latency WebSocket gameplay that preserves the pace of the original game.',
        'The classic Kazhudha rules recreated faithfully in the browser.',
      ],
      futureHeading: 'Future improvements',
      futureImprovements: [
        'Add matchmaking for random opponents.',
        'Introduce in-room voice chat.',
        'Add spectator mode and tournaments.',
      ],
    },
    lessons: {
      index: '12',
      heading: 'Lessons Learned',
      intro:
        'What a month of building the game changed  about multiplayer architecture, real-time networking, and state that must never drift.',
      items: [
        {
          title: 'Multiplayer architecture',
          description:
            'The authoritative-server pattern made the whole system tractable  one source of truth, one place to enforce rules, and no trust placed in clients.',
        },
        {
          title: 'Real-time networking',
          description:
            'WebSockets changed how I think about communication  a persistent channel carries the game forward where request-response polling never could.',
        },
        {
          title: 'WebSocket development',
          description:
            'Building the socket layer end to end taught me the practical shape of real-time systems: events in, resolution, state out.',
        },
        {
          title: 'State management',
          description:
            'Keeping game state authoritative and broadcast-only eliminated an entire class of desync bugs before they could appear.',
        },
        {
          title: 'Performance optimization',
          description:
            'Smaller messages and targeted updates kept the game fluid on modest connections  performance was a design decision, not an afterthought.',
        },
        {
          title: 'Engineering growth',
          description:
            'Shipping a live multiplayer game solo turned event-driven thinking, room management, and real-time debugging into working skills.',
        },
      ],
    },
    next: {
      label: 'Next project',
      title: 'Blockchain-Based Certificate Verification System Using Cryptography',
      slug: 'blockchain-certificate-verification',
      status: 'live',
      upcomingLabel: 'Case study coming soon',
      backLabel: 'All projects',
      topLabel: 'Back to top',
    },
  },
  {
    slug: 'blockchain-certificate-verification',
    meta: {
      index: 'Case Study 04',
      title: 'Blockchain-Based Certificate Verification System Using Cryptography',
      category: 'Blockchain / Web Development',
      year: 2025,
      duration: '1 Day',
      teamSize: '3 Members',
      status: 'Completed',
      tagline:
        'Secure certificate authentication platform using blockchain hashing concepts to prevent document fraud.',
      wordmark: 'RK.',
      backLabel: 'All projects',
      resumeLabel: 'Resume',
      navLabel: 'Case study navigation',
      mainLabel: 'Project case study',
      homeLabel: 'Go to home',
    },
    hero: {
      label: 'Case study introduction',
      kicker: 'Case Study 04 · Blockchain / Web Development',
      title: 'Blockchain-Based Certificate Verification System Using Cryptography',
      statement:
        'Building trust in digital credentials through cryptographic verification  every certificate carries a unique hash that can be checked in seconds, without waiting on manual institutional approval.',
      visual: {
        index: '04',
        caption: 'Verification platform · placeholder',
        image: '/CaseStudyImages/4.0.png',
        alt: 'Platform overview  Blockchain-Based Certificate Verification System Using Cryptography',
      },
    },
    overview: {
      index: '02',
      heading: 'Overview',
      intro:
        'The Blockchain-Based Certificate Verification System turns a certificate into something that can prove its own authenticity. Every credential is hashed into a unique cryptographic fingerprint at issuance, stored securely, and made verifiable through the platform  so an employer, a university, or any verifier can confirm a document is genuine in seconds instead of waiting on manual institutional approval.',
      items: [
        {
          label: 'What it is',
          value:
            'A web platform that issues certificate records as cryptographic hashes and lets anyone verify a certificate instantly through a public-facing check.',
        },
        {
          label: 'Who it helps',
          value:
            'Organizations, employers, and institutions that need to validate credentials quickly  and the certificate holders whose documents deserve to be trusted.',
        },
        {
          label: 'Why it exists',
          value:
            'Certificate forgery and manual verification drain time and trust from hiring and admissions; a cryptographic record removes both from the equation.',
        },
      ],
    },
    problem: {
      index: '03',
      heading: 'Problem',
      intro:
        'A certificate is only as valuable as the effort required to trust it. In practice, that trust is slow, manual, and easy to break  forged documents slip through, verifications sit waiting on institutional approval, and legitimate credentials lose value because nothing proves they are real.',
      pains: [
        {
          title: 'Certificate forgery',
          description:
            'Documents can be edited, copied, and presented as genuine  a photocopy of a certificate says nothing about whether it was ever issued.',
        },
        {
          title: 'Manual verification',
          description:
          'Confirming a credential means calling or emailing an institution and waiting  a process that can take days and often gets ignored.',
        },
        {
          title: 'Time-consuming validation',
          description:
            'When every hire or admission triggers a manual check, the cost of trust scales with every single credential.',
        },
        {
          title: 'Lack of trusted digital credentials',
          description:
            'Digitizing documents without securing them is no better than the paper  a PDF can be altered as easily as a scan.',
        },
        {
          title: 'Administrative overhead',
          description:
            'Institutions spend real effort answering verification requests instead of issuing credentials and moving on.',
        },
      ],
      closing:
        'Trust in credentials had to stop depending on who you know or how long you can wait  it needed to be verifiable, instantly, by anyone.',
    },
    solution: {
      index: '04',
      heading: 'Solution',
      paragraphs: [
        'The platform makes a certificate its own proof. At issuance, each document is run through a SHA-256 hash to produce a unique cryptographic fingerprint, stored alongside the record and encoded into a scannable QR code. Anyone with the document can verify it  by scanning the code or entering its ID  and receive an instant, tamper-aware verdict.',
        'Blockchain concepts anchor the trust model without pretending to be a full chain: hashes tie records to their content, storage keeps them immutable, and verification compares what is presented against what was issued. The result is a workflow that is simple for users and sound for institutions.',
      ],
      pillars: [
        {
          title: 'Cryptographic hashing',
          description:
            'SHA-256 turns every certificate into a unique fingerprint  change the document and the fingerprint changes with it.',
        },
        {
          title: 'Certificate verification',
          description:
            'A public check compares the presented hash against the stored record and answers one question: is this certificate genuine?',
        },
        {
          title: 'QR-based authentication',
          description:
            'Every certificate carries a scannable code that opens its verification instantly  no typing, no portals to explain.',
        },
        {
          title: 'Secure digital records',
          description:
            'Issued certificates live in tamper-evident storage, so the record an institution publishes is the record everyone verifies.',
        },
        {
          title: 'Simplified verification workflow',
          description:
            'Verifiers stop chasing institutions  the system answers in seconds, and institutions stop answering the same requests.',
        },
      ],
    },
    architecture: {
      index: '05',
      heading: 'Architecture',
      intro:
        'One continuous flow from issuance to verification. Each layer owns a single step, from the institution that issues to the verified result every checker receives.',
      stages: [
        {
          label: 'Institution',
          description:
            'An administrator issues a certificate for a holder, entering the credential details into the platform.',
        },
        {
          label: 'Certificate Generator',
          description:
            'The system builds the certificate record and prepares it for secure storage.',
        },
        {
          label: 'SHA-256 Hash Generation',
          description:
            'The certificate\u2019s content is hashed into a unique cryptographic fingerprint  the document\u2019s identity.',
        },
        {
          label: 'Secure Storage',
          description:
            'The record and its hash are stored in the SQL database, forming the tamper-evident source of truth.',
        },
        {
          label: 'Verification Portal',
          description:
            'A public-facing check where verifiers scan a QR code or enter a certificate ID to start validation.',
        },
        {
          label: 'Certificate Validation',
          description:
            'The system recomputes and compares the hash, confirming the document matches the issued record.',
        },
        {
          label: 'Verified Result',
          description:
            'The verifier receives an instant, unambiguous verdict on the certificate\u2019s authenticity.',
        },
      ],
    },
    features: {
      index: '06',
      heading: 'Core Features',
      intro:
        'Eight capabilities, each owning one part of the trust loop  from issuance to an instant verified result.',
      placeholder: 'Screenshot placeholder',
      items: [
        {
          id: 'certificate-generation',
          index: '01',
          heading: 'Certificate Generation',
          description:
            'Admins issue certificates with the holder\u2019s details, and the platform builds a secure digital record ready for verification.',
          techNote: 'Issuance Workflow · Admin-Driven',
          image: '/CaseStudyImages/4.1.png',
        },
        {
          id: 'cryptographic-hashing',
          index: '02',
          heading: 'Cryptographic Hashing',
          description:
            'Every certificate is reduced to a unique SHA-256 fingerprint, so any change to the document is instantly detectable.',
          techNote: 'SHA-256 · Unique Fingerprint per Certificate',
          image: '/CaseStudyImages/4.2.png',
        },
        {
          id: 'qr-verification',
          index: '03',
          heading: 'QR Code Verification',
          description:
            'Each certificate carries a scannable code that opens its verification check immediately  no manual entry required.',
          techNote: 'QR Encoding · Scan-to-Verify',
          image: '/CaseStudyImages/4.3.png',
        },
        {
          id: 'secure-validation',
          index: '04',
          heading: 'Secure Validation',
          description:
            'Validation compares the presented hash against the stored record and returns a clear, tamper-aware verdict.',
          techNote: 'Hash Comparison · Tamper Detection',
          image: '/CaseStudyImages/4.4.png',
        },
        {
          id: 'digital-identity',
          index: '05',
          heading: 'Digital Identity',
          description:
            'Each credential becomes a stable, verifiable digital identity that stands on its own  independent of the paper it was printed on.',
          techNote: 'Cryptographic Identity · Content-Bound',
          image: '/CaseStudyImages/4.5.png',
        },
        {
          id: 'verification-dashboard',
          index: '06',
          heading: 'Verification Dashboard',
          description:
            'Issuers manage records, monitor issued certificates, and track verification activity from one dashboard.',
          techNote: 'Admin Console · Record Management',
          image: '/CaseStudyImages/4.6.png',
        },
        {
          id: 'search-verify',
          index: '07',
          heading: 'Search & Verify',
          description:
            'Verifiers can look up a certificate by its unique ID as well as by QR, covering every way a document reaches them.',
          techNote: 'ID Lookup · Public Check',
          image: '/CaseStudyImages/4.7.png',
        },
        {
          id: 'tamper-detection',
          index: '08',
          heading: 'Tamper Detection',
          description:
            'A document that has been altered after issuance fails its hash check on the spot, exposing forgery instead of accepting it.',
          techNote: 'Hash Mismatch Flags · Integrity Check',
          image: '/CaseStudyImages/4.8.png',
        },
      ],
    },
    journey: {
      index: '08',
      heading: 'Development Journey',
      intro:
        'A hackathon-paced build that moved from blockchain research to a working verification platform  each phase tightened one part of the trust loop.',
      phases: [
        {
          phase: '01',
          title: 'Research',
          description:
            'Studied how credential fraud happens in the real world and what a practical verification flow would need to counter it.',
        },
        {
          phase: '02',
          title: 'Blockchain Study',
          description:
            'Learned the principles that make blockchain trustworthy  hashing, immutability, and transparency  and mapped which ones applied to certificates.',
        },
        {
          phase: '03',
          title: 'Requirement Analysis',
          description:
            'Defined the three roles  issuer, verifier, and holder  and the core loop: issue, hash, store, verify.',
        },
        {
          phase: '04',
          title: 'UI Design',
          description:
            'Designed the issuance dashboard and the public verification interface around a single question: is this certificate genuine?',
        },
        {
          phase: '05',
          title: 'Backend Development',
          description:
            'Built the Python backend that issues records, serves the verification flow, and manages the SQL database.',
        },
        {
          phase: '06',
          title: 'Hashing Integration',
          description:
            'Wired SHA-256 into issuance and validation so every certificate carries a fingerprint the system can check.',
        },
        {
          phase: '07',
          title: 'Testing',
          description:
            'Issued, tampered, and re-verified certificates end to end, making sure altered documents fail the check every time.',
        },
        {
          phase: '08',
          title: 'Optimization',
          description:
            'Tightened the verification path so checks return in seconds, and polished the scan-to-verify experience.',
        },
        {
          phase: '09',
          title: 'Lessons Learned',
          description:
            'Cryptography fundamentals, blockchain-inspired design, and secure application development became working skills rather than theory.',
        },
      ],
    },
    technical: {
      index: '09',
      heading: 'Technical Deep Dive',
      intro:
        'The engineering behind the trust loop  how hashing, storage, and the verification flow fit together, and the decisions that kept the system honest.',
      stack: [
        { label: 'Frontend', value: 'HTML · CSS · JavaScript' },
        { label: 'Backend', value: 'Python' },
        { label: 'Database', value: 'SQL' },
        { label: 'Cryptography', value: 'SHA-256 hashing' },
        { label: 'Verification', value: 'QR Codes · ID Lookup' },
      ],
      topics: [
        {
          heading: 'Cryptographic Hashing',
          points: [
            'SHA-256 produces a fixed-size fingerprint from a certificate\u2019s content  deterministic, unique, and infeasible to reverse.',
            'Any change to the document changes the hash, making tampering mathematically visible.',
          ],
        },
        {
          heading: 'SHA-256 Workflow',
          points: [
            'At issuance, the certificate record is hashed and the fingerprint is stored alongside it.',
            'At verification, the presented document is re-hashed and compared against the stored fingerprint.',
          ],
        },
        {
          heading: 'Verification Process',
          points: [
            'A verifier scans the QR code or enters the certificate ID to load the record.',
            'The system returns an instant verdict based on whether the presented hash matches the issued hash.',
          ],
        },
        {
          heading: 'Python Architecture',
          points: [
            'The backend is organized around issuance and verification routes, each owning a single step of the flow.',
          ],
        },
        {
          heading: 'SQL Database',
          points: [
            'Issued certificates and their hashes live in SQL, keeping the source of truth queryable and stable.',
          ],
        },
        {
          heading: 'Certificate Validation',
          points: [
            'Validation compares hashes rather than trusting the presented document, so only genuine records pass.',
          ],
        },
        {
          heading: 'QR Code Generation',
          points: [
            'Each certificate encodes its verification reference into a QR code, closing the gap between the document and its check.',
          ],
        },
        {
          heading: 'Performance',
          points: [
            'Hash computation and record lookups are fast enough that verification returns in seconds, even for non-technical verifiers.',
          ],
        },
        {
          heading: 'Security Considerations',
          points: [
            'Hashes are content-bound, so a certificate cannot be altered without breaking its identity.',
            'Roles separate who can issue from who can verify, protecting the issuance path.',
          ],
        },
      ],
    },
    challenges: {
      index: '10',
      heading: 'Challenges',
      intro:
        'The real engineering work happened where cryptography met product  keeping hashes consistent, records trustworthy, and the whole flow effortless for a verifier.',
      resolutionLabel: 'Resolution',
      items: [
        {
          title: 'Hash consistency',
          problem:
            'The same certificate had to hash identically every time it was checked  any drift would reject valid documents.',
          resolution:
            'Hashed a canonical, normalized record at both issuance and verification so the fingerprint always matches.',
        },
        {
          title: 'Preventing duplicate certificates',
          problem:
            'The same credential could be issued twice, undermining the uniqueness that makes a hash meaningful.',
          resolution:
            'Constrained the database to keep each certificate record unique to its holder and content.',
        },
        {
          title: 'Secure validation',
          problem:
            'Verification had to compare against the trusted record  not against whatever the presented document claimed.',
          resolution:
            'Validation always recomputes the hash from stored data and compares, never trusting the input alone.',
        },
        {
          title: 'QR integration',
          problem:
            'The QR code had to survive printing and scanning while still pointing at the correct certificate check.',
          resolution:
            'Encoded a stable verification reference into the code and kept it resolvable at scan time.',
        },
        {
          title: 'Database integrity',
          problem:
            'A corrupt or duplicated record would undermine every verification that relied on it.',
          resolution:
            'Enforced uniqueness and referential integrity in the SQL schema so records stay consistent.',
        },
        {
          title: 'Tamper detection',
          problem:
            'A modified certificate had to fail clearly  not produce a confusing or partial result.',
          resolution:
            'Any hash mismatch returns an explicit tamper verdict, so forgery is detected rather than interpreted.',
        },
      ],
    },
    results: {
      index: '11',
      heading: 'Results',
      intro:
        'The platform delivered the trust loop it set out to build  certificates that carry their own proof and verification that takes seconds, not days.',
      metrics: [
        { value: '3', label: 'User roles' },
        { value: '3', label: 'Core modules' },
        { value: 'SHA-256', label: 'Hash algorithm' },
        { value: '2', label: 'Verify paths' },
      ],
      achievementsHeading: 'Achievements',
      achievements: [
        'Instant certificate verification  seconds instead of waiting on institutional approval.',
        'Cryptographic hashes make document fraud detectable on the spot.',
        'QR and ID lookup give every verifier a simple way to check a credential.',
        'Blockchain-inspired trust model  transparency and immutability without the complexity.',
      ],
      futureHeading: 'Future improvements',
      futureImprovements: [
        'Deploy onto an actual decentralized testnet (e.g., Ethereum/Polygon).',
        'Add batch certificate issuance functionality.',
        'Implement QR code scanning for physical certificate verification.',
      ],
    },
    lessons: {
      index: '12',
      heading: 'Lessons Learned',
      intro:
        'What building a hackathon-speed trust system changed  about cryptography, blockchain-inspired architecture, and what it takes to make a document believable.',
      items: [
        {
          title: 'Cryptography fundamentals',
          description:
            'Hashing taught me what it actually means for data to be tamper-evident  a fingerprint anyone can verify, but nobody can forge.',
        },
        {
          title: 'Blockchain-inspired architecture',
          description:
            'I learned which blockchain ideas carry value without the full machinery  immutability and transparency are achievable with a hash and a database.',
        },
        {
          title: 'Secure application development',
          description:
            'Trusting stored records instead of presented input became a reflex  the system is only as secure as the data it verifies against.',
        },
        {
          title: 'Database design',
          description:
            'Uniqueness and referential integrity proved essential to a trustworthy record  a weak schema quietly undermines a strong hash.',
        },
        {
          title: 'Digital trust systems',
          description:
            'Trust is a product feature. A verification flow that is slow or confusing loses to the manual process it was built to replace.',
        },
        {
          title: 'Engineering growth',
          description:
            'Shipping the full loop in a day  hashing, storage, and verification  turned cryptographic concepts into working engineering skills.',
        },
      ],
    },
    next: {
      label: 'Next project',
      title: 'Student Performance Analytics Dashboard',
      slug: 'student-performance-analytics-dashboard',
      status: 'live',
      
      backLabel: 'All projects',
      topLabel: 'Back to top',
    },
  },
  {
    slug: 'student-performance-analytics-dashboard',
    meta: {
      index: 'Case Study 05',
      title: 'Student Performance Analytics Dashboard',
      category: 'Data Analytics',
      year: 2025,
      duration: '2 Weeks',
      teamSize: '2 Members',
      status: 'Completed',
      tagline:
        'Analytical dashboard for monitoring academic performance, attendance trends, and student progress metrics.',
      wordmark: 'RK.',
      backLabel: 'All projects',
      resumeLabel: 'Resume',
      navLabel: 'Case study navigation',
      mainLabel: 'Project case study',
      homeLabel: 'Go to home',
    },
    hero: {
      label: 'Case study introduction',
      kicker: 'Case Study 05 · Data Analytics',
      title: 'Student Performance Analytics Dashboard',
      statement:
        'Transforming academic data into meaningful educational insights  an interactive dashboard that turns scattered spreadsheets into the decisions institutions actually make.',
      visual: {
        index: '05',
        caption: 'Dashboard overview · placeholder',
        image: '/CaseStudyImages/5.0.png',
        alt: 'Dashboard overview  Student Performance Analytics Dashboard',
      },
    },
    overview: {
      index: '02',
      heading: 'Overview',
      intro:
        'The Student Performance Analytics Dashboard is a decision-support system built in Power BI that consolidates academic records, attendance patterns, and subject-wise performance into one interactive view. Instead of digging through spreadsheets and waiting on manual reports, administrators and educators open a dashboard that answers the questions that matter  how is the cohort doing, where are students falling behind, and what should the institution do about it.',
      items: [
        {
          label: 'What it is',
          value:
            'An interactive analytics dashboard that unifies performance, attendance, and subject-wise data into a single, filterable view with KPIs, trends, and student-level insight.',
        },
        {
          label: 'Who it helps',
          value:
            'Administrators and educators who need to monitor key performance indicators, identify struggling students early, and make decisions grounded in the actual academic record.',
        },
        {
          label: 'Why it exists',
          value:
            'Academic data was scattered across spreadsheets and departments, so meaningful insights only surfaced to whoever had the time and patience to find them manually.',
        },
        {
          label: 'Primary objective',
          value:
            'Convert raw educational data into actionable insight  so the institution decides from evidence rather than effort.',
        },
      ],
    },
    problem: {
      index: '03',
      heading: 'Problem',
      intro:
        'Every institution sits on a mountain of academic data  and most of it never makes it past the spreadsheet it was born in. Records lived in different formats across departments, reports were assembled by hand when someone asked for them, and performance was tracked the way it always had been: by scrolling. The answers were all there. They were just hidden behind effort.',
      pains: [
        {
          title: 'Scattered academic records',
          description:
            'Student data lived across disconnected spreadsheets  marks in one file, attendance in another, subject details in a third, each in its own format and naming convention.',
        },
        {
          title: 'Manual report generation',
          description:
            'A single performance question meant someone sitting down, gathering the files, and assembling a report by hand  slow to produce, slower to update, and outdated the moment it was finished.',
        },
        {
          title: 'Difficult performance tracking',
          description:
            'Comparing a student across semesters, or a subject across sections, required manual matching and manual arithmetic. Patterns that should have been obvious stayed invisible.',
        },
        {
          title: 'Limited data visualization',
          description:
            'Data lived as raw numbers in tables, so trends, drops, and outliers were never seen  they had to be remembered. Nothing surfaced the story the data was telling.',
        },
        {
          title: 'Slow decision-making',
          description:
            'By the time an insight was extracted and shared, the decision it was meant to support had already been delayed  or made without it.',
        },
      ],
      closing:
        'Institutions did not lack data  they lacked a way to see it. The dashboard was built to make the data answer the questions on its own.',
    },
    solution: {
      index: '04',
      heading: 'Solution',
      paragraphs: [
        'The dashboard centralizes the scattered data and puts the analysis in front of the people who need it. Cleaned records feed a Power BI model, and from that model a set of interactive dashboards surfaces performance, attendance, and subject-wise achievement through KPIs, trends, and filters  every question answerable with a click instead of a spreadsheet session.',
        'It is designed as a decision-support system rather than a chart collection. The focus was never on making data look pretty; it was on making the right question answerable in seconds  who is falling behind, where, and why the institution should care.',
      ],
      pillars: [
        {
          title: 'Interactive dashboards',
          description:
            'Performance, attendance, and subject-wise views that respond to filters, so every stakeholder sees the slice of data they actually care about.',
        },
        {
          title: 'Attendance analytics',
          description:
            'Attendance patterns tracked and correlated with performance, exposing the students whose absence was quietly pulling their grades down.',
        },
        {
          title: 'Student performance tracking',
          description:
            'Individual progress across semesters and subjects, so a struggling student is flagged early instead of discovered at exam time.',
        },
        {
          title: 'KPI monitoring',
          description:
            'The metrics that matter  pass rates, attendance rates, subject averages, top and bottom performers  summarized into cards that read at a glance.',
        },
        {
          title: 'Data-driven insights',
          description:
            'Trends and anomalies surfaced by the data itself, giving administrators a foundation for decisions that previously ran on instinct.',
        },
      ],
    },
    architecture: {
      index: '05',
      heading: 'Architecture',
      intro:
        'One continuous flow from raw student data to institutional decision. Each stage owns a single step  collecting, cleaning, modeling, and presenting  so the pipeline stays simple to trace and simple to extend.',
      stages: [
        {
          label: 'Student Data',
          description:
            'The raw material: marks, attendance, subject records, and student details  collected from multiple sources in their original, inconsistent formats.',
        },
        {
          label: 'Data Collection',
          description:
            'Sources were gathered and mapped, bringing spreadsheets and exports from different departments into one working set.',
        },
        {
          label: 'SQL Database',
          description:
            'Structured records were organized into a relational model, giving the pipeline a stable, queryable store to read from.',
        },
        {
          label: 'Data Cleaning (Python)',
          description:
            'Python with Pandas standardized names, data types, and formats  reconciling the inconsistencies departments had accumulated.',
        },
        {
          label: 'Power BI',
          description:
            'The cleaned dataset was loaded into Power BI, where the data model and relationships were defined for analysis.',
        },
        {
          label: 'DAX Calculations',
          description:
            'Measures for KPIs  pass rates, attendance rates, averages, and comparisons  were written in DAX over the model.',
        },
        {
          label: 'Interactive Dashboard',
          description:
            'Charts, cards, and filters were assembled into dashboards designed around the questions administrators actually ask.',
        },
        {
          label: 'Insights & Decisions',
          description:
            'Stakeholders explore the dashboard, spot trends and at-risk students, and act  the whole point of the pipeline.',
        },
      ],
    },
    features: {
      index: '06',
      heading: 'Core Features',
      intro:
        'Seven capabilities, each owning one part of the analytics loop  from the headline KPIs to the per-student drill-down.',
      placeholder: 'Screenshot placeholder',
      items: [
        {
          id: 'academic-performance-dashboard',
          index: '01',
          heading: 'Academic Performance Dashboard',
          description:
            'The central view  pass rates, subject averages, and cohort performance rendered as charts that respond instantly to filters.',
          techNote: 'KPI-First Layout · Cohort-Level Analytics',
          image: '/CaseStudyImages/5.1.png',
        },
        {
          id: 'attendance-analytics',
          index: '02',
          heading: 'Attendance Analytics',
          description:
            'Attendance trends across students and subjects, correlated with performance so the relationship between presence and grades becomes visible.',
          techNote: 'Attendance vs. performance correlation',
          image: '/CaseStudyImages/5.2.png',
        },
        {
          id: 'subject-wise-analysis',
          index: '03',
          heading: 'Subject-wise Analysis',
          description:
            'Each subject broken out individually  average scores, distributions, and the sections or students dragging it down.',
          techNote: 'Per-Subject Breakdown · Comparison Views',
          image: '/CaseStudyImages/5.3.png',
        },
        {
          id: 'kpi-cards',
          index: '04',
          heading: 'KPI Cards',
          description:
            'The headline metrics  overall pass rate, attendance rate, subject averages  surfaced as cards that summarize the cohort in one glance.',
          techNote: 'DAX-Driven Measures · At-a-Glance Summaries',
          image: '/CaseStudyImages/5.4.png',
        },
        {
          id: 'interactive-filters',
          index: '05',
          heading: 'Interactive Filters',
          description:
            'Slice the entire dashboard by department, semester, subject, or individual student  every chart answers to the same filter.',
          techNote: 'Cross-Filtering · Drill-Down Navigation',
          image: '/CaseStudyImages/5.5.png',
        },
        {
          id: 'trend-analysis',
          index: '06',
          heading: 'Trend Analysis',
          description:
            'Performance and attendance over time, exposing the direction of the cohort  improving, declining, or holding steady.',
          techNote: 'Time-Series Visuals · Trend Comparison',
          image: '/CaseStudyImages/5.6.png',
        },
        {
          id: 'student-insights',
          index: '07',
          heading: 'Student Insights',
          description:
            'Drill into a single student to see their marks, attendance, and subject performance together  the view that flags a student early.',
          techNote: 'Individual Drill-Through · Early-Warning View',
          image: '/CaseStudyImages/5.7.png',
        },
      ],
    },
    journey: {
      index: '07',
      heading: 'Development Journey',
      intro:
        'Two weeks from raw files to working dashboard. Each phase tightened one part of the loop  the data, the model, and the questions it answers.',
      phases: [
        {
          phase: '01',
          title: 'Requirement Analysis',
          description:
            'Defined who the dashboard served and what they needed to know  the KPIs, the filters, and the decisions the tool was meant to support.',
        },
        {
          phase: '02',
          title: 'Dataset Collection',
          description:
            'Gathered the academic records, attendance data, and subject details from their scattered sources  the raw material for everything that followed.',
        },
        {
          phase: '03',
          title: 'Data Cleaning',
          description:
            'Standardized naming, data types, and formats across sources with Python and Pandas, reconciling the inconsistencies departments had accumulated.',
        },
        {
          phase: '04',
          title: 'Database Preparation',
          description:
            'Organized the cleaned records into a structured SQL model, giving the pipeline a stable store and a clean basis for analysis.',
        },
        {
          phase: '05',
          title: 'Power BI Dashboard Design',
          description:
            'Designed the dashboard structure around real questions  performance, attendance, subjects, students  and built the views to answer them.',
        },
        {
          phase: '06',
          title: 'DAX Calculations',
          description:
            'Wrote the measures behind the KPIs  pass rates, attendance rates, averages, and comparisons  making the numbers trustworthy.',
        },
        {
          phase: '07',
          title: 'Testing',
          description:
            'Checked measures against the source data, validating that the dashboard told the same story the spreadsheets did  only faster.',
        },
        {
          phase: '08',
          title: 'Dashboard Optimization',
          description:
            'Tightened performance and layout  faster filters, clearer hierarchies, and visuals that read in one pass instead of a study session.',
        },
        {
          phase: '09',
          title: 'Lessons Learned',
          description:
            'Data cleaning, DAX modeling, and dashboard design became working skills rather than theory.',
        },
      ],
    },
    technical: {
      index: '08',
      heading: 'Technical Deep Dive',
      intro:
        'The engineering behind the dashboard  how the SQL store, the Python cleaning pipeline, and the Power BI model fit together, and the decisions that kept the numbers honest.',
      stack: [
        { label: 'Visualization', value: 'Power BI · Power Query' },
        { label: 'Data Processing', value: 'Python · Pandas' },
        { label: 'Data Storage', value: 'SQL · Excel' },
        { label: 'Calculations', value: 'DAX' },
      ],
      topics: [
        {
          heading: 'Power BI Architecture',
          points: [
            'A single Power BI file houses the data model, measures, and dashboards, keeping the entire analysis in one consistent, traceable workspace.',
            'Queries load and shape the source data through Power Query, so imports are reproducible and repeatable.',
          ],
        },
        {
          heading: 'SQL Queries',
          points: [
            'SQL extracted and structured the cleaned academic records from the database, producing the tables Power BI reads from.',
            'Query structure kept the stored layer consistent with what the dashboard expects, avoiding surprises at load time.',
          ],
        },
        {
          heading: 'Python Data Processing',
          points: [
            'Python with Pandas cleaned and standardized the raw files  normalizing naming conventions, types, and formats across sources.',
            'Cleaning ran before anything entered the model, so the dashboard only ever saw consistent, trustworthy records.',
          ],
        },
        {
          heading: 'DAX Measures',
          points: [
            'KPIs such as pass rate, attendance rate, and subject averages are computed as DAX measures over the data model.',
            'Measures are written once and reused across visuals, keeping calculations consistent everywhere they appear.',
          ],
        },
        {
          heading: 'Dashboard Design',
          points: [
            'Views are organized by question  performance, attendance, subjects, students  with KPIs on top and detail beneath.',
            'The layout favors scanning over searching: a hierarchy that leads the eye from the headline number to the breakdown.',
          ],
        },
        {
          heading: 'Data Modeling',
          points: [
            'Tables are connected through relationships so filters propagate correctly across students, subjects, and semesters.',
            'A clean model is the difference between a dashboard that answers questions and one that produces confusion.',
          ],
        },
        {
          heading: 'KPI Calculations',
          points: [
            'Every KPI is defined precisely  the denominator, the window, the exclusion rules  so the number means the same thing every time it is read.',
            'Consistent definitions keep the headline cards trustworthy enough to make decisions on.',
          ],
        },
        {
          heading: 'Performance Optimization',
          points: [
            'Cross-filtering and drill-through stay responsive by keeping the model lean and the visuals purposeful.',
            'The dashboard is treated as a product: fast enough that exploration never turns into waiting.',
          ],
        },
        {
          heading: 'Data Visualization Principles',
          points: [
            'Charts were chosen to answer questions, not decorate pages  the right visual for the comparison, the trend, or the outlier.',
            'Color and hierarchy direct attention to what matters, so the insight surfaces instead of being buried.',
          ],
        },
      ],
    },
    challenges: {
      index: '09',
      heading: 'Challenges',
      intro:
        'The real engineering work happened where messy data met a clean dashboard  reconciling inconsistent records, defining KPIs that mean something, and keeping the whole thing fast enough to explore.',
      resolutionLabel: 'Resolution',
      items: [
        {
          title: 'Cleaning inconsistent datasets',
          problem:
            'Every department had its own naming, formats, and data types  the same student, subject, or grade spelled differently in different files.',
          resolution:
            'Python and Pandas scripts standardized naming conventions and types across all sources before anything reached the model.',
        },
        {
          title: 'Designing meaningful KPIs',
          problem:
            'A KPI only helps if everyone agrees on what it counts  the same number could be computed three different ways from the same data.',
          resolution:
            'Every measure was defined precisely  denominator, window, and exclusions  so the headline cards meant one thing everywhere.',
        },
        {
          title: 'DAX calculations',
          problem:
            'DAX behaves differently from spreadsheet formulas  row context, filter context, and the way measures propagate took deliberate learning to get right.',
          resolution:
            'Measures were built incrementally and validated against the source data until the dashboard matched the ground truth.',
        },
        {
          title: 'Dashboard performance',
          problem:
            'A dashboard with too much going on becomes a dashboard nobody uses  slow filters and dense visuals killed the point of exploration.',
          resolution:
            'Kept the model lean, the visuals purposeful, and the filters fast, so exploration stayed a conversation instead of a wait.',
        },
        {
          title: 'Data relationships',
          problem:
            'Wrong or missing relationships between tables would silently corrupt the numbers  filters leaking across subjects or semesters.',
          resolution:
            'Modeled relationships deliberately and tested filter propagation so cross-filtering stayed correct end to end.',
        },
        {
          title: 'Visualization clarity',
          problem:
            'A chart that requires study to read is not a dashboard  it is homework. The risk was visuals that looked impressive and communicated nothing.',
          resolution:
            'Chose each visual to answer a specific question and kept the hierarchy clear, so the insight surfaced at a glance.',
        },
      ],
    },
    results: {
      index: '10',
      heading: 'Results',
      intro:
        'The dashboard delivered what it set out to build  academic data that institutions can actually see, explore, and decide from.',
      metrics: [
        { value: '15+', label: 'Custom charts' },
        { value: '4', label: 'Filter dimensions' },
        { value: '2', label: 'Data sources unified' },
      ],
      achievementsHeading: 'Achievements',
      achievements: [
        'Academic performance, attendance, and subject-wise data unified into a single interactive view.',
        'Struggling students identifiable early through the per-student drill-down.',
        'KPIs defined once in DAX and trusted across the whole dashboard.',
      ],
      futureHeading: 'Future improvements',
      futureImprovements: [
        'Integrate predictive analytics to forecast end-of-semester grades.',
        'Connect directly to the university\u2019s live database via API for real-time refresh.',
        'Add automated email reports for educators.',
      ],
    },
    lessons: {
      index: '11',
      heading: 'Lessons Learned',
      intro:
        'What two weeks of building the dashboard changed  about data, about visualization, and about the discipline it takes to make numbers trustworthy.',
      items: [
        {
          title: 'Data analytics workflow',
          description:
            'A clear pipeline  collect, clean, store, model, present  made the project tractable. Each stage stayed simple because it owned one job.',
        },
        {
          title: 'Dashboard design',
          description:
            'Dashboards are designed around questions, not charts. The tool earned its place because every view answered something a stakeholder actually asked.',
        },
        {
          title: 'Data visualization',
          description:
            'A chart that needs explaining has failed. The best visuals in the project were the ones that handed the insight over without a caption.',
        },
        {
          title: 'Business intelligence',
          description:
            'The difference between data and intelligence is trust. Defining measures precisely  and validating them against reality  is what made the numbers worth deciding on.',
        },
        {
          title: 'Performance optimization',
          description:
            'A dashboard that is slow to explore gets abandoned. Keeping the model lean and the interactions fast was a product decision, not a technical one.',
        },
        {
          title: 'Engineering growth',
          description:
            'Shipping the full loop  Python cleaning, SQL storage, DAX modeling, dashboard design  turned analytics concepts into working skills.',
        },
      ],
    },
    next: {
      label: 'Next project',
      title: 'Retail Sales Data Analysis Project',
      slug: 'retail-sales-data-analysis',
      status: 'live',
      
      backLabel: 'All projects',
      topLabel: 'Back to top',
    },
  },
  {
    slug: 'retail-sales-data-analysis',
    meta: {
      index: 'Case Study 06',
      title: 'Retail Sales Data Analysis Project',
      category: 'Data Analytics',
      year: 2025,
      duration: '3 Weeks',
      teamSize: 'Solo',
      status: 'Completed',
      tagline:
        'Exploratory data analysis project to identify customer behavior patterns and business performance indicators.',
      wordmark: 'RK.',
      backLabel: 'All projects',
      resumeLabel: 'Resume',
      navLabel: 'Case study navigation',
      mainLabel: 'Project case study',
      homeLabel: 'Go to home',
    },
    hero: {
      label: 'Case study introduction',
      kicker: 'Case Study 06 · Data Analytics',
      title: 'Retail Sales Data Analysis Project',
      statement:
        'Transforming retail sales data into meaningful business insights  an exploratory analysis that turns transactional noise into the patterns a business can actually act on.',
      visual: {
        index: '06',
        caption: 'Analysis overview · placeholder',
        image: '/CaseStudyImages/6.0.png',
        alt: 'Analysis overview  Retail Sales Data Analysis Project',
      },
    },
    overview: {
      index: '02',
      heading: 'Overview',
      intro:
        'The Retail Sales Data Analysis Project is an end-to-end exploration of retail business performance. Using Exploratory Data Analysis, the project digs into transactional data to uncover purchasing behavior, product performance, seasonal trends, and revenue growth  converting raw sales records into business intelligence that supports better decisions.',
      items: [
        {
          label: 'What it is',
          value:
            'A data analysis project that applies Exploratory Data Analysis to retail sales data, producing business metrics, statistical visuals, and an interactive Power BI dashboard.',
        },
        {
          label: 'Who it helps',
          value:
            'Retail businesses that want to understand what actually drives their sales  customer behavior, product performance, and the seasonal patterns behind the numbers.',
        },
        {
          label: 'Why it exists',
          value:
            'Retailers collect massive amounts of transactional data, but the patterns hidden inside it stay invisible without analysis  revenue leaks and opportunities go unnoticed.',
        },
        {
          label: 'Primary objective',
          value:
            'Transform raw sales data into actionable intelligence  so business decisions come from evidence about what sells, to whom, and when.',
        },
      ],
    },
    problem: {
      index: '03',
      heading: 'Problem',
      intro:
        'Retail businesses run on data they rarely read. Every transaction is recorded, but the story across them  what sells, who buys, when demand spikes  stays buried in spreadsheets and POS exports. The information exists. Turning it into a decision is the hard part.',
      pains: [
        {
          title: 'Large unstructured datasets',
          description:
            'Sales records arrive as massive raw exports  thousands of rows across multiple files, in formats and naming conventions that were never designed for analysis.',
        },
        {
          title: 'Difficult trend identification',
          description:
            'Seasonal peaks, product cycles, and demographic patterns exist in the data, but finding them by scrolling through rows is impractical  most simply never get found.',
        },
        {
          title: 'Manual reporting',
          description:
            'Understanding performance meant someone manually aggregating sales figures into spreadsheets  slow to build, easy to get wrong, and outdated the moment it was finished.',
        },
        {
          title: 'Lack of actionable insights',
          description:
            'The business had numbers but not intelligence  totals and averages without the why behind them, so decisions leaned on instinct instead of evidence.',
        },
        {
          title: 'Business decision uncertainty',
          description:
            'Without a clear view of what drives revenue, every decision  what to stock, where to invest, whom to target  was a guess dressed up as a plan.',
        },
      ],
      closing:
        'The data was not the problem  the lack of a way to see it was. The project set out to make the patterns visible and the decisions evidence-based.',
    },
    solution: {
      index: '04',
      heading: 'Solution',
      paragraphs: [
        'The project approaches sales data the way an analyst should: clean it first, explore it next, and only then let it speak. Python with Pandas and NumPy handle the preprocessing, Matplotlib renders the statistical visuals, and the findings are consolidated into an interactive Power BI dashboard built for business questions rather than raw numbers.',
        'The emphasis is Exploratory Data Analysis done properly  understanding distributions, spotting anomalies, and testing which patterns actually hold. The output is not a chart dump; it is a set of business metrics and insights  customer segments, product performance, regional strengths  that a retailer can act on.',
      ],
      pillars: [
        {
          title: 'Data cleaning',
          description:
            'Missing values, outliers, and inconsistencies handled before analysis, so every insight is built on trustworthy data.',
        },
        {
          title: 'Exploratory Data Analysis',
          description:
            'Distributions, correlations, and anomalies examined systematically to surface the patterns hidden in the transactions.',
        },
        {
          title: 'Business metrics',
          description:
            'Revenue, margins, and performance indicators defined and computed consistently, so the numbers mean the same thing everywhere they appear.',
        },
        {
          title: 'Customer behavior analysis',
          description:
            'Purchasing behavior segmented by demographics and preferences, exposing who the profitable customers actually are.',
        },
        {
          title: 'Interactive visualizations',
          description:
            'Findings rendered as interactive visuals and a Power BI dashboard, so business questions are answerable by exploration.',
        },
      ],
    },
    architecture: {
      index: '05',
      heading: 'Architecture',
      intro:
        'One continuous flow from raw transactions to business insight. Each stage owns a single step  cleaning, exploring, computing, and presenting  so the analysis stays simple to trace and simple to extend.',
      stages: [
        {
          label: 'Raw Sales Dataset',
          description:
            'The starting point: thousands of transactional records across multiple files, in the inconsistent formats a business actually accumulates.',
        },
        {
          label: 'Data Cleaning',
          description:
            'Missing values, outliers, and inconsistencies are handled before anything is analyzed, so the foundation is trustworthy.',
        },
        {
          label: 'Pandas Processing',
          description:
            'Python with Pandas and NumPy transforms, aggregates, and merges the cleaned records into analysis-ready structures.',
        },
        {
          label: 'Exploratory Data Analysis',
          description:
            'Distributions, correlations, and trends are examined systematically to surface the patterns behind the transactions.',
        },
        {
          label: 'Business Metrics',
          description:
            'Revenue, margins, and performance indicators are defined and computed over the explored data.',
        },
        {
          label: 'Visualizations',
          description:
            'Matplotlib renders the statistical visuals  trends, segments, and anomalies that make the patterns readable.',
        },
        {
          label: 'Power BI Dashboard',
          description:
            'The findings are consolidated into an interactive dashboard built around the questions the business actually asks.',
        },
        {
          label: 'Business Insights',
          description:
            'Stakeholders explore the dashboard, and the patterns become decisions  the entire purpose of the pipeline.',
        },
      ],
    },
    features: {
      index: '06',
      heading: 'Core Features',
      intro:
        'Seven capabilities, each owning one part of the analysis loop  from trend identification to the KPIs that track performance.',
      placeholder: 'Screenshot placeholder',
      items: [
        {
          id: 'sales-trend-analysis',
          index: '01',
          heading: 'Sales Trend Analysis',
          description:
            'Sales performance tracked over time, exposing seasonal peaks, growth phases, and the periods where revenue quietly dips.',
          techNote: 'Time-Series Analysis · Seasonal Patterns',
          image: '/CaseStudyImages/6.1.png',
        },
        {
          id: 'customer-segmentation',
          index: '02',
          heading: 'Customer Segmentation',
          description:
            'Purchasing behavior grouped by demographics and preferences, revealing who the profitable customers are and how they differ.',
          techNote: 'Behavioral Grouping · Demographic Analysis',
          image: '/CaseStudyImages/6.2.png',
        },
        {
          id: 'revenue-analysis',
          index: '03',
          heading: 'Revenue Analysis',
          description:
            'Revenue and growth broken down by segment, product, and region  the view that shows where money actually comes from.',
          techNote: 'Revenue Aggregation · Growth Comparison',
          image: '/CaseStudyImages/6.3.png',
        },
        {
          id: 'product-performance',
          index: '04',
          heading: 'Product Performance',
          description:
            'Each product assessed by sales and margin, exposing the performers driving profit and the lines quietly draining it.',
          techNote: 'Product-Level Metrics · Margin Analysis',
          image: '/CaseStudyImages/6.4.png',
        },
        {
          id: 'regional-sales-insights',
          index: '05',
          heading: 'Regional Sales Insights',
          description:
            'Sales compared across regions and markets, so strengths and gaps in the footprint become visible at a glance.',
          techNote: 'Geographic Breakdown · Regional Comparison',
          image: '/CaseStudyImages/6.5.png',
        },
        {
          id: 'interactive-dashboards',
          index: '06',
          heading: 'Interactive Dashboards',
          description:
            'The findings rendered as interactive Power BI dashboards, so stakeholders explore the data instead of reading static reports.',
          techNote: 'Cross-Filtering · Drill-Down Exploration',
          image: '/CaseStudyImages/6.6.png',
        },
        {
          id: 'kpi-tracking',
          index: '07',
          heading: 'KPI Tracking',
          description:
            'The metrics that matter  revenue, margins, top products  summarized into cards that read the state of the business at a glance.',
          techNote: 'Business KPIs · At-a-Glance Summaries',
          image: '/CaseStudyImages/6.7.png',
        },
      ],
    },
    journey: {
      index: '07',
      heading: 'Development Journey',
      intro:
        'Three weeks from raw files to business intelligence. Each phase tightened one part of the loop  the data, the analysis, and the presentation.',
      phases: [
        {
          phase: '01',
          title: 'Dataset Collection',
          description:
            'Gathered the retail sales records and supporting data, mapping the files and formats the analysis would start from.',
        },
        {
          phase: '02',
          title: 'Data Cleaning',
          description:
            'Handled missing values, capped extreme outliers, and standardized inconsistencies  making the dataset safe to analyze.',
        },
        {
          phase: '03',
          title: 'Exploratory Data Analysis',
          description:
            'Examined distributions, correlations, and trends systematically to understand what the data actually contained.',
        },
        {
          phase: '04',
          title: 'Visualization',
          description:
            'Rendered the statistical findings with Matplotlib  trend lines, segment breakdowns, and the anomalies that deserved attention.',
        },
        {
          phase: '05',
          title: 'Business Intelligence',
          description:
            'Translated the explored data into business metrics  revenue, margins, and performance indicators that meant something to stakeholders.',
        },
        {
          phase: '06',
          title: 'Dashboard Development',
          description:
            'Consolidated the findings into an interactive Power BI dashboard built around the questions the business actually asked.',
        },
        {
          phase: '07',
          title: 'Testing',
          description:
            'Validated metrics and visuals against the source data, making sure the dashboard told the same story the records did.',
        },
        {
          phase: '08',
          title: 'Optimization',
          description:
            'Tightened the dashboard and the analysis  clearer hierarchies, faster interactions, and visuals that read in one pass.',
        },
        {
          phase: '09',
          title: 'Lessons Learned',
          description:
            'EDA, data cleaning, and business intelligence became working skills rather than theory.',
        },
      ],
    },
    technical: {
      index: '08',
      heading: 'Technical Deep Dive',
      intro:
        'The engineering behind the analysis  how the cleaning pipeline, the EDA workflow, and the Power BI layer fit together, and the decisions that kept the numbers honest.',
      stack: [
        { label: 'Data Processing', value: 'Python · Pandas · NumPy' },
        { label: 'Visualization', value: 'Matplotlib · Power BI' },
        { label: 'Data Source', value: 'Excel / CSV datasets' },
        { label: 'Approach', value: 'Exploratory Data Analysis' },
        { label: 'Output', value: 'Interactive Dashboard · PDF Report' },
      ],
      topics: [
        {
          heading: 'Exploratory Data Analysis',
          points: [
            'EDA drove the entire project  distributions, correlations, and anomalies were examined before any metric was trusted.',
            'The goal was understanding: which patterns held, which were noise, and what the data genuinely supported.',
          ],
        },
        {
          heading: 'Pandas Workflow',
          points: [
            'Pandas handled the transformation layer  loading, filtering, aggregating, and merging records into analysis-ready structures.',
            'NumPy supported the numeric work  statistics and computations over the cleaned data.',
          ],
        },
        {
          heading: 'Data Cleaning',
          points: [
            'Missing values were handled with median-based imputation rather than deletion, preserving the dataset\u2019s size and shape.',
            'Extreme outliers were capped before visualization, so averages were not skewed by a handful of anomalous transactions.',
          ],
        },
        {
          heading: 'Feature Engineering',
          points: [
            'Derived features  time-based buckets, product categories, and segment labels  turned raw columns into dimensions the analysis could group by.',
          ],
        },
        {
          heading: 'Business KPIs',
          points: [
            'Revenue, margins, and performance indicators were defined precisely and computed consistently across the analysis.',
            'Consistent definitions made the numbers trustworthy enough to drive business decisions.',
          ],
        },
        {
          heading: 'Data Visualization',
          points: [
            'Matplotlib rendered the statistical story  trends, distributions, and segment breakdowns chosen to answer specific questions.',
            'Visuals were selected for clarity, not decoration  the insight had to surface at a glance.',
          ],
        },
        {
          heading: 'Power BI Integration',
          points: [
            'The analyzed findings were consolidated into Power BI, where interactive dashboards made the insights explorable by stakeholders.',
            'The dashboard became the interface between the analysis and the decision-maker.',
          ],
        },
        {
          heading: 'Performance Optimization',
          points: [
            'Cleaning and aggregation ran once, up front, so the dashboard and visuals operated on prepared data instead of recomputing it.',
            'The pipeline was kept efficient enough to rerun as new sales data arrived.',
          ],
        },
        {
          heading: 'Reporting Strategy',
          points: [
            'Findings left the analysis as both an interactive dashboard and a structured report, covering how different stakeholders consume information.',
          ],
        },
      ],
    },
    challenges: {
      index: '09',
      heading: 'Challenges',
      intro:
        'The real engineering work happened where messy data met business questions  missing values, skewed averages, and the discipline it takes to keep an analysis honest.',
      resolutionLabel: 'Resolution',
      items: [
        {
          title: 'Missing values',
          problem:
            'Historical sales records had gaps  missing entries that, left unhandled, would silently bias every average and total.',
          resolution:
            'Applied median-based imputation so the dataset kept its size and shape without injecting fabricated extremes.',
        },
        {
          title: 'Data inconsistencies',
          problem:
            'Naming conventions and formats varied across sources, so the same product or region could appear in multiple spellings.',
          resolution:
            'Standardized the records in the cleaning phase, before any analysis ran against them.',
        },
        {
          title: 'Large datasets',
          problem:
            'Thousands of rows across multiple files made manual inspection impractical and slow.',
          resolution:
            'Pandas and NumPy processed the data programmatically, moving the heavy lifting from the analyst to the pipeline.',
        },
        {
          title: 'Visualization design',
          problem:
            'The risk was visuals that looked impressive and communicated nothing  charts chosen for appearance rather than answer.',
          resolution:
            'Every visual was selected to answer a specific question, with the hierarchy leading the eye to the insight.',
        },
        {
          title: 'KPI selection',
          problem:
            'Too many metrics made the analysis unfocused; the wrong ones made it misleading.',
          resolution:
            'Chose KPIs that mapped to real business decisions  revenue, margins, and performance  and defined them precisely.',
        },
        {
          title: 'Data preprocessing',
          problem:
            'Outliers in sales history could skew averages so badly the analysis told the wrong story.',
          resolution:
            'Capped extreme outliers in Python before visualization, keeping the numbers representative of the actual business.',
        },
      ],
    },
    results: {
      index: '10',
      heading: 'Results',
      intro:
        'The project delivered what it set out to build  retail sales data transformed into business intelligence that supports real decisions.',
      metrics: [
        { value: '15+', label: 'Variables analyzed' },
        { value: '3', label: 'Datasets merged' },
        { value: '2', label: 'Output formats' },
        { value: 'EDA', label: 'Analysis approach' },
      ],
      achievementsHeading: 'Achievements',
      achievements: [
        'Customer purchasing behavior and segments uncovered through deep EDA.',
        'Product performance and profitability made visible at a glance.',
        'Seasonal trends and revenue growth translated into actionable business insights.',
        'An interactive Power BI dashboard that turns the analysis into exploration.',
      ],
      futureHeading: 'Future improvements',
      futureImprovements: [
        'Build a machine learning regression model to predict next quarter\u2019s sales.',
        'Automate the EDA process with a Python script for weekly reports.',
        'Integrate inventory data to show stock vs. demand correlation.',
      ],
    },
    lessons: {
      index: '11',
      heading: 'Lessons Learned',
      intro:
        'What three weeks of analyzing retail data changed  about analytics, about business, and about the discipline it takes to make numbers honest.',
      items: [
        {
          title: 'Data analytics workflow',
          description:
            'A clear pipeline  collect, clean, explore, present  made the project tractable. Each stage stayed simple because it owned one job.',
        },
        {
          title: 'Business intelligence',
          description:
            'The difference between data and intelligence is definition. Metrics only drive decisions when everyone agrees on what they count.',
        },
        {
          title: 'Exploratory Data Analysis',
          description:
            'EDA is a mindset, not a step  understanding distributions and correlations before trusting a number kept the whole analysis honest.',
        },
        {
          title: 'Data visualization',
          description:
            'A chart that needs explaining has failed. The best visuals in the project handed the insight over without a caption.',
        },
        {
          title: 'Dashboard design',
          description:
            'Dashboards are designed around questions, not charts. The tool earned its place because every view answered something stakeholders asked.',
        },
        {
          title: 'Engineering growth',
          description:
            'Shipping the full loop  Pandas cleaning, statistical analysis, dashboard design  turned analytics concepts into working skills.',
        },
      ],
    },
    next: {
      label: 'Next project',
      title: 'Library Management System',
      slug: 'library-management-system',
      status: 'live',
      
      backLabel: 'All projects',
      topLabel: 'Back to top',
    },
  },
  {
    slug: 'weather-forecast-dashboard',
    meta: {
      index: 'Case Study 07',
      title: 'Weather Forecast Dashboard',
      category: 'Web Development',
      year: 2025,
      duration: '1 Week',
      teamSize: 'Solo',
      status: 'Completed',
      tagline:
        'Interactive dashboard displaying weather trends, forecasts, and data visualizations using APIs and Python.',
      wordmark: 'RK.',
      backLabel: 'All projects',
      resumeLabel: 'Resume',
      navLabel: 'Case study navigation',
      mainLabel: 'Project case study',
      homeLabel: 'Go to home',
    },
    hero: {
      label: 'Case study introduction',
      kicker: 'Case Study 07 · Web Development',
      title: 'Weather Forecast Dashboard',
      statement:
        'Real-time weather insights powered by REST APIs  a responsive dashboard that brings live conditions, forecasts, and trends into a clean, modern interface.',
      visual: {
        index: '07',
        caption: 'Dashboard overview · placeholder',
        image: '/CaseStudyImages/8.0.png',
        alt: 'Dashboard overview  Weather Forecast Dashboard',
      },
    },
    overview: {
      index: '02',
      heading: 'Overview',
      intro:
        'The Weather Forecast Dashboard retrieves live weather information through a REST API and presents it in a clean, modern, fully responsive interface. Users search any city, then see current conditions  temperature, humidity, wind speed  alongside forecast data, all rendered through JavaScript and backed by Python.',
      items: [
        {
          label: 'Purpose',
          value:
            'Practice API integration, JSON handling, and frontend dashboard design while building a practical everyday application.',
        },
        {
          label: 'API integration',
          value:
            'Live data fetched from a third-party weather REST API and parsed into structured, typed values for display.',
        },
        {
          label: 'City search',
          value:
            'Search any city to pull its current conditions and forecast instantly, with the interface reacting to the response.',
        },
        {
          label: 'Responsive UI',
          value:
            'A glassmorphism interface that adapts to desktop, tablet, and mobile  clean on every screen size.',
        },
        {
          label: 'JSON handling',
          value:
            'Nested API responses mapped cleanly into frontend variables, so raw JSON becomes readable weather data.',
        },
      ],
    },
    features: {
      index: '03',
      heading: 'Core Features',
      intro:
        'Four capabilities, each owning one part of the weather loop  from the live request to the responsive dashboard it renders into.',
      placeholder: 'Screenshot placeholder',
      items: [
        {
          id: 'live-weather',
          index: '01',
          heading: 'Live Weather Data',
          description:
            'Current conditions  temperature, humidity, wind speed  fetched from the API and updated for whichever city is searched.',
          techNote: 'REST API · Live Requests',
          image: '/CaseStudyImages/8.1.png',
        },
        {
          id: 'city-search',
          index: '02',
          heading: 'City Search',
          description:
            'Search any global city to load its weather instantly, with the request handled asynchronously so the UI stays responsive.',
          techNote: 'Async Fetching · City Lookup',
          image: '/CaseStudyImages/8.2.png',
        },
        {
          id: 'forecast-view',
          index: '03',
          heading: 'Forecast View',
          description:
            'Forecast information rendered alongside current conditions, giving a clear picture of what is coming next.',
          techNote: 'Forecast Data · Multi-Day Trends',
          image: '/CaseStudyImages/8.3.png',
        },
        {
          id: 'responsive-ui',
          index: '04',
          heading: 'Responsive Glassmorphism UI',
          description:
            'A modern, glassmorphism-styled dashboard that adapts across screen sizes while keeping the data readable.',
          techNote: 'Responsive Layout · Modern Styling',
          image: '/CaseStudyImages/8.4.png',
        },
      ],
    },
    technical: {
      index: '04',
      heading: 'Development & Technical',
      intro:
        'The engineering behind the dashboard  how the API call, the JSON parsing, and the interface fit together, and the decisions that kept the experience smooth.',
      stack: [
        { label: 'Frontend', value: 'JavaScript · HTML · CSS' },
        { label: 'Backend', value: 'Python' },
        { label: 'Data', value: 'REST API · JSON' },
        { label: 'UI', value: 'Glassmorphism design' },
      ],
      topics: [
        {
          heading: 'REST API Integration',
          points: [
            'Live weather data is fetched from a third-party REST API, with requests constructed for each searched city.',
          ],
        },
        {
          heading: 'Fetch Requests',
          points: [
            'Asynchronous fetching keeps the interface responsive while the request is in flight  no blocking, no frozen UI.',
          ],
        },
        {
          heading: 'JSON Parsing',
          points: [
            'Nested API responses are mapped cleanly into structured variables, so raw JSON becomes readable weather values.',
          ],
        },
        {
          heading: 'Dashboard UI',
          points: [
            'Current conditions, forecast, and search are composed into a single glassmorphism interface that reads at a glance.',
          ],
        },
        {
          heading: 'Error Handling',
          points: [
            'Failed or malformed responses are caught and surfaced gracefully, so a bad request never breaks the dashboard.',
          ],
        },
        {
          heading: 'Responsive Design',
          points: [
            'The layout adapts to desktop, tablet, and mobile, keeping the weather data clean on every screen size.',
          ],
        },
      ],
    },
    results: {
      index: '05',
      heading: 'Results',
      intro:
        'The project delivered what it set out to build  a practical, everyday weather dashboard with live data and a modern interface.',
      metrics: [
        { value: '2', label: 'API integrations' },
        { value: '5', label: 'Forecast days' },
        { value: '3', label: 'Screen sizes' },
      ],
      achievementsHeading: 'Achievements',
      achievements: [
        'Live weather data retrieved and rendered for any searched city.',
        'Current conditions and forecast displayed in a clean, modern dashboard.',
        'A responsive, glassmorphism interface that works across devices.',
      ],
      futureHeading: 'Future improvements',
      futureImprovements: [
        'Add geolocation to automatically show the user\u2019s local weather.',
        'Include historical weather data comparisons.',
        'Add push notifications for severe weather alerts.',
      ],
    },
    lessons: {
      index: '06',
      heading: 'Lessons Learned',
      intro:
        'What a week of building the dashboard changed  about APIs, asynchronous JavaScript, and frontend design.',
      items: [
        {
          title: 'API integration',
          description:
            'Consuming and parsing third-party APIs taught me how requests, responses, and error cases behave in a real application.',
        },
        {
          title: 'Asynchronous JavaScript',
          description:
            'Promises and async-await became working skills  keeping the interface responsive while requests complete.',
        },
        {
          title: 'Responsive design',
          description:
            'Building the glassmorphism interface across screen sizes reinforced the discipline of designing for every viewport.',
        },
        {
          title: 'Engineering growth',
          description:
            'Shipping the full loop  API call, JSON parsing, and dashboard  turned the concepts into working frontend skills.',
        },
      ],
    },
    next: {
      label: 'Next project',
      title: 'Employee Management System',
      slug: 'employee-management-system',
      status: 'live',

      backLabel: 'All projects',
      topLabel: 'Back to top',
    },
  },
  {
    slug: 'library-management-system',
    meta: {
      index: 'Case Study 08',
      title: 'Library Management System',
      category: 'Software Development',
      year: 2025,
      duration: '1 Month',
      teamSize: '4 Members',
      status: 'Completed',
      tagline:
        'Database application for efficient book inventory management and reporting.',
      wordmark: 'RK.',
      backLabel: 'All projects',
      resumeLabel: 'Resume',
      navLabel: 'Case study navigation',
      mainLabel: 'Project case study',
      homeLabel: 'Go to home',
    },
    hero: {
      label: 'Case study introduction',
      kicker: 'Case Study 08 · Software Development',
      title: 'Library Management System',
      statement:
        'Modernizing library operations through efficient database management  a desktop application that turns book, member, and borrowing records into a single manageable system.',
      visual: {
        index: '08',
        caption: 'Application overview · placeholder',
        image: '/CaseStudyImages/7.0.png',
        alt: 'Application overview  Library Management System',
      },
    },
    overview: {
      index: '02',
      heading: 'Overview',
      intro:
        'The Library Management System is a desktop application that simplifies managing books, members, and borrowing records. Built with Java and an SQL relational database, it gives librarians a simple interface for running the library while replacing manual record keeping with structured CRUD operations.',
      items: [
        {
          label: 'Purpose',
          value:
            'Apply database concepts, CRUD operations, and relational database management to a real-world library workflow.',
        },
        {
          label: 'Book management',
          value:
            'Add, update, search, and delete book records through the application  the inventory, managed without spreadsheets.',
        },
        {
          label: 'Member management',
          value:
            'Member records tracked and searchable, with borrowing history attached to each person.',
        },
        {
          label: 'Borrow & return',
          value:
            'Borrowing and returns recorded against books and members, with stock and due dates kept in sync.',
        },
        {
          label: 'Database integration',
          value:
            'Every action persists to a relational SQL database, so the records survive the session and stay queryable.',
        },
      ],
    },
    features: {
      index: '03',
      heading: 'Core Features',
      intro:
        'Four capabilities, each owning one part of the library loop  from the CRUD operations to the database they persist into.',
      placeholder: 'Screenshot placeholder',
      items: [
        {
          id: 'book-crud',
          index: '01',
          heading: 'Book Record Management',
          description:
            'Add, update, and delete book records through a simple interface, keeping the inventory accurate without manual files.',
          techNote: 'CRUD Operations · Inventory Management',
          image: '/CaseStudyImages/7.1.png',
        },
        {
          id: 'member-tracking',
          index: '02',
          heading: 'Member & Borrowing History',
          description:
            'Member records carry their borrowing history, so every loan is traceable back to a person.',
          techNote: 'Relational Records · History Tracking',
          image: '/CaseStudyImages/7.2.png',
        },
        {
          id: 'borrow-return',
          index: '03',
          heading: 'Borrow & Return System',
          description:
            'Books are borrowed and returned through the system, with available stock and due dates kept in sync.',
          techNote: 'Transactional Flow · Stock Consistency',
          image: '/CaseStudyImages/7.3.png',
        },
        {
          id: 'search',
          index: '04',
          heading: 'Search by Title / Author / ISBN',
          description:
            'Records can be located quickly by title, author, or ISBN, so finding a book never means scrolling the shelf.',
          techNote: 'Query-backed lookup',
          image: '/CaseStudyImages/7.4.png',
        },
      ],
    },
    technical: {
      index: '04',
      heading: 'Development & Technical',
      intro:
        'The engineering behind the system  how the Java application, the SQL schema, and the GUI fit together, and the decisions that kept the records reliable.',
      stack: [
        { label: 'Application', value: 'Java · GUI' },
        { label: 'Database', value: 'SQL · DBMS' },
        { label: 'Operations', value: 'CRUD · Relational Queries' },
        { label: 'Deployment', value: 'Local desktop' },
      ],
      topics: [
        {
          heading: 'Java Application',
          points: [
            'The core logic is built in Java, handling records, transactions, and the interface between the user and the database.',
          ],
        },
        {
          heading: 'SQL Database',
          points: [
            'A relational schema stores books, members, and borrowing records, keeping the library data queryable and persistent.',
          ],
        },
        {
          heading: 'CRUD Functionality',
          points: [
            'Every core action  create, read, update, delete  is implemented over the database, so all changes persist.',
          ],
        },
        {
          heading: 'Database Relationships',
          points: [
            'Books, members, and loans are related through the schema, so borrowing history and availability stay connected.',
          ],
        },
        {
          heading: 'GUI Development',
          points: [
            'A graphical interface lets librarians manage the database without writing queries  forms, lists, and actions.',
          ],
        },
        {
          heading: 'Basic Validation',
          points: [
            'Input is validated before it reaches the database, keeping records clean and preventing broken data.',
          ],
        },
      ],
    },
    results: {
      index: '05',
      heading: 'Results',
      intro:
        'The project delivered what it set out to build  a library database managed through a simple interface, without manual record keeping.',
      metrics: [
        { value: '3', label: 'Core modules' },
        { value: '5+', label: 'Database tables' },
        { value: '2', label: 'User roles' },
      ],
      achievementsHeading: 'Achievements',
      achievements: [
        'Book, member, and borrowing records centralized in one manageable system.',
        'Inventory kept accurate through full CRUD operations.',
        'A GUI that lets librarians manage the database without writing queries.',
      ],
      futureHeading: 'Future improvements',
      futureImprovements: [
        'Migrate from a desktop application to a web-based platform.',
        'Add barcode / RFID scanning functionality.',
        'Add a recommendation system for users based on past reads.',
      ],
    },
    lessons: {
      index: '06',
      heading: 'Lessons Learned',
      intro:
        'What a month of building the system changed  about databases, CRUD, and desktop development.',
      items: [
        {
          title: 'Relational database design',
          description:
            'Structuring books, members, and loans as related tables taught me how a good schema keeps data consistent.',
        },
        {
          title: 'Advanced SQL',
          description:
            'Joins, triggers, and views became working skills through building the query layer and keeping it reliable.',
        },
        {
          title: 'CRUD implementation',
          description:
            'Implementing create, read, update, and delete cleanly over a database reinforced the foundation of every data application.',
        },
        {
          title: 'Engineering growth',
          description:
            'Shipping the full loop  Java logic, SQL schema, GUI  turned database concepts into working desktop development skills.',
        },
      ],
    },
    next: {
      label: 'Next project',
      title: 'Weather Forecast Dashboard',
      slug: 'weather-forecast-dashboard',
      status: 'live',
      
      backLabel: 'All projects',
      topLabel: 'Back to top',
    },
  },
  {
    slug: 'employee-management-system',
    meta: {
      index: 'Case Study 09',
      title: 'Employee Management System',
      category: 'Database Management / Software Development',
      year: 2025,
      duration: '1 Month',
      teamSize: 'Solo',
      status: 'Completed',
      tagline:
        'Database-driven solution for centralized employee record management and reporting.',
      wordmark: 'RK.',
      backLabel: 'All projects',
      resumeLabel: 'Resume',
      navLabel: 'Case study navigation',
      mainLabel: 'Project case study',
      homeLabel: 'Go to home',
    },
    hero: {
      label: 'Case study introduction',
      kicker: 'Case Study 09 · Database Management / Software Development',
      title: 'Employee Management System',
      statement:
        'Centralizing employee records through efficient database management  a Java and SQL application that keeps employee, payroll, and department data in one reliable system.',
      visual: {
        index: '09',
        caption: 'Application overview · placeholder',
        image: '/CaseStudyImages/9.0.png',
        alt: 'Application overview  Employee Management System',
      },
    },
    overview: {
      index: '02',
      heading: 'Overview',
      intro:
        'The Employee Management System is a database-driven application that simplifies employee record management. It centralizes employee information, payroll details, and department records into a single SQL-backed system, replacing manual spreadsheets with structured CRUD operations and database reporting.',
      items: [
        {
          label: 'Purpose',
          value:
            'Strengthen database design skills by implementing CRUD operations, relational database concepts, and efficient data management in a practical business application.',
        },
        {
          label: 'Employee records',
          value:
            'Personal and employment details stored in a centralized database  every record queryable and consistent.',
        },
        {
          label: 'Payroll information',
          value:
            'Salary and payroll details kept in the same system, linked to each employee record.',
        },
        {
          label: 'Department management',
          value:
            'Employees organized under departments, so reporting and management stay structured.',
        },
        {
          label: 'CRUD operations',
          value:
            'Create, read, update, and delete implemented over the database  every action persists.',
        },
        {
          label: 'Database reporting',
          value:
            'Reports generated directly from stored data, turning records into usable summaries.',
        },
      ],
    },
    features: {
      index: '03',
      heading: 'Core Features',
      intro:
        'Four capabilities, each owning one part of the management loop  from the CRUD operations to the reporting they feed into.',
      placeholder: 'Screenshot placeholder',
      items: [
        {
          id: 'employee-crud',
          index: '01',
          heading: 'Employee Record Management',
          description:
            'Add, update, search, and delete employee records through a simple interface, keeping the workforce data accurate.',
          techNote: 'CRUD Operations · Record Management',
          image: '/CaseStudyImages/9.1.png',
        },
        {
          id: 'payroll-details',
          index: '02',
          heading: 'Payroll Information',
          description:
            'Salary and payroll details stored alongside each employee, ready for calculation and reporting.',
          techNote: 'Relational Records · Payroll Tracking',
          image: '/CaseStudyImages/9.2.png',
        },
        {
          id: 'department-management',
          index: '03',
          heading: 'Department Management',
          description:
            'Employees grouped under departments, keeping records organized and reporting meaningful.',
          techNote: 'Relational Grouping · Hierarchy Tracking',
          image: '/CaseStudyImages/9.3.png',
        },
        {
          id: 'database-reporting',
          index: '04',
          heading: 'Database Reporting',
          description:
            'Reports built directly from the database, turning employee and payroll records into structured summaries.',
          techNote: 'Query-backed reporting',
          image: '/CaseStudyImages/9.4.png',
        },
      ],
    },
    technical: {
      index: '04',
      heading: 'Development & Technical',
      intro:
        'The engineering behind the system  how the Java application, the normalized SQL schema, and CRUD operations fit together to keep the records reliable.',
      stack: [
        { label: 'Application', value: 'Java' },
        { label: 'Database', value: 'SQL · DBMS' },
        { label: 'Operations', value: 'CRUD · Relational Queries' },
        { label: 'Deployment', value: 'Local desktop' },
      ],
      topics: [
        {
          heading: 'Java Application',
          points: [
            'The core logic is built in Java, handling records, transactions, and the interface between the user and the database.',
          ],
        },
        {
          heading: 'SQL Database',
          points: [
            'A relational schema stores employees, payroll, and departments, keeping the data queryable and persistent.',
          ],
        },
        {
          heading: 'Database Normalization',
          points: [
            'Data structured through normalization, reducing duplication and keeping records consistent.',
          ],
        },
        {
          heading: 'CRUD Functionality',
          points: [
            'Every core action  create, read, update, delete  is implemented over the database, so all changes persist.',
          ],
        },
        {
          heading: 'Relational Database Design',
          points: [
            'Employees, payroll, and departments are related through the schema, so records stay connected.',
          ],
        },
        {
          heading: 'Basic Validation',
          points: [
            'Input is validated before it reaches the database, keeping records clean and preventing broken data.',
          ],
        },
      ],
    },
    results: {
      index: '05',
      heading: 'Results',
      intro:
        'The project delivered what it set out to build  employee, payroll, and department data managed through one database-driven application, without manual record keeping.',
      metrics: [
        { value: '3', label: 'Core modules' },
        { value: '5+', label: 'Database tables' },
        { value: '3NF', label: 'Normalization' },
      ],
      achievementsHeading: 'Achievements',
      achievements: [
        'Employee, payroll, and department records centralized in one manageable system.',
        'Relational database design applied to a practical business workflow.',
        'Reporting generated directly from stored data.',
      ],
      futureHeading: 'Future improvements',
      futureImprovements: [
        'Build a web-based self-service portal for employees.',
        'Add an attendance and leave tracking module.',
        'Integrate with a payment gateway for direct payroll deposits.',
      ],
    },
    lessons: {
      index: '06',
      heading: 'Lessons Learned',
      intro:
        'What building the system changed  about databases, normalization, and CRUD.',
      items: [
        {
          title: 'Database normalization',
          description:
            'Structuring data through normalization taught me how a clean schema keeps records consistent and duplication-free.',
        },
        {
          title: 'Relational database design',
          description:
            'Connecting employees, payroll, and departments through the schema made the value of relationships tangible.',
        },
        {
          title: 'CRUD implementation',
          description:
            'Implementing create, read, update, and delete cleanly over a database reinforced the foundation of every data application.',
        },
        {
          title: 'Engineering growth',
          description:
            'Shipping the full loop  Java logic, SQL schema, CRUD  turned database concepts into working software development skills.',
        },
      ],
    },
    next: {
      label: 'Next project',
      title: 'Movie Recommendation System',
      slug: 'movie-recommendation-system',
      status: 'live',

      backLabel: 'All projects',
      topLabel: 'Back to top',
    },
  },
  {
    slug: 'movie-recommendation-system',
    meta: {
      index: 'Case Study 10',
      title: 'Movie Recommendation System',
      category: 'Machine Learning',
      year: 2025,
      duration: '3 Weeks',
      teamSize: 'Solo',
      status: 'Completed',
      tagline:
        'Content-based recommendation engine that suggests movies through NLP and TF-IDF similarity.',
      wordmark: 'RK.',
      backLabel: 'All projects',
      resumeLabel: 'Resume',
      navLabel: 'Case study navigation',
      mainLabel: 'Project case study',
      homeLabel: 'Go to home',
    },
    hero: {
      label: 'Case study introduction',
      kicker: 'Case Study 10 · Machine Learning',
      title: 'Movie Recommendation System',
      statement:
        'Personalized movie suggestions powered by machine learning  a content-based engine that reads movie metadata with NLP and TF-IDF to recommend titles worth watching.',
      visual: {
        index: '10',
        caption: 'Recommendation engine overview · placeholder',
        image: '/CaseStudyImages/10.0.png',
        alt: 'Recommendation engine overview  Movie Recommendation System',
      },
    },
    overview: {
      index: '02',
      heading: 'Overview',
      intro:
        'The Movie Recommendation System is a content-based engine that suggests movies similar to what the user prefers. Using NLP and TF-IDF vectorization, it analyzes movie metadata and computes similarity scores, turning text into recommendations.',
      items: [
        {
          label: 'Purpose',
          value:
            'Understand recommendation algorithms, text processing, and basic machine learning concepts by building a practical recommendation engine.',
        },
        {
          label: 'Content-based recommendation',
          value:
            'Movies are matched by their metadata  descriptions, genres, and tags  not by other users.',
        },
        {
          label: 'TF-IDF vectorization',
          value:
            'Movie text is converted into numeric vectors that capture how important each term is to a title.',
        },
        {
          label: 'Similarity matching',
          value:
            'Similarity scores rank how closely movies relate, producing a tailored list per input.',
        },
        {
          label: 'NLP processing',
          value:
            'Descriptions and metadata are cleaned and processed into meaningful features before scoring.',
        },
        {
          label: 'Personalized suggestions',
          value:
            'The output is a ranked set of recommendations relevant to the given movie or preference.',
        },
      ],
    },
    features: {
      index: '03',
      heading: 'Core Features',
      intro:
        'Four capabilities, each owning one part of the recommendation loop  from the text pipeline to the ranked output.',
      placeholder: 'Screenshot placeholder',
      items: [
        {
          id: 'content-based-engine',
          index: '01',
          heading: 'Content-Based Filtering',
          description:
            'Recommendations derived from movie content  descriptions, genres, and features  rather than user history.',
          techNote: 'Machine Learning · Content Matching',
          image: '/CaseStudyImages/10.1.png',
        },
        {
          id: 'tfidf-vectorization',
          index: '02',
          heading: 'TF-IDF Vectorization',
          description:
            'Movie metadata converted into numeric vectors, with rare and meaningful terms weighted higher.',
          techNote: 'Text Vectorization · Feature Extraction',
          image: '/CaseStudyImages/10.2.png',
        },
        {
          id: 'similarity-scoring',
          index: '03',
          heading: 'Similarity Scoring',
          description:
            'Cosine similarity ranks movies against the input, ordering the closest matches first.',
          techNote: 'Cosine Similarity · Ranking',
          image: '/CaseStudyImages/10.3.png',
        },
        {
          id: 'recommendation-output',
          index: '04',
          heading: 'Ranked Recommendations',
          description:
            'The engine generates a ranked list of recommendations based on movie similarity.',
          techNote: 'Ranked Output · Personalized Recommendations',
          image: '/CaseStudyImages/10.4.png',
        },
      ],
    },
    technical: {
      index: '04',
      heading: 'Development & Technical',
      intro:
        'The engineering behind the engine  how the Python pipeline, the TF-IDF model, and the similarity computation fit together to turn text into recommendations.',
      stack: [
        { label: 'Application', value: 'Python' },
        { label: 'Model', value: 'Scikit-learn · TF-IDF' },
        { label: 'Processing', value: 'Pandas · NLP' },
        { label: 'Output', value: 'Script / terminal' },
      ],
      topics: [
        {
          heading: 'Python Implementation',
          points: [
            'The recommendation logic is built in Python, from loading datasets to scoring and ranking movies.',
          ],
        },
        {
          heading: 'TF-IDF Model',
          points: [
            'Movie metadata is converted into numeric vectors, weighting meaningful terms above common ones.',
          ],
        },
        {
          heading: 'Scikit-learn',
          points: [
            'The vectorizer and similarity utilities come from Scikit-learn, keeping the implementation standard.',
          ],
        },
        {
          heading: 'Cosine Similarity',
          points: [
            'Similarity between movies is measured with cosine similarity, ranking the closest matches.',
          ],
        },
        {
          heading: 'Data Preprocessing',
          points: [
            'Descriptions and metadata are cleaned and merged before vectorization, so the input is consistent.',
          ],
        },
        {
          heading: 'Recommendation Workflow',
          points: [
            'A clean pipeline  load, process, vectorize, score, rank  produces the final recommendation list.',
          ],
        },
      ],
    },
    results: {
      index: '05',
      heading: 'Results',
      intro:
        'The project delivered what it set out to build  a working content-based engine that turns movie metadata into a ranked list of relevant recommendations.',
      metrics: [
        { value: '2', label: 'Datasets combined' },
        { value: 'TF-IDF', label: 'Vectorization' },
        { value: 'Top-N', label: 'Ranked output' },
      ],
      achievementsHeading: 'Achievements',
      achievements: [
        'A content-based recommendation engine working end to end.',
        'NLP and TF-IDF applied to real movie metadata.',
        'Similarity scoring that ranks relevant titles automatically.',
      ],
      futureHeading: 'Future improvements',
      futureImprovements: [
        'Upgrade to a hybrid model (collaborative + content-based filtering).',
        'Build a user-friendly web interface using Streamlit or React.',
        'Implement a rating feature for real-time model retraining.',
      ],
    },
    lessons: {
      index: '06',
      heading: 'Lessons Learned',
      intro:
        'What building the engine changed  about recommendation algorithms, text processing, and machine learning.',
      items: [
        {
          title: 'Recommendation algorithms',
          description:
            'Building a content-based engine made the difference between filtering approaches tangible.',
        },
        {
          title: 'Text vectorization',
          description:
            'Turning movie metadata into TF-IDF vectors showed how raw text becomes numeric input.',
        },
        {
          title: 'Similarity math',
          description:
            'Cosine similarity became a working skill through scoring and ranking movies myself.',
        },
        {
          title: 'Engineering growth',
          description:
            'Shipping the full loop  preprocessing, vectorization, scoring  turned ML concepts into practical skills.',
        },
      ],
    },
    next: {
      label: 'Next project',
      title: 'MORE! ',
      slug: 'video-enhancement-ai',
      status: 'upcoming',
      upcomingLabel: 'Case study coming soon',
      backLabel: 'All projects',
      topLabel: 'Back to top',
    },
  },
];

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);
