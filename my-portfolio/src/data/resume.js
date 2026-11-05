/**
 * Resume content, rendered as a view-only page at /resume.
 * No PDF is served, so there is no file to download.
 */

export const resume = {
  name: 'Muthu Renuga',
  headline: 'Frontend Developer | React.js | JavaScript',
  contact: [
    { label: 'Tenkasi, Tamil Nadu, India' },
    { label: '+91 8438805246', href: 'tel:+918438805246' },
    { label: 'kmuthurenuga1904@gmail.com', href: 'mailto:kmuthurenuga1904@gmail.com' },
    { label: 'linkedin.com/in/muthurenuga1904', href: 'https://www.linkedin.com/in/muthurenuga1904' },
  ],
  summary:
    'Frontend Developer and MCA graduate (2026) with internship experience building responsive, cross-browser web applications using React.js, JavaScript (ES6+), HTML5 and CSS3. Skilled in creating reusable components, structuring scalable frontend application architecture, integrating REST APIs, and converting Figma designs into clean, user-friendly interfaces based on UI/UX principles. Experienced with Git version control, debugging with browser developer tools, and Google Play Store release management.',
  skills: [
    ['Languages', 'JavaScript (ES6+), HTML5, CSS3, TypeScript (Basic)'],
    ['Frameworks & Libraries', 'React.js (Hooks, Reusable Components, State Management, React Router)'],
    ['Frontend Architecture', 'Component-Based Architecture, Reusable UI Components, Modular Folder Structure'],
    ['Web Design', 'Responsive Web Design, Mobile-First, Flexbox, CSS Grid, Media Queries, Cross-Browser Compatibility'],
    ['API Integration', 'REST APIs, Fetch API, Axios, JSON, Asynchronous JavaScript (Promises, Async/Await)'],
    ['Version Control', 'Git, GitHub (Branching, Commits, Pull Requests)'],
    ['Debugging & Tools', 'Chrome DevTools, Browser Developer Tools, VS Code, npm'],
    ['UI/UX Design', 'Figma, Wireframing, Prototyping, UI/UX Principles'],
    ['Other', 'Google Play Console, App Publishing, Release Management, AI Feature Integration'],
  ],
  experience: [
    {
      role: 'Frontend Developer Intern',
      org: 'Dhanvanth Tech Services, Tenkasi, Tamil Nadu',
      period: '05/2026 – Present',
      points: [
        'Developed responsive web applications using React.js, JavaScript (ES6+), HTML5 and CSS3 for live client projects.',
        'Built reusable React components and organized a modular frontend architecture for maintainable, scalable code.',
        'Converted Figma UI/UX designs into pixel-accurate, responsive interfaces with cross-browser compatibility.',
        'Integrated REST APIs with frontend applications and managed application state for dynamic data rendering.',
        'Debugged and resolved UI and API issues using browser developer tools; managed code with Git and GitHub.',
        'Handled Google Play Store app uploads, store listing updates and release management for the ExamMate mobile app.',
      ],
    },
  ],
  projects: [
    {
      title: 'The ExamMate – Online Exam Platform for TN State Board & TNPSC Students',
      tech: 'React.js, REST API',
      points: [
        'Built an online examination platform where Tamil Nadu State Board students take exams and receive instant results.',
        'Developed reusable, responsive UI components and integrated REST APIs for questions, results and user data.',
        'Published and managed the Android app release on Google Play Store.',
      ],
      links: [
        { label: 'theexammate.com', href: 'https://theexammate.com/' },
        { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.theexammate.app' },
      ],
    },
    {
      title: "Eppattu Sandai – Weavers' Cloth Auction Marketplace",
      tech: 'React.js, REST API',
      points: [
        'Developed an online marketplace connecting cloth weavers with buyers through a competitive bidding system.',
        'Built responsive auction listing and bidding interfaces, enabling weavers to list cloth and buyers to bid and purchase directly.',
      ],
      links: [{ label: 'epattusanthai.tn.gov.in', href: 'https://epattusanthai.tn.gov.in' }],
    },
    {
      title: 'AI-Based Project – Intelligent Web Application',
      tech: 'React.js, REST API, AI',
      points: [
        'Developing the frontend interface of an AI-powered application that adds smart, automated features to improve user experience.',
        'Connecting the React frontend with AI services through REST APIs.',
      ],
      links: [],
    },
  ],
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      period: '08/2024 – 06/2026',
      school: 'SVC Engineering College and Technology, Puliyankudi, Tamil Nadu',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      period: '08/2021 – 06/2024',
      school: 'SFR College for Women, Sivakasi, Tamil Nadu',
    },
  ],
  additional: [
    'Currently learning Digital Marketing (SEO, Social Media Marketing, App Store Optimization).',
    'Languages: English, Tamil',
  ],
}
