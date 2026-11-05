/**
 * Single source of truth for all portfolio content.
 * Edit text, links and lists here — components render from this file.
 */

export const profile = {
  name: 'Muthu Renuga',
  firstName: 'Muthu',
  role: 'Frontend Developer',
  roleLong: 'Frontend Developer | React.js Developer',
  tagline:
    'Frontend Developer crafting responsive and user-friendly web applications using React.js.',
  description:
    'Frontend Developer specializing in React.js, JavaScript, responsive UI development, REST API integration, and creating scalable frontend solutions.',
  location: 'Tenkasi, Tamil Nadu, India',
  email: 'kmuthurenuga1904@gmail.com',
  phone: '+91 8438805246',
  phoneHref: 'tel:+918438805246',
  linkedin: 'https://www.linkedin.com/in/muthurenuga1904',
  linkedinLabel: 'linkedin.com/in/muthurenuga1904',
  // View-only resume page (see src/data/resume.js) — no downloadable file
  resumePath: '/resume',
  // Optional: set to '/profile.jpg' (in /public) to show a photo in the hero
  photo: null,
  heroBadges: ['React.js Developer', 'UI/UX Focused', 'REST API Integration'],
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    'I am a Frontend Developer and MCA graduate passionate about building modern, responsive, and user-friendly web applications.',
    'I specialize in React.js, JavaScript, reusable components, API integration, and converting UI/UX designs into pixel-perfect interfaces.',
    'I enjoy solving frontend challenges and creating digital experiences that are simple, efficient, and scalable.',
  ],
  highlights: [
    {
      key: 'education',
      title: 'Education',
      primary: 'Master of Computer Applications',
      secondary: 'SVC Engineering College and Technology · 2024 – 2026',
    },
    {
      key: 'experience',
      title: 'Experience',
      primary: 'Frontend Developer Intern',
      secondary: 'Dhanvanth Tech Services · Tenkasi',
    },
    {
      key: 'learning',
      title: 'Current Learning',
      primary: 'TypeScript & AI integration',
      secondary: 'Typed React codebases and AI-powered UI features',
    },
  ],
}

export const skillGroups = [
  {
    key: 'frontend',
    title: 'Frontend Development',
    blurb: 'Core languages and the library I build with every day.',
    items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'TypeScript (Basic)'],
  },
  {
    key: 'architecture',
    title: 'Frontend Architecture',
    blurb: 'Structuring interfaces that stay maintainable as they grow.',
    items: ['Reusable Components', 'Component-Based Architecture', 'React Router', 'State Management'],
  },
  {
    key: 'api',
    title: 'API Integration',
    blurb: 'Connecting interfaces to real data, reliably.',
    items: ['REST API', 'Axios', 'Fetch API', 'JSON', 'Async/Await'],
  },
  {
    key: 'design',
    title: 'UI/UX',
    blurb: 'Turning design intent into precise, accessible UI.',
    items: ['Figma', 'Wireframing', 'Responsive Design'],
  },
  {
    key: 'tools',
    title: 'Tools',
    blurb: 'The workflow behind clean, versioned code.',
    items: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools'],
  },
  {
    key: 'other',
    title: 'Other',
    blurb: 'Shipping beyond the browser.',
    items: ['Google Play Console', 'App Publishing', 'AI Feature Integration'],
  },
]

export const experience = [
  {
    role: 'Frontend Developer Intern',
    company: 'Dhanvanth Tech Services',
    location: 'Tenkasi, Tamil Nadu',
    type: 'Internship',
    responsibilities: [
      'Developed responsive React.js applications.',
      'Built reusable UI components.',
      'Converted Figma designs into pixel-perfect interfaces.',
      'Integrated REST APIs.',
      'Managed frontend application state.',
      'Debugged UI and API issues.',
      'Handled Google Play Store release management.',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'SVC Engineering College and Technology',
    period: '2024 – 2026',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'SFR College for Women',
    period: '2021 – 2024',
  },
]

export const projects = [
  {
    key: 'exammate',
    featured: true,
    title: 'The ExamMate',
    category: 'Online Exam Platform',
    // Optional real screenshot, e.g. '/projects/exammate.webp' (in /public)
    image: null,
    summary:
      'An online examination platform for Tamil Nadu State Board students and competitive exam aspirants — practice MCQ-based tests and receive instant results.',
    details: [
      'Developed a responsive React.js frontend with reusable components and REST API integration for dynamic question loading, user data management, and result processing.',
      'The application provides a smooth examination experience across web and mobile platforms.',
    ],
    features: [
      'Online MCQ examinations',
      'Instant results',
      'Dynamic question management',
      'Responsive design',
      'REST API integration',
      'User-friendly exam interface',
      'Android application support',
    ],
    tech: ['React.js', 'JavaScript', 'REST API', 'Axios', 'HTML5', 'CSS3'],
    links: [
      { label: 'Live Demo', href: 'https://theexammate.com/', kind: 'web' },
      {
        label: 'Play Store',
        href: 'https://play.google.com/store/apps/details?id=com.theexammate.app',
        kind: 'android',
      },
    ],
  },
  {
    key: 'sericulture',
    featured: true,
    title: 'Tamil Nadu Sericulture Website',
    category: 'Government Information Portal',
    image: null,
    summary:
      'A responsive web application for the Department of Sericulture, Government of Tamil Nadu — digital access to sericulture information, schemes, farmer services, training programs, and departmental activities.',
    details: [
      'Developed a modern frontend interface focused on accessibility, usability, and responsive design.',
      'Implemented reusable React components, API integration, dynamic content rendering, and multilingual support to create a smooth digital experience for farmers and departmental users.',
    ],
    features: [
      'Government information portal',
      'Farmer service information',
      'Scheme details',
      'Training program details',
      'Dynamic content rendering',
      'Multilingual support',
      'Responsive UI',
    ],
    tech: ['React.js', 'JavaScript', 'REST API', 'Axios', 'React Router', 'i18next', 'HTML5', 'CSS3'],
    // Add the public URL here when available: { label: 'Live Demo', href: '...', kind: 'web' }
    links: [],
  },
  {
    key: 'ai',
    featured: false,
    title: 'AI-Based Intelligent Web Application',
    category: 'AI Web Application',
    status: 'In development',
    image: null,
    summary:
      'Developing an AI-powered web application with smart automated features to improve user experience.',
    details: [
      'Built the frontend interface using React.js and connected AI services through REST APIs.',
    ],
    features: ['Smart automated features', 'AI services via REST APIs', 'React.js interface'],
    tech: ['React.js', 'REST API', 'AI Integration'],
    links: [],
  },
]
